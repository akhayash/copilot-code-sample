import { OpenAI } from 'openai';
import { env, validateEnv } from './env';

/**
 * Creates and configures an Azure OpenAI client
 * @returns Configured OpenAI client for Azure
 */
export function createAzureOpenAIClient(): OpenAI {
  // Validate environment variables
  validateEnv();
  
  return new OpenAI({
    apiKey: env.AZURE_OPENAI_API_KEY,
    baseURL: `${env.AZURE_OPENAI_ENDPOINT}/openai/deployments/${env.AZURE_OPENAI_DEPLOYMENT_NAME}`,
    defaultQuery: { 'api-version': env.AZURE_OPENAI_API_VERSION },
    defaultHeaders: { 'api-key': env.AZURE_OPENAI_API_KEY },
  });
}

/**
 * Project plan structure returned by the Azure OpenAI API
 */
export interface ProjectPlan {
  title: string;
  overview: string;
  goals: string[];
  timeline: Array<{ name: string; duration: string; start: string; end: string }>;
  resources: Array<{ role: string; count: number }>;
  risks: string[];
}

/**
 * Generates a project plan from a natural language description
 * 
 * @param description - Natural language description of the project
 * @returns The generated project plan
 */
export async function generateProjectPlan(description: string): Promise<ProjectPlan> {
  const client = createAzureOpenAIClient();

  const systemPrompt = `
    You are a professional project planner AI that creates structured project plans from natural language descriptions.
    Analyze the user's project description and create a comprehensive project plan with the following structure:
    1. A concise title for the project
    2. A brief overview that summarizes the project
    3. Clear goals for the project (4-5 items)
    4. A realistic timeline with phases, durations, and dates
    5. Resource requirements with roles and counts
    6. Potential risks to be aware of (4-5 items)
    
    Your response should be formatted as a valid JSON object with the following structure:
    {
      "title": "Project Title",
      "overview": "Brief project overview",
      "goals": ["Goal 1", "Goal 2", "Goal 3", "Goal 4"],
      "timeline": [
        { "name": "Phase 1", "duration": "X weeks", "start": "YYYY/MM/DD", "end": "YYYY/MM/DD" },
        ...
      ],
      "resources": [
        { "role": "Role name", "count": number of people needed },
        ...
      ],
      "risks": ["Risk 1", "Risk 2", "Risk 3", "Risk 4"]
    }
    
    Ensure dates are realistic and formatted as YYYY/MM/DD. Phase durations should be in weeks.
  `;

  try {
    const completion = await client.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: description }
      ],
      model: env.AZURE_OPENAI_DEPLOYMENT_NAME,
      response_format: { type: 'json_object' },
    });

    const content = completion.choices[0]?.message?.content;
    
    if (!content) {
      throw new Error('No response content from Azure OpenAI');
    }

    return JSON.parse(content) as ProjectPlan;
  } catch (error) {
    console.error('Error generating project plan:', error);
    throw new Error('Failed to generate project plan. Please try again later.');
  }
}
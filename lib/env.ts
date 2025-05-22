/**
 * Environment configuration for Azure OpenAI
 */

export const env = {
  /**
   * Azure OpenAI API Key
   */
  AZURE_OPENAI_API_KEY: process.env.AZURE_OPENAI_API_KEY || '',
  
  /**
   * Azure OpenAI API Endpoint
   * e.g. https://{your-resource-name}.openai.azure.com/
   */
  AZURE_OPENAI_ENDPOINT: process.env.AZURE_OPENAI_ENDPOINT || '',
  
  /**
   * Azure OpenAI API Version
   */
  AZURE_OPENAI_API_VERSION: process.env.AZURE_OPENAI_API_VERSION || '2023-05-15',
  
  /**
   * Azure OpenAI Deployment Name for GPT model
   */
  AZURE_OPENAI_DEPLOYMENT_NAME: process.env.AZURE_OPENAI_DEPLOYMENT_NAME || '',
}

/**
 * Validates that all required environment variables are set
 */
export function validateEnv() {
  const requiredEnvVars = [
    'AZURE_OPENAI_API_KEY', 
    'AZURE_OPENAI_ENDPOINT', 
    'AZURE_OPENAI_DEPLOYMENT_NAME'
  ];
  
  const missingEnvVars = requiredEnvVars.filter(
    varName => !env[varName as keyof typeof env]
  );
  
  if (missingEnvVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingEnvVars.join(', ')}`
    );
  }
}
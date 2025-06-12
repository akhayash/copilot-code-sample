import { NextRequest, NextResponse } from 'next/server';
import { generateProjectPlan } from '@/lib/azure-openai';

/**
 * API handler for project plan generation
 * 
 * @param request - The incoming request object
 * @returns A response with the generated project plan or an error
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate the request body
    if (!body.description || typeof body.description !== 'string') {
      return NextResponse.json(
        { error: 'Invalid request: description is required and must be a string' },
        { status: 400 }
      );
    }

    // Generate the project plan
    const projectPlan = await generateProjectPlan(body.description);
    
    // Return the project plan
    return NextResponse.json(projectPlan);
  } catch (error) {
    console.error('Error in project plan generation API:', error);
    
    // Return an appropriate error response
    return NextResponse.json(
      { error: 'Failed to generate project plan' },
      { status: 500 }
    );
  }
}
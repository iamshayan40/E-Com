// src/sanity/env.ts

// Function to assert that an environment variable is defined
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}

// Get the API version, defaulting to '2024-10-19' if not set
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-19';

// Assert the dataset environment variable
export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', // Default to 'production'
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

// Assert the project ID environment variable
export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '32fw9pu6', // Default to '32fw9pu6'
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

// Optional: Log the values for debugging
console.log('Sanity API Version:', apiVersion);
console.log('Sanity Dataset:', dataset);
console.log('Sanity Project ID:', projectId);

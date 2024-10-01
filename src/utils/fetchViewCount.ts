// utils/fetchViewCount.ts

import { CounterAPI } from 'counterapi';
import { DEFAULT_COUNTER_ID } from '@/config'; // Import DEFAULT_COUNTER_ID

const counter = new CounterAPI(); // Initialize CounterAPI

// Utility function to sanitize the id
const sanitizeId = (id: string): string => {
  return id
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]/g, '');
};

// Function to get the view count
export const getViewCount = async (id: string): Promise<number> => {
  const sanitizedId = sanitizeId(id);
//   console.log(`getViewCount called with id: "${id}", sanitizedId: "${sanitizedId}", DEFAULT_COUNTER_ID: "${DEFAULT_COUNTER_ID}"`);

  try {
    const res = await counter.get(DEFAULT_COUNTER_ID, sanitizedId);
//     console.log('counter.get response:', res);
//     console.log(`Successfully fetched view count: ${res.Count}`);
    return res.Count;
  } catch (error) {
    console.error('Error fetching view count with counter.get:', error);
    return 0; // Return 0 if fetching fails
  }
};

// Function to increment the view count
export const incrementViewCount = async (id: string): Promise<number> => {
  const sanitizedId = sanitizeId(id);
//   console.log(`incrementViewCount called with id: "${id}", sanitizedId: "${sanitizedId}", DEFAULT_COUNTER_ID: "${DEFAULT_COUNTER_ID}"`);

  try {
    const res = await counter.up(DEFAULT_COUNTER_ID, sanitizedId);
//     console.log('counter.up response:', res);
//     console.log(`Successfully incremented view count to: ${res.Count}`);
    return res.Count;
  } catch (error) {
    console.error('Error incrementing view count with counter.up:', error);
    return 0; // Return 0 if incrementing fails
  }
};

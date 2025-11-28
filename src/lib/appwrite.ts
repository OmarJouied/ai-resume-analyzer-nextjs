import { Client, Account } from 'appwrite';
import { env } from './env';

export const client = new Client();

const { NEXT_PUBLIC_APPWRITE_ENDPOINT, NEXT_PUBLIC_APPWRITE_PROJECT_ID } = env;

client
  .setEndpoint(NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(NEXT_PUBLIC_APPWRITE_PROJECT_ID); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';

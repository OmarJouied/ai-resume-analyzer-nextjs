import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge multiple class value inputs into a single Tailwind-compatible class string.
 *
 * @param inputs - One or more class values (strings, arrays, objects, etc.) to combine
 * @returns The resulting class string with Tailwind class conflicts resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a date string into a human-readable US date (e.g., "December 31, 2025").
 *
 * @param dateString - A date/time string accepted by the JavaScript Date constructor (for example, ISO 8601).
 * @returns The date formatted as "Month day, year" (e.g., "December 31, 2025").
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Formats an input date string into an en-US time string showing hours and minutes.
 *
 * @param dateString - A value parseable by the Date constructor representing the date/time to format
 * @returns A time string formatted for `en-US` with 2-digit hour and minute (e.g., "07:05 PM")
 */
export function formatTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
}
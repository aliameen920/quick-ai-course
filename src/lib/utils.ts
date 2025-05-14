
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add jQuery types for Mailchimp integration
declare global {
  interface Window {
    jQuery: any;
    $: any;
    fnames: any[];
    ftypes: any[];
  }
}

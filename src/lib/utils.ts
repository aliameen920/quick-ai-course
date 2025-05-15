import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add jQuery types for Mailchimp integration
declare global {
  interface Window {
    jQuery: JQuery;
    $: JQuery;
    fnames: string[];
    ftypes: string[];
    $mcj: JQuery;
  }
}

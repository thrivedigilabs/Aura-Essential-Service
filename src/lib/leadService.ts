/**
 * Lead Service - Google Sheets Integration
 * 
 * Configuration is managed in src/config.ts
 * Edit that file to update your webhook URL.
 */

import { siteConfig } from "@/config";

const GOOGLE_SHEETS_WEBHOOK_URL = siteConfig.GOOGLE_SHEETS_WEBHOOK_URL;

interface LeadData {
  name: string;
  phone: string;
  service_type: string;
  lead_source: string;
}

export async function submitLead(data: LeadData): Promise<{ success: boolean; error?: string }> {
  // If no webhook URL is configured, log to console (for development)
  if (!GOOGLE_SHEETS_WEBHOOK_URL) {
    console.log("Lead submitted (no webhook configured):", data);
    console.warn("Set VITE_GOOGLE_SHEETS_WEBHOOK_URL in .env to enable Google Sheets integration");
    // Return success for development/demo purposes
    return { success: true };
  }

  try {
    const response = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors", // Required for Google Apps Script
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        source_url: window.location.href,
      }),
    });

    // no-cors mode doesn't return a readable response, assume success
    return { success: true };
  } catch (error) {
    console.error("Error submitting lead:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Failed to submit lead" 
    };
  }
}

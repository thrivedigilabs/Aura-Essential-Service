/**
 * ==========================================
 * WEBSITE CONFIGURATION
 * ==========================================
 * 
 * After hosting this website externally, 
 * edit ONLY this file to configure your settings.
 * 
 * 1. Update your Google Sheets webhook URL if needed
 * 2. Update your site URL after hosting
 * 3. Save and redeploy
 * 4. That's it! All forms will start saving leads.
 */

export const siteConfig = {
  // ========================================
  // LEAD STORAGE - Google Sheets Integration
  // ========================================
  // Your Google Apps Script Web App URL:
  GOOGLE_SHEETS_WEBHOOK_URL: "https://script.google.com/macros/s/AKfycbz_p2GcSJfOXRo_skkqyayS_lvnUsj8NuCMBS134wPi5LkpevHAvMJcCFhrUVqfOmcv/exec",

  // ========================================
  // BUSINESS INFORMATION
  // ========================================
  businessName: "Aura Essential Service",
  phone: "095388 68337",
  whatsappNumber: "919538868337",
  ceoName: "Mohammed Samsuddin",
  
  // ========================================
  // WEBSITE SETTINGS
  // ========================================
  siteUrl: "https://thrivedigilabs.github.io/Aura-Essential-Services", // Update after hosting
};

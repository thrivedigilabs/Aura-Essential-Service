# Google Sheets Lead Storage Setup

## Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "HVAC Leads" (or any name you prefer)
4. Add these headers in Row 1:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Phone`
   - D1: `Service Type`
   - E1: `Lead Source`
   - F1: `Source URL`

## Step 2: Set Up Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Append the lead data to the sheet
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name,
      data.phone,
      data.service_type,
      data.lead_source,
      data.source_url
    ]);
    
    // Optional: Send email notification
    // Uncomment and modify the email address below to enable
    /*
    MailApp.sendEmail({
      to: "your-email@example.com",
      subject: "New HVAC Lead: " + data.name,
      body: `
        New lead received!
        
        Name: ${data.name}
        Phone: ${data.phone}
        Service: ${data.service_type}
        Source: ${data.lead_source}
        
        Call them back within 30 minutes!
      `
    });
    */
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("HVAC Lead Webhook is running!");
}
```

4. Click **Save** (Ctrl+S or Cmd+S)

## Step 3: Deploy as Web App

1. Click **Deploy > New deployment**
2. Click the gear icon and select **Web app**
3. Set the following options:
   - **Description**: "HVAC Lead Webhook"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click **Deploy**
5. Click **Authorize access** and follow the prompts
6. Copy the **Web app URL** (it looks like: `https://script.google.com/macros/s/xxx/exec`)

## Step 4: Configure Your Website

Add the webhook URL to your environment:

### Option A: Environment Variable (Recommended)
Create or update your `.env` file:
```
VITE_GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/your-script-id/exec
```

### Option B: Direct in Code
Update `src/lib/leadService.ts` and replace the empty string with your URL:
```typescript
const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/your-script-id/exec";
```

## Alternative Options

### Option 1: Formspree (No-code)
1. Go to [formspree.io](https://formspree.io)
2. Create a form
3. Get your form endpoint
4. Update `leadService.ts` to POST to Formspree

### Option 2: Zapier Webhook
1. Create a Zap with "Webhooks by Zapier" trigger
2. Connect to Google Sheets action
3. Use the Zapier webhook URL

### Option 3: Airtable
1. Create an Airtable base
2. Use Airtable API to insert records
3. Update `leadService.ts` with Airtable API calls

## Testing

After setup, submit a test lead on your website and check:
1. The Google Sheet for new row
2. Console for any errors
3. Email (if enabled)

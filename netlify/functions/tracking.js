export async function handler(event) {
  // Parse body JSON
  const { trackingNumber } = JSON.parse(event.body);

  // Mete Web App URL Google Sheets ou a isit la
  const sheetUrl = "PASTE_YOUR_GOOGLE_SHEET_WEB_APP_URL_HERE";

  try {
    // Rele Google Sheets Web App
    const res = await fetch(`${sheetUrl}?number=${trackingNumber}`);
    const data = await res.json();

    if (data.error) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: data.error })
      };
    }

    // Retounen done tracking la
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erè rezo oswa Sheets unreachable" })
    };
  }
}

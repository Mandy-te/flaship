export async function handler(event) {
  // Parse body JSON
  const { trackingNumber } = JSON.parse(event.body);

  // Mete Web App URL Google Sheets ou a isit la
  const sheetUrl = "https://script.google.com/macros/s/AKfycbxOsEWaOtJnwVbEW3Li6mKyufenohw1_G862xAtWkBQ7q-30SY4LJurOjySA1B1F95e-g/exe";

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

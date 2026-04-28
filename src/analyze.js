const axios = require("axios");

const log = process.argv[2];

async function analyzeLog() {
  try {
    const response = await axios.post("https://api.openai.com/v1/responses", {
      model: "gpt-4.1-mini",
      input: `Analyze this MongoDB error and suggest solution:\n${log}`
    }, {
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      }
    });

    console.log("AI Suggestion:", response.data.output[0].content[0].text);

  } catch (err) {
    console.error("Error:", err.message);
  }
}

analyzeLog();

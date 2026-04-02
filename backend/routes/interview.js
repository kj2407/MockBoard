import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.post("/start", async (req, res) => {
  const { role, experience, difficulty, jobDesc, resume } = req.body;

  const prompt = `
You are a professional interviewer.

Role: ${role}
Experience: ${experience}
Difficulty: ${difficulty}

Job Description:
${jobDesc}

Resume:
${resume}

Start the interview. Ask the first question.
`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer YOUR_API_KEY`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();
  res.json(data);
});

router.post("/next", async (req, res) => {
  const { messages } = req.body;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer YOUR_API_KEY`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages
    })
  });

  const data = await response.json();
  res.json(data);
});

router.post("/feedback", async (req, res) => {
  const { transcript } = req.body;

  const prompt = `
Evaluate this interview:

${transcript}

Give:
1. Score (out of 10)
2. Strengths
3. Weaknesses
4. Suggestions
`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer YOUR_API_KEY`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();
  res.json(data);
});

export default router;
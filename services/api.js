const BASE_URL = "http://192.168.0.202:3000";

export async function startInterview(body) {
  const res = await fetch(`${BASE_URL}/api/interview/start`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  return res.json();
}

export async function nextQuestion(messages) {
  const res = await fetch(`${BASE_URL}/api/interview/next`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages })
  });
  return res.json();
}

export async function getFeedback(transcript) {
  const res = await fetch(`${BASE_URL}/api/interview/feedback`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ transcript })
  });
  return res.json();
}

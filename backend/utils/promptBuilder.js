export const buildPrompt = ({
    role,
    experience,
    difficulty,
    jobDesc,
    resume
  }) => {
    return `
  You are a professional interviewer.
  
  Role: ${role}
  Experience: ${experience}
  Difficulty: ${difficulty}
  
  Job Description:
  ${jobDesc}
  
  Resume:
  ${resume}
  
  Ask one question at a time.
  Adapt based on answers.
  `;
  };
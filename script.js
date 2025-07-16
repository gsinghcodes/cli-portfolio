const input = document.getElementById("input");
const output = document.getElementById("output");

const commands = {
  help: `Available commands:
  - about
  - skills
  - projects
  - contact
  - clear`,

  about: `Hi, I'm Gyanendra.

I'm a full-stack web developer specializing in the MERN stack.
I enjoy solving complex problems and building responsive, 
efficient web applications that address real-world needs.`,

  skills: `
<table class="skills-table" border="1">
  <thead>
    <tr>
      <th>Category</th>
      <th>Technologies</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Languages</td>
      <td>JavaScript, Python, C++</td>
    </tr>
    <tr>
      <td>Frontend</td>
      <td>HTML, CSS, React, Tailwind CSS, Bootstrap</td>
    </tr>
    <tr>
      <td>Backend</td>
      <td>Node.js, Express.js</td>
    </tr>
    <tr>
      <td>Databases</td>
      <td>MongoDB, MySQL</td>
    </tr>
    <tr>
      <td>Tools & Platforms</td>
      <td>Git, GitHub, Docker, Postman</td>
    </tr>
    <tr>
      <td>Version Control</td>
      <td>Git (CLI), GitHub</td>
    </tr>
    <tr>
      <td>Package Managers</td>
      <td>npm, yarn</td>
    </tr>
    <tr>
      <td>Other Skills</td>
      <td>REST APIs, JSON, MVC Architecture</td>
    </tr>
  </tbody>
</table>
`,

  projects: `
  <table>
  <tr>
    <td class="px-1 md:px-3"><a target="_blank" class="font-semibold hover:text-green-700 underline" href="">Grammar Scorer Engine</a></td>
    <td class="px-1 md:px-3">A tool that analyzes grammar from text or audio input, scores the content, and suggests improvements. Built using Whisper, LanguageTool, and Express.js.</td>
  </tr>
  <tr>
    <td class="px-1 md:px-3"><a target="_blank" class="font-semibold hover:text-green-700 underline" href="">TaxiGo</a></td>
    <td class="px-1 md:px-3">A full-stack ride booking platform inspired by Uber. Built with the MERN stack, it features real-time ride tracking, captain and user dashboards, secure authentication, and status-based ride management.</td>
  </tr>
  <tr>
    <td class="px-1 md:px-3"><a target="_blank" class="font-semibold hover:text-green-700 underline" href="">FinSight</a></td>
    <td class="px-1 md:px-3">A full-stack finance tracker with real-time budget suggestions using NLP and automated MySQL reports. Built with React, Node.js, MySQL, and Python.</td>
  </tr>
</table>
`,

  contact: `📧 Email: gyansh@example.com
🔗 GitHub: github.com/gyansh
💼 LinkedIn: linkedin.com/in/gyansh`,
};

let history = [];
let historyIndex = -1;

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim().toLowerCase();
    const promptLine = `<div><span class="prompt">gyansh@portfolio:~$</span> ${cmd}</div>`;
    output.innerHTML += promptLine;

    if (cmd === "clear") {
      output.innerHTML = "";
    } else {
      const response = commands[cmd] || `Command not found: ${cmd}`;
      output.innerHTML += `<div>${response}</div>`;
    }

    input.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  }
});


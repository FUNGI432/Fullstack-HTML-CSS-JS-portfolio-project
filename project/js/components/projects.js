export function renderProjects() {
    const projects = document.getElementById('projects');
    projects.innerHTML = `
        <h2 class="section-title">🔨 Current Projects</h2>
        <div class="project-card">
            <h3>🌐 Combined Portfolio Website</h3>
            <p>Collaborative website development using HTML, CSS, and JavaScript.</p>
        </div>
        <div class="project-card">
            <h3>🛡️ Women Safety Analytics Dashboard</h3>
            <p>Building a hotspot detection system for actionable insights.</p>
        </div>
        <div class="project-card">
            <h3>⚡ Club Management System (Sonder)</h3>
            <p>Automating club processes for seamless event approvals and communication.</p>
        </div>
    `;
}
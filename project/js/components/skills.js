export function renderSkills() {
    const skills = document.getElementById('skills');
    skills.innerHTML = `
        <h2 class="section-title">🚀 Skills</h2>
        <div class="skills-grid">
            <div class="skill-category">
                <h3>💻 Programming</h3>
                <p>HTML, CSS, JavaScript, React, SQL, C++</p>
            </div>
            <div class="skill-category">
                <h3>🎨 Design</h3>
                <p>Adobe Photoshop, Canva, threshold-based social media design</p>
            </div>
            <div class="skill-category">
                <h3>👥 Leadership</h3>
                <p>Event planning, team management, creative direction</p>
            </div>
            <div class="skill-category">
                <h3>🛠️ Special Projects</h3>
                <p>Web3 gaming, analytics dashboards for safety, event automation tools</p>
            </div>
        </div>
    `;
}
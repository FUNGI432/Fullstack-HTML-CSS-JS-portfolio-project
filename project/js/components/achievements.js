export function renderAchievements() {
    const achievements = document.getElementById('achievements');
    achievements.innerHTML = `
        <h2 class="section-title">🏆 Major Achievements</h2>
        <ul>
            <li>🏢 Corporate Visit: Organized a visit to Ingenuity Gaming, gaining valuable industry insights.</li>
            <li>🎮 Tech Fest Leadership: Successfully managed the creative and technical aspects of Bennett's tech fests, Alexis and Zenevia.</li>
            <li>📚 Event Leadership: Led academic and tech events like the 9.2 SGPA event, fostering knowledge sharing among students.</li>
            <li>👨‍🏫 Workshops: Taught full-stack development basics to 500+ students through night classes.</li>
        </ul>
    `;
}
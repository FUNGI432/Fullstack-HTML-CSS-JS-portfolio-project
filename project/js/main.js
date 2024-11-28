import { renderHeader } from './components/header.js';
import { renderAbout } from './components/about.js';
import { renderResponsibilities } from './components/responsibilities.js';
import { renderAchievements } from './components/achievements.js';
import { renderSkills } from './components/skills.js';
import { renderProjects } from './components/projects.js';
import { renderWallpapers } from './components/wallpapers.js';
import { renderContact } from './components/contact.js';

// Initialize all sections
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    renderHeader();
    renderAbout();
    renderResponsibilities();
    renderAchievements();
    renderSkills();
    renderProjects();
    renderWallpapers();
    renderContact();
});
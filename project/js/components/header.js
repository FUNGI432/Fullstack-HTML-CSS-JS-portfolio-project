export function renderHeader() {
    const header = document.getElementById('header');
    header.innerHTML = `
        <div class="profile-info">
            <img src="public/images/profile/profile-photo.png" alt="Aman Gangwar" class="profile-image">
            <h1 class="glitch" data-glitch="Aman Gangwar">Aman Gangwar</h1>
            <p class="title animated-text">President, Fullstack Club | Design Head, Alexis & Zenevia | Designer, ACM Bennett | Tech Enthusiast</p>
        </div>
    `;
}
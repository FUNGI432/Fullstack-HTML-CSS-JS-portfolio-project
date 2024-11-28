export function renderWallpapers() {
    const wallpapers = document.getElementById('wallpapers');
    wallpapers.innerHTML = `
        <h2 class="section-title">🎨 My Wallpaper Designs</h2>
        <div class="wallpapers-grid">
            <div class="wallpaper-card" data-aos="zoom-in">
                <img src="public/images/wallpapers/wallpaper-1.jpg" alt="Kagurabachi Design" class="wallpaper-image">
                <div class="wallpaper-overlay">
                    <h3>Kagurabachi Design</h3>
                    <p>1920x1080</p>
                    <a href="public/images/wallpapers/wallpaper-1.jpg" download class="download-btn">Download</a>
                </div>
            </div>
            <div class="wallpaper-card" data-aos="zoom-in">
                <img src="public/images/wallpapers/wallpaper-2.jpg" alt="Bleach Design" class="wallpaper-image">
                <div class="wallpaper-overlay">
                    <h3>Bleach Design</h3>
                    <p>1920x1080</p>
                    <a href="public/images/wallpapers/wallpaper-2.jpg" download class="download-btn">Download</a>
                </div>
            </div>
            <div class="wallpaper-card" data-aos="zoom-in">
                <img src="public/images/wallpapers/wallpaper-3.jpg" alt="Makima Design" class="wallpaper-image">
                <div class="wallpaper-overlay">
                    <h3>Makima Design</h3>
                    <p>1920x1080</p>
                    <a href="public/images/wallpapers/wallpaper-3.jpg" download class="download-btn">Download</a>
                </div>
            </div>
            <div class="wallpaper-card" data-aos="zoom-in">
                <img src="public/images/wallpapers/wallpaper-4.jpg" alt="Black Panther Design" class="wallpaper-image">
                <div class="wallpaper-overlay">
                    <h3>Black Panther Design</h3>
                    <p>1920x1080</p>
                    <a href="public/images/wallpapers/wallpaper-4.jpg" download class="download-btn">Download</a>
                </div>
            </div>
        </div>
    `;
}

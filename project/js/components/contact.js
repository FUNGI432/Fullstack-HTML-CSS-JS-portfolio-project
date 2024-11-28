export function renderContact() {
    const contact = document.getElementById('contact');
    contact.innerHTML = `
        <h2 class="section-title">📬 Contact Information</h2>
        <div class="contact-info">
            <div class="contact-item">
                <span>📧</span>
                <a href="mailto:amangangwar432@gmail.com">amangangwar432@gmail.com</a>
            </div>
            <div class="contact-item">
                <span>💼</span>
                <a href="https://www.linkedin.com/in/aman-gangwar-300822292/" target="_blank">LinkedIn</a>
            </div>
            <div class="contact-item">
                <span>💻</span>
                <a href="https://github.com/Fullstack-Club-Bennett-University" target="_blank">GitHub</a>
            </div>
        </div>
    `;
}
export function renderResponsibilities() {
    const responsibilities = document.getElementById('responsibilities');
    responsibilities.innerHTML = `
        <h2 class="section-title">🎯 Positions of Responsibility</h2>
        <div class="responsibility-card">
            <h3>👨‍💻 President, Fullstack Club</h3>
            <p>Spearheading the club's mission to empower tech enthusiasts through workshops, events, and innovative projects like the Club Management System (Sonder). Collaborating with industry leaders like Xebia for sponsorships and student development.</p>
        </div>
        <div class="responsibility-card">
            <h3>🎨 Design Head, Alexis and Zenevia</h3>
            <p>Leading the design vision for Alexis and Zenevia, Bennett University's premier cultural and tech fests, delivering impactful branding and promotional materials.</p>
        </div>
        <div class="responsibility-card">
            <h3>✏️ Designer, ACM Bennett</h3>
            <p>Designing visually compelling assets for ACM events and initiatives, combining creativity with technical insight.</p>
        </div>
        <div class="responsibility-card">
            <h3>💼 Intern, Vet Livestock Pharma</h3>
            <p>Developing social media campaigns for veterinary products such as Electro Appetizer-PET and Calton-Pet Calcium Syrup, focusing on "Dedicated to Animal Wellness."</p>
        </div>
    `;
}
function openModal() {
  document.getElementById("contactModal").classList.add("open");
}
function closeModal() {
  document.getElementById("contactModal").classList.remove("open");
}
document.getElementById("contactModal").addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});
function copyEmail() {
  navigator.clipboard
    .writeText("greenbeacons.2025@gmail.com")
    .then(() => alert("Email copied!"))
    .catch(() => prompt("Copy this:", "greenbeacons.2025@gmail.com"));
}
// Intersection observer for fade-up on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting)
        e.target.style.animation = "fadeUp .7s ease forwards";
    });
  },
  { threshold: 0.1 }
);
document
  .querySelectorAll(".pillar,.proof-item,.price-card,.kpa,.not-item")
  .forEach((el) => {
    el.style.opacity = "0";
    observer.observe(el);
  });

// Use html script

function showContactOptions() {
  document.getElementById("contactModal").style.display = "flex";
}
function closeContactModal() {
  document.getElementById("contactModal").style.display = "none";
}
function copyEmail() {
  navigator.clipboard
    .writeText("greenbeacons.2025@gmail.com")
    .then(function () {
      alert("Email copied: greenbeacons.2025@gmail.com");
    });
}
document.getElementById("contactModal").addEventListener("click", function (e) {
  if (e.target === this) closeContactModal();
});

// Director bios
const bios = {
  // ... unchanged bios object ...
  samkelo: {
    name: "Samkelo Madlala",
    role: "Co-Director",
    experience: `
                <h3 style="color:var(--primary-dark); margin-bottom:0.75rem;">Experience</h3>
                <ul style="line-height:1.7; color:var(--text-muted); margin-bottom:1.2rem; padding-left:1.2rem;">
                    <li><strong>DUCT Rivers (2023–Present)</strong> – Training & Pathways Facilitator and Project Administrator, supporting youth development and organisational systems.</li>
                    <li><strong>Wild Trust (2024–Present)</strong> – Interns Project Manager for the YES Nedbank Programme, overseeing 15–16 youth interns.</li>
                    <li><strong>Mindset & Productivity Writer</strong> – Author of 100+ online blogs on mindset, learning, and personal mastery.</li>
                </ul>
                <h3 style="color:var(--primary-dark); margin-bottom:0.75rem;">Education & Certifications</h3>
                <ul style="line-height:1.7; color:var(--text-muted); margin-bottom:1.2rem; padding-left:1.2rem;">
                    <li>A2B Hardwires Interpretation Coach (In Progress)</li>
                    <li>Advanced Emerging Leader, TLC Global (2024)</li>
                    <li>Python & HTML Programming</li>
                </ul>
                <h3 style="color:var(--primary-dark); margin-bottom:1rem;">Hobbies</h3>
                <p style="color:var(--text-muted); line-height:1.8;">
                    Reading • Writing • Soccer • Exercise
                </p>
            `,
    photo: "images/samkelo/samkelo-photo.jpg",
  },
  thabo: {
    name: "Thabo Blessing Duma",
    role: "Director",
    experience: `
                <h3 style="color:var(--primary-dark); margin-bottom:0.75rem;">Experience</h3>
                <ul style="line-height:1.7; color:var(--text-muted); margin-bottom:1.2rem; padding-left:1.2rem;">
                    <li><strong>GreenBeacons (Present)</strong> – Director, leading initiatives that blend environmental sustainability with personal development, equipping young people to become custodians of ecological infrastructure.</li>
                    <li><strong>SANBI</strong> – Specialized in conservation and data systems management.</li>
                    <li><strong>Ezemvelo KZN Wildlife</strong> – Gained expertise in conservation practices and environmental management.</li>
                    <li><strong>Invasive Species Management</strong> – Led clearing initiatives in KwaZulu-Natal focused on ecological restoration.</li>
                </ul>
                <h3 style="color:var(--primary-dark); margin-bottom:0.75rem;">Speaking & Advocacy</h3>
                <ul style="line-height:1.7; color:var(--text-muted); margin-bottom:1.2rem; padding-left:1.2rem;">
                    <li><strong>World Youth Skills Day Dialogue</strong> – Featured speaker sharing insights on youth empowerment and green economies.</li>
                    <li><strong>Africa Forward Summit</strong> – Engaged with policy makers on inclusive, sustainable development strategies.</li>
                </ul>
                <h3 style="color:var(--primary-dark); margin-bottom:1rem;">Mission</h3>
                <p style="color:var(--text-muted); line-height:1.8;">
                    Committed to shaping inclusive, green economies through youth empowerment. Believes that empowered youth are the key to thriving ecosystems and sustainable environmental stewardship.
                </p>
            `,
    photo: "images/thabo/thabo-photo.jpg",
  },
  gina: {
    name: "Sethabile Gina",
    role: "Finance & Admin Manager",
    experience: `
                <h3 style="color:var(--primary-dark); margin-bottom:0.75rem;">Experience</h3>
                <ul style="line-height:1.7; color:var(--text-muted); margin-bottom:1.2rem; padding-left:1.2rem;">
                    <li><strong>DUCT Rivers (2024–Present)</strong> – Project Finance Administrator & Office Manager Assistant, managing payroll for 1,000+ employees and overseeing budget planning for multimillion-rand environmental projects.</li>
                    <li><strong>Financial Leadership</strong> – Expertise in financial reporting, forecasting, and tender support for large-scale environmental initiatives.</li>
                    <li><strong>Mentorship & Development</strong> – Mentors finance interns and develops reporting frameworks to strengthen organizational capacity.</li>
                </ul>
                <h3 style="color:var(--primary-dark); margin-bottom:0.75rem;">Education & Certifications</h3>
                <ul style="line-height:1.7; color:var(--text-muted); margin-bottom:1.2rem; padding-left:1.2rem;">
                    <li>A2B Transformative Leadership Programme (2025)</li>
                    <li>Environmental Project Planning & Proposal Writing – GreenMatter (2025)</li>
                    <li>Facilitation Programme – DUCT (2025)</li>
                    <li>Data Science & Data Analytics – Cisco (2022–2025)</li>
                    <li>AI for Everyone – Coursera (2024)</li>
                </ul>
                <h3 style="color:var(--primary-dark); margin-bottom:0.75rem;">Technical Skills</h3>
                <p style="color:var(--text-muted); line-height:1.8; margin-bottom:1.2rem;">
                    Project Budgeting & Payroll • Financial Reporting & Analysis • Excel (Models, Pivot Tables, Macros) • Sage • Kwantu.Me • Data Analytics
                </p>
                <h3 style="color:var(--primary-dark); margin-bottom:1rem;">Hobbies</h3>
                <p style="color:var(--text-muted); line-height:1.8;">
                    Reading • Aerobics • Swimming • Research
                </p>
            `,
    photo: "images/gina/gina-photo.jpg",
  },
};
function showBio(person) {
  const bio = bios[person];
  document.getElementById("bioContent").innerHTML = `
                <img src="${bio.photo}" alt="${bio.name}" style="width:150px; height:150px; border-radius:50%; display:block; margin:0 auto 1.5rem; object-fit:cover;">
                <h2 style="text-align:center; color:var(--primary-dark); margin-bottom:0.5rem;">${bio.name}</h2>
                <p style="text-align:center; color:var(--text-muted); margin-bottom:2rem; font-style:italic;">${bio.role}</p>
                ${bio.experience}
            `;
  document.getElementById("bioModal").style.display = "flex";
}
function closeBio() {
  document.getElementById("bioModal").style.display = "none";
}
// Click outside modal content closes bio modal and new modals
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("bioModal").addEventListener("click", function (e) {
    if (e.target === this) closeBio();
  });
  document
    .getElementById("clientsModal")
    .addEventListener("click", function (e) {
      if (e.target === this) closeClientsModal();
    });
  document
    .getElementById("participantsModal")
    .addEventListener("click", function (e) {
      if (e.target === this) closeParticipantsModal();
    });
  document.getElementById("psModal").addEventListener("click", function (e) {
    if (e.target === this) closePSModal();
  });
});
// New modals open/close handlers
function showClientsModal() {
  document.getElementById("clientsModal").style.display = "flex";
}
function closeClientsModal() {
  document.getElementById("clientsModal").style.display = "none";
}
function showParticipantsModal() {
  document.getElementById("participantsModal").style.display = "flex";
}
function closeParticipantsModal() {
  document.getElementById("participantsModal").style.display = "none";
}
// Public Speaking Service modal logic
document
  .getElementById("publicSpeakingCard")
  .addEventListener("click", showPSModal);
document
  .getElementById("publicSpeakingCard")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter" || e.key === " ") showPSModal();
  });
function showPSModal() {
  document.getElementById("psModal").style.display = "flex";
}
function closePSModal() {
  document.getElementById("psModal").style.display = "none";
}

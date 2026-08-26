// ===== DADOS DAS VAGAS =====
const jobs = [
  {
    company: "Linear",
    initial: "L",
    color: "#5b5bf6",
    title: "Senior Product Designer",
    salary: "R$ 18k – 24k",
    location: "Remoto",
    time: "2h"
  },
  {
    company: "Vercel",
    initial: "V",
    color: "#111111",
    title: "Full-stack Engineer (Next.js)",
    salary: "R$ 20k – 30k",
    location: "Remoto",
    time: "4h"
  },
  {
    company: "Notion",
    initial: "N",
    color: "#5b5bf6",
    title: "Backend Engineer, Databases",
    salary: "R$ 22k – 32k",
    location: "São Paulo, BR",
    time: "1d"
  },
  {
    company: "Figma",
    initial: "F",
    color: "#e8562e",
    title: "Design Systems Lead",
    salary: "R$ 25k – 35k",
    location: "New York",
    time: "2d"
  },
  {
    company: "Stripe",
    initial: "S",
    color: "#6355ff",
    title: "Growth Marketer",
    salary: "R$ 15k – 22k",
    location: "Remoto",
    time: "3d"
  },
  {
    company: "Retool",
    initial: "R",
    color: "#3d63f6",
    title: "Customer Success Manager",
    salary: "R$ 10k – 15k",
    location: "Remoto",
    time: "5d"
  },
  {
    company: "Cal.com",
    initial: "C",
    color: "#111111",
    title: "Head of People",
    salary: "R$ 20k – 28k",
    location: "Remoto",
    time: "1sem"
  }
];

// ===== DEPOIMENTOS =====
const testimonials = [
  {
    quote: "Contratei duas designers em menos de uma semana. Formulário simples e público certo.",
    name: "Marina Costa",
    role: "Head of People · Vercel",
    initial: "M",
    color: "#e8562e"
  },
  {
    quote: "Encontrei minha vaga atual scrollando a home num sábado. Aplicação em dois cliques.",
    name: "Lucas Beskow",
    role: "Software Engineer · Notion",
    initial: "L",
    color: "#3d63f6"
  },
  {
    quote: "Melhor ROI de anúncio que já tivemos para tech. Voltamos todo trimestre.",
    name: "André Lima",
    role: "Founder · Retool BR",
    initial: "A",
    color: "#5f9e6e"
  }
];

// ===== RENDERIZAR VAGAS =====
function renderJobs() {
  const list = document.getElementById("job-list");
  list.innerHTML = jobs.map(job => `
    <div class="job-card">
      <div class="job-logo" style="background:${job.color}">${job.initial}</div>
      <div class="job-info">
        <div class="job-company">${job.company}</div>
        <div class="job-title">${job.title}</div>
        <div class="job-tags">
          <span class="job-tag">${job.salary}</span>
          <span class="job-tag">${job.location}</span>
        </div>
      </div>
      <div class="job-side">
        <span class="job-time">${job.time}</span>
        <a href="#" class="job-apply">Candidatar-se →</a>
      </div>
    </div>
  `).join("");
}

// ===== RENDERIZAR DEPOIMENTOS =====
function renderTestimonials() {
  const grid = document.getElementById("testimonial-grid");
  grid.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <p class="testimonial-quote">"${t.quote}"</p>
      <div class="testimonial-person">
        <div class="avatar" style="background:${t.color}">${t.initial}</div>
        <div>
          <div class="person-name">${t.name}</div>
          <div class="person-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join("");
}

// ===== NEWSLETTER =====
function setupNewsletter() {
  const form = document.getElementById("newsletter-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const input = form.querySelector("input");
    const btn = form.querySelector("button");
    const original = btn.textContent;
    btn.textContent = "Inscrito ✓";
    input.value = "";
    setTimeout(() => (btn.textContent = original), 2000);
  });
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  renderJobs();
  renderTestimonials();
  setupNewsletter();
});
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initInvestChart();
});

// ==================================================
//  SIDEBAR
// ==================================================
function openNav() {
  document.getElementById("sidebar-content").style.width = "250px";
}
function closeNav() {
  document.getElementById("sidebar-content").style.width = "0";
}

// ==================================================
//  PARTICLES
// ==================================================
function initParticles() {
  const canvas = document.getElementById("particles-demo");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const particles = [];

  function resize() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: 1 + Math.random() * 2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  draw();
}

const popupData = {
  "Healthcare": {
    desc: "AI helps with rapid diagnosis, patient monitoring, and reduces human error.",
    stats: [
      { num: "83%", text: "Major hospitals are using AI for rapid diagnosis." },
      { num: "250,000+", text: "MRI/CT scans are processed by AI every day globally." },
      { num: "37%", text: "Reduction of medical human error due to AI assistance." }
    ]
  },

  "Transport": {
    desc: "AI reduces accidents, congestion, and improves fuel efficiency.",
    stats: [
      { num: "94%", text: "Accidents from human error. AI helps reduce them." },
      { num: "4.2M", text: "Traffic hours can be reduced by AI every year." },
      { num: "20%", text: "Fuel efficiency is increased through AI route optimization." }
    ]
  },

  "Education": {
    desc: "Learning speed increases with adaptive AIAI makes learning faster, more personal, and more adaptive.",
    stats: [
      { num: "48%", text: "Global schools use AI personalization." },
      { num: "1.1B", text: "Students use the AI ​​learning tools application." },
      { num: "32%", text: "Learning speed increases with adaptive AI." }
    ]
  },
  "Virtual Assistants and Chatbots": {
    desc: "Artificial intelligence supports virtual assistants and chatbots that facilitate a wide range of daily tasks. These systems are capable of responding to inquiries in real time, managing schedules, providing reminders, retrieving information, and assisting users through digital platforms or customer service channels. Modern AI-based conversational agents can interpret natural language, adapt to user communication patterns, and deliver highly personalized interactions.",
    stats: [
      { num: "80%", text: "Of customer service interactions handled by AI chatbots." },
      { num: "1.4B", text: "People use voice assistants daily." },
      { num: "65%", text: "Improvement in user satisfaction with AI assistants." }
    ]
  },
  "Finance and Banking": {
    desc: "AI is widely used in the finance and banking sectors for various applications, including fraud detection, risk assessment, algorithmic trading, and customer service. Machine learning algorithms analyze vast amounts of financial data to identify unusual patterns that may indicate fraudulent activities. Additionally, AI-driven systems can evaluate creditworthiness, optimize investment strategies, and provide personalized financial advice to customers through chatbots and virtual assistants.",
    desc: "The financial sector employs AI to improve security and streamline operations. AI systems identify potentially fraudulent transactions, assess creditworthiness by analyzing complex data patterns, and automate high-volume financial processes. These capabilities contribute to faster, safer, and more reliable financial services for both institutions and customers.",
    stats: [
      { num: "85%", text: "Financial institutions use AI for fraud detection." },
      { num: "70%", text: "Reduction in false positives in fraud detection." },
      { num: "$1.3T", text: "Value of assets managed by AI-driven investment platforms." }
    ]
  },
  "Recommendations and Personalization": {
    desc: "AI powers recommendation systems that personalize user experiences across various platforms, including e-commerce, streaming services, and social media. By analyzing user behavior, preferences, and interactions, AI algorithms can suggest products, content, or connections that align with individual tastes. These personalized recommendations enhance user engagement, satisfaction, and retention by delivering relevant and tailored experiences.",
    stats: [
      { num: "75%", text: "Of users rely on AI recommendations for purchases." },
      { num: "60%", text: "Increase in user engagement with personalized content." },
      { num: "30%", text: "Boost in sales through AI-driven recommendations." }
    ]
  },
  "Automation and Efficiency": {
    desc: "AI-driven automation enhances efficiency across various industries by streamlining processes, reducing manual labor, and minimizing errors. In manufacturing, AI-powered robots and systems can perform repetitive tasks with high precision and speed. In business operations, AI automates data entry, customer support, and supply chain management, allowing human workers to focus on more complex and strategic activities. This leads to increased productivity, cost savings, and improved overall performance.",
   desc:"AI contributes significantly to operational efficiency by automating repetitive and labor-intensive tasks. In industrial environments, AI-driven machines perform production activities with speed and precision. Within smart homes, AI systems regulate lighting, temperature, and security functions autonomously. Additionally, AI excels in processing large-scale data sets, enabling organizations to conduct rapid and accurate analysis for decision-making.",
    stats: [
      { num: "40%", text: "Increase in productivity through AI automation." },
      { num: "50%", text: "Reduction in operational costs with AI-driven processes." },
      { num: "70%", text: "Decrease in errors due to AI automation." }
    ]
  },
  "Cybersecurity": {
    desc: "AI plays a crucial role in enhancing cybersecurity by detecting and responding to threats in real time. Machine learning algorithms analyze network traffic, user behavior, and system logs to identify anomalies that may indicate cyberattacks or vulnerabilities. AI-driven security systems can automatically respond to threats, such as blocking malicious activities or alerting security teams. This proactive approach helps organizations protect sensitive data, maintain system integrity, and mitigate risks associated with cyber threats.",
    stats: [
      { num: "90%", text: "Of cybersecurity firms use AI for threat detection." },
      { num: "60%", text: "Reduction in response time to cyber threats." },
      { num: "45%", text: "Decrease in successful cyberattacks with AI defenses." }
    ]
  },

    
};

// DOM TARGET
const popup = document.getElementById("info-popup");

// EVENT CARD → POPUP
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").textContent.trim();
    const data = popupData[title];

    if (!data) return;

    popup.innerHTML = `
      <button class="close-popup">&times;</button>
      <h2>${title}</h2>
      <p class="popup-desc">${data.desc}</p>

      <div class="popup-stats">
        ${data.stats
          .map(
            s => `
          <div class="stat-box">
            <div class="stat-num">${s.num}</div>
            <div class="stat-text">${s.text}</div>
          </div>
        `
          )
          .join("")}
      </div>
    `;

    popup.style.display = "block";
    popup.scrollIntoView({ behavior: "smooth", block: "center" });

    popup.querySelector(".close-popup").onclick = () => {
      popup.style.display = "none";
    };
  });
});

// ==================================================
//  AI INVESTMENT CHART (BIRU PASTEL) 
// ==================================================
function initInvestChart() {
  const canvas = document.getElementById("chartInvestAI");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["USA", "China", "UK", "Germany", "Japan"],
      datasets: [
        {
          label: "AI Investment (Billion USD)",
          data: [224, 109, 28, 22, 18],
          backgroundColor: "rgba(100, 170, 255, 0.8)", // biru pastel 80%
          borderRadius: 10,
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: { 
            color: "rgba(60, 60, 60, 0.9)", // teks abu tua 90%
            font: { size: 14 }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: "rgba(60, 60, 60, 0.9)" },
          grid: { color: "rgba(0,0,0,0.1)" }
        },
        x: {
          ticks: { color: "rgba(60, 60, 60, 0.9)" },
          grid: { display: false }
        }
      }
    }
  });
}
// =========================
// SYSTEM TRANSLATE 3 BAHASA
// =========================
const translations = {
  "id": {
    title: "Gambaran Umum Kecerdasan Buatan",

    healthcare: "Kesehatan",
    healthcare_desc: "AI meningkatkan akurasi diagnosa dan pemantauan pasien.",

    transport: "Transportasi",
    transport_desc: "AI membantu mengurangi kecelakaan dan mengoptimalkan lalu lintas.",

    education: "Pendidikan",
    education_desc: "AI meningkatkan pengalaman belajar yang personal.",

    footer: "© 2025 Proyek Gambaran AI"
  },

  "en": {
    title: "Artificial Intelligence Overview",

    healthcare: "Healthcare",
    healthcare_desc: "AI improves diagnosis accuracy and patient monitoring.",

    transport: "Transportation",
    transport_desc: "AI helps reduce accidents and optimize traffic.",

    education: "Education",
    education_desc: "AI enhances personalized learning experiences.",

    footer: "© 2025 AI Overview Project"
  },

  "zh": {
    title: "人工智能概述",

    healthcare: "医疗保健",
    healthcare_desc: "人工智能提高诊断准确性并辅助监护。",

    transport: "交通运输",
    transport_desc: "人工智能有助于减少事故并优化交通流量。",

    education: "教育",
    education_desc: "人工智能提高个性化学习体验。",

    footer: "© 2025 人工智能概览项目"
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-text]");

  elements.forEach(el => {
    const key = el.getAttribute("data-text");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("site-lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("site-lang") || "en";
  setLanguage(saved);
});
document.getElementById('year9').textContent = new Date().getFullYear();
document.querySelectorAll(".card").forEach(card => {
  const popup = card.querySelector(".info-popup");
  const closeBtn = popup.querySelector(".close-popup");

  card.addEventListener("click", () => {
    // Tutup semua popup lain
    document.querySelectorAll(".info-popup").forEach(p => {
      if (p !== popup) p.style.display = "none";
    });

    // Toggle popup card ini
    popup.style.display = popup.style.display === "block" ? "none" : "block";
    if (popup.style.display === "block") {
      popup.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });

  closeBtn.addEventListener("click", e => {
    e.stopPropagation();
    popup.style.display = "none";
  });
});

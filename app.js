const TRM = 3357.82;
const userPlanValue = 2134000;
const usd = value => Math.round(value * TRM);
const annualToMonthlyUsd = value => usd(value / 12);
const eur = value => Math.round(value * 3650);

const apps = [
  {
    id: "calidad",
    icon: "fa-folder-tree",
    name: "Página de calidad",
    type: "Repositorio documental y comunicaciones",
    analyst: "Analista de calidad",
    salary: 2100000,
    dedication: 28,
    marketMonthly: Math.round((usd(80) + usd(12.5 * 10) + usd(200)) / 3),
    operatingSavings: 520000,
    maintenanceAvoided: 140000,
    features: ["Repositorio documental", "Noticias internas", "Auditorías", "Acceso a aplicativos", "Información centralizada", "Búsqueda y consulta rápida"],
    why: "Organiza el conocimiento del proceso de calidad en un punto único, baja la dependencia de carpetas sueltas y reduce solicitudes repetidas de documentos.",
    competitors: [
      { name: "Archbee", plan: "Portal desde USD 80/mes", monthlyCop: usd(80), basis: "Portal de conocimiento con lectores ilimitados", source: "https://www.archbee.com/pricing" },
      { name: "Slab", plan: "Business USD 12,50 usuario/mes × 10", monthlyCop: usd(12.5 * 10), basis: "Base de conocimiento por usuario", source: "https://slab.com/pricing/" },
      { name: "Helpjuice", plan: "Run-Up USD 200/mes", monthlyCop: usd(200), basis: "Knowledge base con colaboración y control", source: "https://helpjuice.com/pricing" }
    ]
  },
  {
    id: "logistica",
    icon: "fa-route",
    name: "ERP trazabilidad logística",
    type: "Flujo de pedidos, roles y estados",
    analyst: "Analista logístico / calidad",
    salary: 2100000,
    dedication: 58,
    marketMonthly: Math.round((usd(55 * 15) + usd(49 * 10) + usd(249)) / 3),
    operatingSavings: 2100000,
    maintenanceAvoided: 420000,
    features: ["Ventas", "Caja", "Logística", "Corte de cable", "Alistamiento", "Facturación", "Recepción", "Reportes"],
    why: "Conecta áreas que antes podían trabajar por mensajes, formatos y validaciones manuales. El valor real está en la trazabilidad y en la disminución del reproceso operativo.",
    competitors: [
      { name: "Quickbase", plan: "Business USD 55 usuario/mes × 15", monthlyCop: usd(55 * 15), basis: "Plataforma de procesos y aplicaciones internas", source: "https://www.quickbase.com/plans-and-pricing" },
      { name: "Odoo", plan: "Referencia cloud USD 49 usuario/mes × 10", monthlyCop: usd(49 * 10), basis: "ERP modular con apps integradas", source: "https://www.odoo.com/pricing-configurator" },
      { name: "Zoho Inventory", plan: "Enterprise USD 249/mes", monthlyCop: usd(249), basis: "Inventario y órdenes con límites por plan", source: "https://www.zoho.com/inventory/pricing/" }
    ]
  },
  {
    id: "aula",
    icon: "fa-graduation-cap",
    name: "Aula EI",
    type: "Capacitación, evaluación y certificados",
    analyst: "Analista de formación",
    salary: 2100000,
    dedication: 35,
    marketMonthly: Math.round((annualToMonthlyUsd(1180) + usd(109) + usd(249)) / 3),
    operatingSavings: 850000,
    maintenanceAvoided: 140000,
    features: ["Cursos", "Evaluaciones", "Certificados", "Ranking", "Recursos", "Asignaciones", "Seguimiento"],
    why: "Convierte capacitaciones internas en rutas medibles, evita dispersión de evidencias y permite demostrar cumplimiento con datos de avance.",
    competitors: [
      { name: "MoodleCloud", plan: "Medium USD 1.180/año", monthlyCop: annualToMonthlyUsd(1180), basis: "LMS administrado con usuarios y almacenamiento definidos", source: "https://www.moodlecloud.com/standard-plans/" },
      { name: "TalentLMS", plan: "Grow USD 109/mes", monthlyCop: usd(109), basis: "LMS para equipos con ramas y cursos ilimitados", source: "https://www.talentlms.com/prices" },
      { name: "LearnWorlds", plan: "Learning Center USD 249/mes", monthlyCop: usd(249), basis: "Plataforma de cursos con automatizaciones y reportes", source: "https://www.learnworlds.com/pricing/" }
    ]
  },
  {
    id: "mesa",
    icon: "fa-headset",
    name: "Mesa de ayuda de calidad",
    type: "Tickets, radicados y seguimiento",
    analyst: "Analista de calidad",
    salary: 2100000,
    dedication: 34,
    marketMonthly: Math.round((usd(55 * 3) + usd(19 * 3) + usd(25 * 3)) / 3),
    operatingSavings: 1300000,
    maintenanceAvoided: 160000,
    features: ["Radicados", "Asignación", "Anexos", "Consulta", "Tiempos", "Estados", "Indicadores"],
    why: "Le da orden formal a solicitudes que antes podían resolverse sin trazabilidad suficiente. El beneficio se ve en tiempos, responsables y evidencia de cierre.",
    competitors: [
      { name: "Freshdesk", plan: "Pro USD 55 agente/mes × 3", monthlyCop: usd(55 * 3), basis: "Mesa de ayuda con portales y reportes", source: "https://www.freshworks.com/freshdesk/pricing/" },
      { name: "Zendesk", plan: "Desde USD 19 agente/mes × 3", monthlyCop: usd(19 * 3), basis: "Suite de atención con precio por agente", source: "https://www.zendesk.com/pricing/" },
      { name: "Help Scout", plan: "Standard USD 25 usuario/mes × 3", monthlyCop: usd(25 * 3), basis: "Soporte por bandejas, docs y flujos", source: "https://www.helpscout.com/pricing/" }
    ]
  },
  {
    id: "inventario",
    icon: "fa-boxes-stacked",
    name: "APP inventario cíclico",
    type: "Conteos, ajustes y control físico",
    analyst: "Analista de inventarios",
    salary: 2100000,
    dedication: 43,
    marketMonthly: Math.round((usd(129) + usd(149) + usd(186)) / 3),
    operatingSavings: 1600000,
    maintenanceAvoided: 210000,
    features: ["Conteo cíclico", "Ubicaciones", "Diferencias", "Evidencias", "Reportes", "Histórico"],
    why: "Reduce el esfuerzo de consolidar conteos manuales y mejora la lectura de diferencias antes de que se conviertan en reproceso o pérdida de control.",
    competitors: [
      { name: "Zoho Inventory", plan: "Plus USD 129/mes", monthlyCop: usd(129), basis: "Inventario, ubicaciones y órdenes", source: "https://www.zoho.com/inventory/pricing/" },
      { name: "Sortly", plan: "Ultra USD 149/mes", monthlyCop: usd(149), basis: "Inventario visual con usuarios y límites", source: "https://www.sortly.com/pricing/" },
      { name: "inFlow", plan: "Entrepreneur USD 186/mes", monthlyCop: usd(186), basis: "Inventario cloud para equipos pequeños", source: "https://www.inflowinventory.com/software-pricing" }
    ]
  },
  {
    id: "compras",
    icon: "fa-cart-shopping",
    name: "Requisición de compras",
    type: "Solicitudes, aprobaciones y compras",
    analyst: "Analista de compras / calidad",
    salary: 2100000,
    dedication: 40,
    marketMonthly: Math.round((usd(499) + usd(225) + usd(425)) / 3),
    operatingSavings: 1200000,
    maintenanceAvoided: 220000,
    features: ["Requisiciones", "Aprobaciones", "Trazabilidad", "Estados", "Adjuntos", "Historial"],
    why: "Ordena una etapa sensible del gasto, deja evidencia de quién solicita, quién aprueba y en qué estado queda cada compra.",
    competitors: [
      { name: "Precoro", plan: "Core USD 499/mes", monthlyCop: usd(499), basis: "Compras, aprobaciones y control de proveedores", source: "https://precoro.com/pricing" },
      { name: "Tradogram", plan: "Pro USD 225/mes", monthlyCop: usd(225), basis: "Procurement con solicitudes, órdenes y proveedores", source: "https://www.tradogram.com/pricing" },
      { name: "Tradogram Premium", plan: "USD 425/mes", monthlyCop: usd(425), basis: "Nivel superior para flujos de compras", source: "https://www.tradogram.com/pricing" }
    ]
  },
  {
    id: "cartera",
    icon: "fa-money-check-dollar",
    name: "Gestión de cartera",
    type: "Seguimiento de cobro y clientes",
    analyst: "Analista financiero / calidad",
    salary: 2100000,
    dedication: 45,
    marketMonthly: Math.round((usd(249) + usd(499) + usd(99)) / 3),
    operatingSavings: 1650000,
    maintenanceAvoided: 210000,
    features: ["Clientes", "Seguimientos", "Compromisos", "Alertas", "Estados", "Reportes"],
    why: "Permite que cartera deje de depender solo de recordatorios manuales. El valor está en priorizar, registrar compromisos y sostener seguimiento.",
    competitors: [
      { name: "Moonflow", plan: "Essential USD 249/mes", monthlyCop: usd(249), basis: "Cobranzas con usuarios ilimitados y onboarding asistido", source: "https://www.moonflow.ai/en/solutions/commercial-collections" },
      { name: "Moonflow Premium", plan: "USD 499/mes", monthlyCop: usd(499), basis: "Conexión API y soporte ampliado", source: "https://www.moonflow.ai/en/solutions/commercial-collections" },
      { name: "Dapta", plan: "Pro USD 99/mes", monthlyCop: usd(99), basis: "Agentes y flujos automatizados", source: "https://dapta.ai/es/pricing/" }
    ]
  },
  {
    id: "auditoria",
    icon: "fa-clipboard-check",
    name: "ERP auditoría procesos logísticos",
    type: "Auditoría, hallazgos y planes de acción",
    analyst: "Analista auditoría logística",
    salary: 2100000,
    dedication: 42,
    marketMonthly: Math.round((usd(24 * 10) + usd(12 * 10) + eur(16 * 10)) / 3),
    operatingSavings: 1700000,
    maintenanceAvoided: 220000,
    features: ["Checklists", "Hallazgos", "Evidencias", "Planes de acción", "Responsables", "Reportes"],
    why: "Digitaliza auditorías de proceso y permite cerrar hallazgos con responsables, evidencias y seguimiento, sin depender de actas aisladas.",
    competitors: [
      { name: "SafetyCulture", plan: "Premium USD 24 asiento/mes × 10", monthlyCop: usd(24 * 10), basis: "Auditorías, inspecciones y operaciones", source: "https://safetyculture.com/pricing" },
      { name: "GoAudits", plan: "Starter USD 12 usuario/mes × 10", monthlyCop: usd(12 * 10), basis: "Inspecciones móviles y reportes automáticos", source: "https://www.capterra.com/p/191777/GoAudits/" },
      { name: "Lumiform", plan: "Professional EUR 16 usuario/mes × 10", monthlyCop: eur(16 * 10), basis: "Checklists, reportes y permisos", source: "https://lumiformapp.com/pricing" }
    ]
  },
  {
    id: "pagina-general",
    icon: "fa-globe",
    name: "Página general EI",
    type: "Información, asesores y catálogo",
    analyst: "Analista de información",
    salary: 2100000,
    dedication: 15,
    marketMonthly: Math.round((userPlanValue / 12) + ((usd(25) + usd(39) + usd(23)) / 3)),
    operatingSavings: 800000,
    maintenanceAvoided: 120000,
    buildValue: userPlanValue,
    features: ["Información corporativa", "Acceso a asesores", "Catálogo", "Enlaces comerciales", "Canal de consulta", "Imagen institucional"],
    why: "Mejora la presencia comercial y evita respuestas repetidas sobre información básica, asesores, catálogo y rutas de contacto.",
    competitors: [
      { name: "Desarrollo web base", plan: "Valor único solicitado $2.134.000", monthlyCop: Math.round(userPlanValue / 12), basis: "Construcción mensualizada a 12 meses", source: "Valor definido para el modelo interno" },
      { name: "Webflow", plan: "CMS/Premium USD 25/mes", monthlyCop: usd(25), basis: "Sitio administrable con hosting", source: "https://webflow.com/pricing" },
      { name: "Wix Business", plan: "Referencia USD 39/mes", monthlyCop: usd(39), basis: "Sitio empresarial con herramientas comerciales", source: "https://www.wix.com/plans" }
    ]
  }
];

const stateKey = "eiDashboardAnalystsV1";
let valueChart;
let roiChart;
let filteredApps = [...apps];

const peso = value => new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(value || 0);
const number = value => new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 }).format(value || 0);
const ratio = value => `${(value || 0).toFixed(2)}x`;
const byId = id => document.getElementById(id);

function loadStoredData() {
  const saved = JSON.parse(localStorage.getItem(stateKey) || "{}");
  apps.forEach(app => {
    if (saved[app.id]) {
      app.analyst = saved[app.id].analyst || app.analyst;
      app.salary = Number(saved[app.id].salary) || app.salary;
      app.dedication = Number(saved[app.id].dedication) || app.dedication;
    }
  });
}

function saveStoredData() {
  const payload = {};
  apps.forEach(app => {
    payload[app.id] = { analyst: app.analyst, salary: app.salary, dedication: app.dedication };
  });
  localStorage.setItem(stateKey, JSON.stringify(payload));
}

function metrics(app) {
  const cost = app.salary * (app.dedication / 100);
  const monthlyValue = app.marketMonthly + app.operatingSavings + app.maintenanceAvoided;
  return {
    cost,
    monthlyValue,
    net: monthlyValue - cost,
    roi: cost > 0 ? monthlyValue / cost : 0,
    annualValue: monthlyValue * 12,
    annualCost: cost * 12,
    annualNet: (monthlyValue - cost) * 12
  };
}

function totals() {
  return apps.reduce((acc, app) => {
    const m = metrics(app);
    acc.value += m.annualValue;
    acc.cost += m.annualCost;
    acc.net += m.annualNet;
    acc.market += app.marketMonthly * 12;
    acc.operating += app.operatingSavings * 12;
    acc.maintenance += app.maintenanceAvoided * 12;
    return acc;
  }, { value: 0, cost: 0, net: 0, market: 0, operating: 0, maintenance: 0 });
}

function updateKpis() {
  const t = totals();
  byId("kpiAnnualValue").textContent = peso(t.value);
  byId("kpiAnnualCost").textContent = peso(t.cost);
  byId("kpiNetAnnual").textContent = peso(t.net);
  byId("kpiRoi").textContent = ratio(t.value / t.cost);
  byId("kpiTrm").textContent = `$${number(TRM)}`;
}

function rowTemplate(app) {
  const m = metrics(app);
  return `
    <tr data-id="${app.id}">
      <td class="app-name"><strong>${app.name}</strong><span>${app.type}</span></td>
      <td><input class="edit-input analyst-input" value="${app.analyst}" data-id="${app.id}"></td>
      <td><input class="edit-input salary-input" type="number" min="0" step="50000" value="${Math.round(app.salary)}" data-id="${app.id}"></td>
      <td><input class="edit-input dedication-input" type="number" min="1" max="100" step="1" value="${Math.round(app.dedication)}" data-id="${app.id}"></td>
      <td class="money">${peso(app.marketMonthly)}</td>
      <td class="money">${peso(app.operatingSavings)}</td>
      <td class="money">${peso(m.cost)}</td>
      <td><span class="net-pill">${peso(m.net)}</span></td>
      <td><span class="roi-pill">${ratio(m.roi)}</span></td>
      <td><button class="detail-btn" data-id="${app.id}"><i class="fa-solid fa-eye"></i> Ver</button></td>
    </tr>
  `;
}

function renderTable() {
  byId("appsTableBody").innerHTML = filteredApps.map(rowTemplate).join("");
  document.querySelectorAll(".analyst-input").forEach(input => input.addEventListener("input", handleEdit));
  document.querySelectorAll(".salary-input").forEach(input => input.addEventListener("input", handleEdit));
  document.querySelectorAll(".dedication-input").forEach(input => input.addEventListener("input", handleEdit));
  document.querySelectorAll(".detail-btn").forEach(button => button.addEventListener("click", () => openModal(button.dataset.id)));
}

function handleEdit(event) {
  const id = event.target.dataset.id;
  const app = apps.find(item => item.id === id);
  if (!app) return;
  if (event.target.classList.contains("analyst-input")) app.analyst = event.target.value;
  if (event.target.classList.contains("salary-input")) app.salary = Number(event.target.value || 0);
  if (event.target.classList.contains("dedication-input")) app.dedication = Number(event.target.value || 0);
  saveStoredData();
  applySearch(false);
  updateAll(false);
}

function renderCards() {
  byId("appCards").innerHTML = apps.map(app => {
    const m = metrics(app);
    return `
      <article class="app-card" data-id="${app.id}">
        <div class="card-icon"><i class="fa-solid ${app.icon}"></i></div>
        <h3>${app.name}</h3>
        <p>${app.why}</p>
        <div class="card-stats">
          <div><span>Valor mensual</span><strong>${peso(m.monthlyValue)}</strong></div>
          <div><span>Retorno</span><strong>${ratio(m.roi)}</strong></div>
          <div><span>Mercado mensual</span><strong>${peso(app.marketMonthly)}</strong></div>
          <div><span>Costo imputado</span><strong>${peso(m.cost)}</strong></div>
        </div>
      </article>
    `;
  }).join("");
  document.querySelectorAll(".app-card").forEach(card => card.addEventListener("click", () => openModal(card.dataset.id)));
}

function renderSelector() {
  byId("appSelector").innerHTML = apps.map(app => `<option value="${app.id}">${app.name}</option>`).join("");
  byId("appSelector").addEventListener("change", event => renderCompetitors(event.target.value));
  renderCompetitors(apps[0].id);
}

function renderCompetitors(appId) {
  const app = apps.find(item => item.id === appId) || apps[0];
  byId("competitorCards").innerHTML = app.competitors.map((competitor, index) => `
    <article class="competitor-card" data-rank="0${index + 1}">
      <h3>${competitor.name}</h3>
      <div class="price">${peso(competitor.monthlyCop)}</div>
      <p><strong>${competitor.plan}</strong></p>
      <p>${competitor.basis}</p>
      ${competitor.source.startsWith("http") ? `<a href="${competitor.source}" target="_blank" rel="noopener">Ver referencia</a>` : `<span>${competitor.source}</span>`}
    </article>
  `).join("");
}

function renderSources() {
  const unique = new Map();
  unique.set("TRM Colombia", "https://www.trmhoy.co/");
  apps.forEach(app => app.competitors.forEach(competitor => {
    if (competitor.source.startsWith("http")) unique.set(competitor.name, competitor.source);
  }));
  byId("sourcesList").innerHTML = Array.from(unique.entries()).map(([name, url]) => `<a class="source-item" href="${url}" target="_blank" rel="noopener">${name}<span>${url}</span></a>`).join("");
}

function initCharts() {
  const valueCtx = byId("valueChart");
  const roiCtx = byId("roiChart");
  valueChart = new Chart(valueCtx, {
    type: "bar",
    data: chartValueData(),
    options: {
      responsive: true,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => peso(ctx.raw) } } },
      scales: { y: { ticks: { callback: value => `${Math.round(value / 1000000)}M` } }, x: { ticks: { maxRotation: 45, minRotation: 0 } } }
    }
  });
  roiChart = new Chart(roiCtx, {
    type: "bar",
    data: chartRoiData(),
    options: {
      responsive: true,
      plugins: { legend: { position: "bottom" }, tooltip: { callbacks: { label: ctx => `${ctx.dataset.label}: ${ctx.dataset.label.includes("Retorno") ? ratio(ctx.raw) : peso(ctx.raw)}` } } },
      scales: { y: { beginAtZero: true }, x: { ticks: { maxRotation: 45, minRotation: 0 } } }
    }
  });
}

function chartValueData() {
  return {
    labels: apps.map(app => shortName(app.name)),
    datasets: [{
      label: "Valor mensual",
      data: apps.map(app => metrics(app).monthlyValue),
      backgroundColor: apps.map((_, i) => i % 2 === 0 ? "rgba(6,43,85,.82)" : "rgba(242,201,76,.82)"),
      borderRadius: 14
    }]
  };
}

function chartRoiData() {
  return {
    labels: apps.map(app => shortName(app.name)),
    datasets: [
      { label: "Valor mensual", data: apps.map(app => metrics(app).monthlyValue), backgroundColor: "rgba(6,43,85,.78)", borderRadius: 14 },
      { label: "Costo imputado", data: apps.map(app => metrics(app).cost), backgroundColor: "rgba(242,201,76,.78)", borderRadius: 14 }
    ]
  };
}

function updateCharts() {
  if (!valueChart || !roiChart) return;
  valueChart.data = chartValueData();
  roiChart.data = chartRoiData();
  valueChart.update();
  roiChart.update();
}

function shortName(name) {
  return name.replace("ERP ", "").replace("APP ", "").replace("Página ", "Pág. ").replace("trazabilidad logística", "logística").replace("procesos logísticos", "auditoría");
}

function openModal(appId) {
  const app = apps.find(item => item.id === appId);
  if (!app) return;
  const m = metrics(app);
  byId("modalContent").innerHTML = `
    <h2 class="modal-title">${app.name}</h2>
    <p class="modal-subtitle">${app.why}</p>
    <div class="modal-grid">
      <div class="modal-box">
        <h4>Valor económico mensual</h4>
        <div class="big">${peso(m.monthlyValue)}</div>
        <p>Mercado: ${peso(app.marketMonthly)} · Ahorro operativo: ${peso(app.operatingSavings)} · Mantenimiento evitado: ${peso(app.maintenanceAvoided)}</p>
      </div>
      <div class="modal-box">
        <h4>Comparación con analista</h4>
        <div class="big">${ratio(m.roi)}</div>
        <p>${app.analyst} · sueldo ${peso(app.salary)} · dedicación ${app.dedication}% · costo imputado ${peso(m.cost)}</p>
      </div>
      <div class="modal-box">
        <h4>Funcionalidades creadas</h4>
        <ul>${app.features.map(item => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div class="modal-box">
        <h4>Top 3 de mercado</h4>
        <ul>${app.competitors.map(item => `<li><strong>${item.name}</strong>: ${item.plan} · ${peso(item.monthlyCop)}</li>`).join("")}</ul>
      </div>
    </div>
  `;
  byId("detailModal").classList.add("open");
}

function closeModal() {
  byId("detailModal").classList.remove("open");
}

function applySearch(shouldRender = true) {
  const q = byId("searchInput").value.trim().toLowerCase();
  filteredApps = apps.filter(app => `${app.name} ${app.type} ${app.features.join(" ")}`.toLowerCase().includes(q));
  if (shouldRender) renderTable();
}

function updateAll(show = true) {
  updateKpis();
  renderTable();
  renderCards();
  updateCharts();
  if (show) showToast();
}

function showToast() {
  const toast = byId("toast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

function startAnimations() {
  if (window.anime) {
    anime({ targets: ".panel-glass, .insight-strip div, .app-card", translateY: [18, 0], opacity: [0, 1], delay: anime.stagger(55), duration: 650, easing: "easeOutExpo" });
  }
}

function boot() {
  loadStoredData();
  renderSelector();
  renderSources();
  updateKpis();
  renderTable();
  renderCards();
  initCharts();
  startAnimations();
  byId("searchInput").addEventListener("input", () => { applySearch(); });
  byId("refreshModel").addEventListener("click", () => updateAll(true));
  byId("printBoard").addEventListener("click", () => window.print());
  byId("closeModal").addEventListener("click", closeModal);
  byId("detailModal").addEventListener("click", event => { if (event.target.id === "detailModal") closeModal(); });
  byId("enterDashboard").addEventListener("click", () => byId("splash").classList.add("hide"));
  setTimeout(() => byId("splash").classList.add("hide"), 2200);
}

document.addEventListener("DOMContentLoaded", boot);

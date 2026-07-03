const TRM = 3357.82;
const state = {
  active: 0,
  globalUsers: 20,
  analystCount: 3,
  baseSalary: 2100000
};
const apps = [
  {
    id: "calidad",
    tag: "Repositorio y calidad",
    name: "Página de calidad",
    analyst: "Analista por definir",
    weight: 8,
    buildMarket: 10500000,
    summary: "Centraliza documentos, noticias, auditorías, accesos a aplicaciones e información del proceso. Su valor no está en ser una página, sino en ordenar el conocimiento operativo y reducir búsqueda, dispersión y reprocesos.",
    verdict: "EI gana por control documental interno sin pagar una suite pesada.",
    impacts: ["Menos búsqueda de documentos y enlaces", "Menos solicitudes repetidas por ubicación de información", "Mayor trazabilidad de noticias, auditorías y repositorios", "Punto único para información del proceso"],
    competitors: [
      {name:"Helpjuice Knowledge Base", usd:249, type:"flat", source:"https://helpjuice.com/pricing"},
      {name:"Slab Business", usd:12.5, type:"per_user", source:"https://slab.com/pricing/"},
      {name:"Archbee documentación", usd:80, type:"flat", source:"https://www.archbee.com/pricing"}
    ]
  },
  {
    id: "trazabilidad",
    tag: "Operación logística",
    name: "ERP de trazabilidad logística",
    analyst: "Analista por definir",
    weight: 22,
    buildMarket: 42000000,
    summary: "Controla el recorrido del pedido, responsables, estados, evidencias, tiempos, reportes y alertas. Es el núcleo operativo del portafolio y por eso carga el mayor peso técnico.",
    verdict: "EI evita comprar una plataforma de operación y además la ajusta al proceso real.",
    impacts: ["Reducción de seguimiento por WhatsApp y llamadas", "Menos pérdida de trazabilidad entre áreas", "Evidencia por etapa del pedido", "Mayor control de tiempos y cuellos de botella"],
    competitors: [
      {name:"Quickbase Business", usd:55, type:"per_user", source:"https://www.quickbase.com/plans-and-pricing"},
      {name:"Odoo Custom", usd:61, type:"per_user", source:"https://www.odoo.com/pricing"},
      {name:"Odoo Standard", usd:31.1, type:"per_user", source:"https://www.odoo.com/pricing"}
    ]
  },
  {
    id: "aula",
    tag: "Capacitación interna",
    name: "Aula EI",
    analyst: "Analista por definir",
    weight: 12,
    buildMarket: 26000000,
    summary: "Organiza capacitaciones, módulos, evaluaciones, evidencias, certificados y seguimiento. Convierte la formación interna en una ruta medible y repetible.",
    verdict: "EI convierte la capacitación en activo interno, no en sesiones sueltas.",
    impacts: ["Menos jornadas repetitivas de inducción", "Certificados y evidencias centralizadas", "Evaluación controlada por módulo", "Seguimiento claro del avance de los participantes"],
    competitors: [
      {name:"TalentLMS Core", usd:119, type:"flat", source:"https://www.talentlms.com/prices"},
      {name:"LearnWorlds Learning Center", usd:249, type:"flat", source:"https://www.learnworlds.com/pricing/"},
      {name:"MoodleCloud Starter", usd:13.33, type:"flat", source:"https://www.moodlecloud.com/standard-plans/"}
    ]
  },
  {
    id: "mesa",
    tag: "Soporte y radicados",
    name: "Mesa de ayuda de calidad",
    analyst: "Analista por definir",
    weight: 10,
    buildMarket: 18000000,
    summary: "Recibe solicitudes, genera radicados, asigna responsables, mide tiempos y consolida indicadores. Evita que el soporte del proceso quede repartido en conversaciones y correos.",
    verdict: "EI estructura la atención interna con bajo costo y trazabilidad real.",
    impacts: ["Control de solicitudes por radicado", "Asignación visible de responsables", "Indicadores de tiempos y cargas", "Menos pérdida de solicitudes por canales informales"],
    competitors: [
      {name:"Zendesk Suite Team", usd:55, type:"per_user", source:"https://www.zendesk.com/pricing/"},
      {name:"Freshdesk Pro", usd:55, type:"per_user", source:"https://www.freshworks.com/freshdesk/pricing/"},
      {name:"Help Scout Plus", usd:50, type:"per_user", source:"https://www.helpscout.com/pricing/"}
    ]
  },
  {
    id: "inventario",
    tag: "Inventario físico",
    name: "APP de inventario cíclico",
    analyst: "Analista por definir",
    weight: 9,
    buildMarket: 20500000,
    summary: "Permite registrar conteos, evidencias, diferencias, responsables y cierres de inventario. Su aporte está en disminuir errores manuales y mejorar disciplina de control físico.",
    verdict: "EI conserva control de inventario sin depender de paquetes sobredimensionados.",
    impacts: ["Menos papel en conteos físicos", "Menos digitación posterior en Excel", "Evidencia y responsable por conteo", "Mejor control de diferencias y cierres"],
    competitors: [
      {name:"inFlow Mid-Size", usd:999, type:"flat", source:"https://www.softwareadvice.com/scm/inflow-inventory-profile/"},
      {name:"Sortly Premium", usd:299, type:"flat", source:"https://www.sortly.com/pricing/"},
      {name:"Zoho Inventory 20 usuarios", usd:256.5, type:"flat", source:"https://www.zoho.com/inventory/pricing/"}
    ]
  },
  {
    id: "requisicion",
    tag: "Compras y aprobaciones",
    name: "Requisición de compras",
    analyst: "Analista por definir",
    weight: 12,
    buildMarket: 28000000,
    summary: "Ordena solicitudes de compra, aprobaciones, responsables, soportes y trazabilidad. El ahorro surge de controlar el flujo antes de comprar y no después del problema.",
    verdict: "EI instala disciplina de compras sin contratar un procure-to-pay externo.",
    impacts: ["Menos aprobaciones informales", "Soportes completos antes de comprar", "Trazabilidad de solicitante y responsable", "Mejor control del gasto operativo"],
    competitors: [
      {name:"Precoro Automation", usd:999, type:"flat", source:"https://precoro.com/pricing"},
      {name:"Tradogram Premium", usd:425, type:"flat", source:"https://www.tradogram.com/pricing"},
      {name:"Procurify referencia contrato", usd:1250, type:"flat", source:"https://www.procurify.com/pricing/"}
    ]
  },
  {
    id: "cartera",
    tag: "Cartera y seguimiento",
    name: "Gestión de cartera",
    analyst: "Analista por definir",
    weight: 10,
    buildMarket: 22000000,
    summary: "Organiza clientes, estados, seguimiento, compromisos y alertas. Su aporte está en hacer visible la cartera y reducir gestión dispersa.",
    verdict: "EI mejora control y seguimiento sin depender de un sistema de cobranza contratado.",
    impacts: ["Seguimiento de compromisos de pago", "Priorización de cartera por estado", "Menos llamadas y recordatorios sin registro", "Visibilidad para responsables y coordinación"],
    competitors: [
      {name:"Moonflow Premium", usd:499, type:"flat", source:"https://www.moonflow.ai/en/solutions/commercial-collections"},
      {name:"Debitia referencia mercado", usd:499, type:"flat", source:"https://debitia.com/"},
      {name:"Dapta referencia mercado", usd:499, type:"flat", source:"https://dapta.ai/cobranzas/"}
    ]
  },
  {
    id: "auditoria",
    tag: "Auditoría logística",
    name: "ERP de auditoría de procesos logísticos",
    analyst: "Analista por definir",
    weight: 10,
    buildMarket: 24000000,
    summary: "Estandariza auditorías, listas de chequeo, evidencias, hallazgos, responsables y acciones. Aporta control operativo y evita informes manuales desordenados.",
    verdict: "EI convierte la auditoría en seguimiento vivo, no en actas sueltas.",
    impacts: ["Checklists estandarizados", "Fotos y hallazgos asociados al punto auditado", "Acciones y responsables visibles", "Menos informes manuales repetitivos"],
    competitors: [
      {name:"SafetyCulture Premium", usd:24, type:"per_user", source:"https://safetyculture.com/pricing"},
      {name:"GoAudits Enterprise", usd:30, type:"per_user", source:"https://goaudits.com/pricing/"},
      {name:"Lumiform Professional", usd:22, type:"per_user", source:"https://www.g2.com/products/zyp-one-gmbh-lumiform/pricing"}
    ]
  },
  {
    id: "paginaei",
    tag: "Información comercial",
    name: "Página general de Electro Ingeniería",
    analyst: "Analista por definir",
    weight: 7,
    buildMarket: 5500000,
    eiBuild: 2134000,
    summary: "Presenta información general, enlaces a asesores, catálogo y canal de consulta. El valor se controla como construcción liviana, no como plataforma empresarial pesada.",
    verdict: "EI obtiene presencia ordenada con un costo interno controlado.",
    impacts: ["Menos solicitudes repetidas por información comercial", "Acceso directo a asesores y catálogo", "Mejor presentación institucional", "Punto de consulta simple para clientes y equipo"],
    competitors: [
      {name:"Wix Business Elite", usd:159, type:"flat", source:"https://www.wix.com/plans"},
      {name:"Webflow Business", usd:39, type:"flat", source:"https://webflow.com/pricing"},
      {name:"Squarespace Business", usd:23, type:"flat", source:"https://www.squarespace.com/pricing"}
    ]
  }
];
const fmt = new Intl.NumberFormat("es-CO", {style:"currency", currency:"COP", maximumFractionDigits:0});
const pct = new Intl.NumberFormat("es-CO", {maximumFractionDigits:1});
const $ = id => document.getElementById(id);
function loadLocal(){
  const saved = localStorage.getItem("eiDashboardV3");
  if(!saved) return;
  try{
    const data = JSON.parse(saved);
    state.globalUsers = data.globalUsers ?? state.globalUsers;
    state.analystCount = data.analystCount ?? state.analystCount;
    state.baseSalary = data.baseSalary ?? state.baseSalary;
    if(Array.isArray(data.apps)){
      data.apps.forEach(item=>{
        const app = apps.find(x=>x.id===item.id);
        if(app){
          app.analyst = item.analyst ?? app.analyst;
          app.weight = item.weight ?? app.weight;
          app.buildMarket = item.buildMarket ?? app.buildMarket;
          app.salary = item.salary ?? app.salary;
        }
      });
    }
  }catch(e){}
}
function saveLocal(){
  localStorage.setItem("eiDashboardV3", JSON.stringify({
    globalUsers: state.globalUsers,
    analystCount: state.analystCount,
    baseSalary: state.baseSalary,
    apps: apps.map(a=>({id:a.id, analyst:a.analyst, weight:a.weight, buildMarket:a.buildMarket, salary:a.salary}))
  }));
}
function users(){return Math.max(1, Number($("globalUsers").value || state.globalUsers));}
function analystCount(){return Math.max(1, Number($("analystCount").value || state.analystCount));}
function salaryFor(app){return Math.max(0, Number(app.salary || $("baseSalary").value || state.baseSalary));}
function competitorMonthlyCop(comp, totalUsers){
  const usd = comp.type === "per_user" ? comp.usd * totalUsers : comp.usd;
  return usd * TRM;
}
function appCalc(app){
  const totalUsers = users();
  const salary = salaryFor(app);
  const teamMonthly = salary * analystCount();
  const eiMonthly = teamMonthly * (Number(app.weight) / 100);
  const compMonthly = app.competitors.map(c => competitorMonthlyCop(c, totalUsers));
  const avgMarketLicense = compMonthly.reduce((a,b)=>a+b,0) / compMonthly.length;
  const buildMonthly = Number(app.buildMarket) / 12;
  const marketMonthly = avgMarketLicense + buildMonthly;
  const savingMonthly = marketMonthly - eiMonthly;
  const marketAnnual = marketMonthly * 12;
  const eiAnnual = eiMonthly * 12;
  const savingAnnual = savingMonthly * 12;
  const roi = marketMonthly / Math.max(1, eiMonthly);
  return {totalUsers,salary,teamMonthly,eiMonthly,compMonthly,avgMarketLicense,buildMonthly,marketMonthly,savingMonthly,marketAnnual,eiAnnual,savingAnnual,roi};
}
function totals(){
  const list = apps.map(appCalc);
  return {
    marketAnnual: list.reduce((a,b)=>a+b.marketAnnual,0),
    eiAnnual: list.reduce((a,b)=>a+b.eiAnnual,0),
    savingAnnual: list.reduce((a,b)=>a+b.savingAnnual,0),
    marketMonthly: list.reduce((a,b)=>a+b.marketMonthly,0),
    eiMonthly: list.reduce((a,b)=>a+b.eiMonthly,0),
    buildMarket: apps.reduce((a,b)=>a+Number(b.buildMarket),0)
  };
}
function renderNav(){
  $("appNav").innerHTML = apps.map((a,i)=>`<button class="${i===state.active?"active":""}" data-app="${i}"><b>${i+1}. ${a.name}</b><span>${a.tag}</span></button>`).join("");
  document.querySelectorAll("[data-app]").forEach(btn=>btn.addEventListener("click",()=>{state.active=Number(btn.dataset.app);renderAll()}));
}
function renderKpis(){
  const t = totals();
  const ratio = t.marketAnnual / Math.max(1,t.eiAnnual);
  $("kpiStrip").innerHTML = [
    ["Usuarios usados", `${users()} usuarios`, "Base de comparación"],
    ["Costo EI anual", fmt.format(t.eiAnnual), "Sueldos imputados"],
    ["Mercado anual equivalente", fmt.format(t.marketAnnual), "Licencia + creación"],
    ["Ahorro anual neto", fmt.format(t.savingAnnual), "Costo evitado"],
    ["Retorno general", `${pct.format(ratio)}x`, "Frente a sueldos"]
  ].map(k=>`<article class="kpi"><span>${k[0]}</span><strong>${k[1]}</strong><small>${k[2]}</small></article>`).join("");
}
function renderFocus(){
  const app = apps[state.active];
  const c = appCalc(app);
  $("appTag").textContent = app.tag;
  $("appTitle").textContent = app.name;
  $("appSummary").textContent = app.summary;
  $("appVerdict").textContent = app.verdict;
  $("appMiniKpis").innerHTML = [
    ["Mercado mensual", fmt.format(c.marketMonthly)],
    ["Costo EI mensual", fmt.format(c.eiMonthly)],
    ["Ahorro mensual", fmt.format(c.savingMonthly)],
    ["Retorno", `${pct.format(c.roi)}x`]
  ].map(x=>`<div class="mini"><span>${x[0]}</span><strong>${x[1]}</strong></div>`).join("");
  $("appFormula").textContent = `Promedio top 3 con ${c.totalUsers} usuarios (${fmt.format(c.avgMarketLicense)}) + creación prorrateada (${fmt.format(c.buildMonthly)}) - costo EI por sueldo y peso asignado (${fmt.format(c.eiMonthly)}).`;
  const buildEi = app.eiBuild ? fmt.format(app.eiBuild) : fmt.format(c.eiAnnual);
  $("comparisonRows").innerHTML = [
    ["Licencia mensual 20 usuarios", fmt.format(c.avgMarketLicense), "Incluido en desarrollo interno", fmt.format(c.avgMarketLicense)],
    ["Creación, ajuste y puesta en marcha", fmt.format(app.buildMarket), buildEi, fmt.format(Math.max(0, app.buildMarket - (app.eiBuild || 0)))],
    ["Mensual equivalente", fmt.format(c.marketMonthly), fmt.format(c.eiMonthly), fmt.format(c.savingMonthly)],
    ["Primer año completo", fmt.format(c.marketAnnual), fmt.format(c.eiAnnual), fmt.format(c.savingAnnual)]
  ].map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td class="positive">${r[3]}</td></tr>`).join("");
  renderCharts(app,c);
}
function compactMoney(value){
  if(value >= 1000000) return `$${(value/1000000).toFixed(1).replace(".",",")} M`;
  if(value >= 1000) return `$${Math.round(value/1000)} mil`;
  return fmt.format(value);
}
function renderCharts(app,c){
  const values = app.competitors.map((x,i)=>c.compMonthly[i] + c.buildMonthly);
  const max = Math.max(...values, c.eiMonthly) * 1.12;
  $("competitorChart").innerHTML = `<div class="bar-stage"><div class="bars">${app.competitors.map((x,i)=>{
    const marketH = Math.max(8, (values[i] / max) * 100);
    const eiH = Math.max(8, (c.eiMonthly / max) * 100);
    return `<div class="bar-pair"><div class="bar-col bar-market" style="height:${marketH}%"><span>${compactMoney(values[i])}</span></div><div class="bar-col bar-ei" style="height:${eiH}%"><span>${compactMoney(c.eiMonthly)}</span></div></div>`;
  }).join("")}</div><div class="bar-labels">${app.competitors.map(x=>`<div>${x.name}</div>`).join("")}</div><div class="legend-inline"><span><i class="legend-market"></i>Competencia</span><span><i class="legend-ei"></i>EI</span></div></div>`;
  const a = c.avgMarketLicense;
  const b = c.buildMonthly;
  const d = c.eiMonthly;
  const total = a + b + d;
  const pa = (a/total)*360;
  const pb = (b/total)*360;
  const pc = 360 - pa - pb;
  const gradient = `conic-gradient(#4ea0ff 0 ${pa}deg,#45d69a ${pa}deg ${pa+pb}deg,#f6c85f ${pa+pb}deg ${pa+pb+pc}deg)`;
  $("compositionChart").innerHTML = `<div class="donut-wrap"><div class="donut" style="background:${gradient}"><div class="donut-core"><div><b>${pct.format(c.roi)}x</b><span>retorno</span></div></div></div><div class="donut-list"><div><i class="dot" style="background:#4ea0ff"></i><span>Licencia evitada</span><b>${compactMoney(a)}</b></div><div><i class="dot" style="background:#45d69a"></i><span>Creación prorrateada</span><b>${compactMoney(b)}</b></div><div><i class="dot" style="background:#f6c85f"></i><span>Costo EI</span><b>${compactMoney(d)}</b></div></div></div>`;
}
function renderDetail(){
  const app = apps[state.active];
  const c = appCalc(app);
  $("detailTitle").textContent = app.name;
  $("editAnalyst").value = app.analyst;
  $("editSalary").value = salaryFor(app);
  $("editWeight").value = app.weight;
  $("editBuild").value = app.buildMarket;
  $("competitorList").innerHTML = app.competitors.map((x,i)=>{
    const monthly = c.compMonthly[i];
    const total = monthly + c.buildMonthly;
    const basis = x.type === "per_user" ? `${x.usd} USD × ${c.totalUsers} usuarios` : `${x.usd} USD mensual`;
    return `<div class="comp-row"><div><b>${x.name}</b><span>${basis} + creación prorrateada</span></div><strong>${fmt.format(total)}</strong></div>`;
  }).join("");
  $("impactList").innerHTML = app.impacts.map(x=>`<li>${x}</li>`).join("");
  $("sourceList").innerHTML = app.competitors.map(x=>`<a href="${x.source}" target="_blank" rel="noopener">${x.name}: ${x.source}</a>`).join("");
}
function bind(){
  ["globalUsers","analystCount","baseSalary"].forEach(id=>{
    $(id).addEventListener("input",()=>{
      state[id] = Number($(id).value);
      saveLocal();
      renderAll();
    });
  });
  $("prevApp").addEventListener("click",()=>{state.active = (state.active - 1 + apps.length) % apps.length;renderAll()});
  $("nextApp").addEventListener("click",()=>{state.active = (state.active + 1) % apps.length;renderAll()});
  $("openDetail").addEventListener("click",()=>{renderDetail();$("detailDialog").showModal()});
  $("closeDetail").addEventListener("click",()=>$("detailDialog").close());
  $("openMethod").addEventListener("click",()=>$("methodDialog").showModal());
  $("closeMethod").addEventListener("click",()=>$("methodDialog").close());
  $("editAnalyst").addEventListener("input",e=>{apps[state.active].analyst=e.target.value;saveLocal()});
  $("editSalary").addEventListener("input",e=>{apps[state.active].salary=Number(e.target.value);saveLocal();renderAll();renderDetail()});
  $("editWeight").addEventListener("input",e=>{apps[state.active].weight=Number(e.target.value);saveLocal();renderAll();renderDetail()});
  $("editBuild").addEventListener("input",e=>{apps[state.active].buildMarket=Number(e.target.value);saveLocal();renderAll();renderDetail()});
  window.addEventListener("keydown",e=>{
    if(e.key === "ArrowRight"){state.active = (state.active + 1) % apps.length;renderAll()}
    if(e.key === "ArrowLeft"){state.active = (state.active - 1 + apps.length) % apps.length;renderAll()}
  });
}
function renderAll(){
  $("globalUsers").value = state.globalUsers;
  $("analystCount").value = state.analystCount;
  $("baseSalary").value = state.baseSalary;
  renderNav();
  renderKpis();
  renderFocus();
}
loadLocal();
bind();
renderAll();
setTimeout(()=>$("splash").classList.add("hide"),650);

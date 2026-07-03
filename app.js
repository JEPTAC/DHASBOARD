const TRM = 3357.82;
const state = {active:0, users:20};
const analysts = [
  {id:"juanCamilo", name:"Juan Camilo Montoya", salary:2100000},
  {id:"luis", name:"Luis Grajales", salary:2100000},
  {id:"juanEsteban", name:"Juan Esteban Pérez", salary:2100000}
];
const apps = [
  {
    id:"requisicion",
    analystId:"juanCamilo",
    name:"Requisición de compras",
    short:"Requisiciones",
    purpose:"Ordena solicitudes, aprobaciones, soportes y trazabilidad antes de ejecutar la compra.",
    win:"La empresa evita contratar una plataforma de compras completa y mantiene el flujo ajustado a la forma real de aprobación interna.",
    buildMarket:28000000,
    buildEi:0,
    competitors:[
      {name:"Precoro", usd:999, type:"flat", source:"https://precoro.com/pricing"},
      {name:"Tradogram", usd:425, type:"flat", source:"https://www.tradogram.com/pricing"},
      {name:"Procurify", usd:1250, type:"flat", source:"https://www.procurify.com/pricing/"}
    ],
    impacts:["Menos aprobaciones informales","Soportes completos antes de comprar","Trazabilidad por solicitante y responsable","Mejor control del gasto operativo"]
  },
  {
    id:"cartera",
    analystId:"juanCamilo",
    name:"Gestión de cartera",
    short:"Cartera",
    purpose:"Organiza clientes, estados, compromisos, alertas y seguimiento de cobro.",
    win:"La gestión deja de depender de recordatorios sueltos y se convierte en una agenda visible de cartera y compromisos.",
    buildMarket:22000000,
    buildEi:0,
    competitors:[
      {name:"Moonflow", usd:499, type:"flat", source:"https://www.moonflow.ai/en/solutions/commercial-collections"},
      {name:"Debitia", usd:499, type:"flat", source:"https://debitia.com/"},
      {name:"Dapta", usd:499, type:"flat", source:"https://dapta.ai/cobranzas/"}
    ],
    impacts:["Seguimiento de compromisos de pago","Priorización por estado de cartera","Menos llamadas sin registro","Visibilidad para responsables y coordinación"]
  },
  {
    id:"auditoria",
    analystId:"luis",
    name:"ERP de auditoría de procesos logísticos",
    short:"Auditoría logística",
    purpose:"Estandariza listas de chequeo, evidencias, hallazgos, responsables y acciones.",
    win:"La auditoría pasa de actas dispersas a seguimiento vivo, con evidencias y acciones trazables.",
    buildMarket:24000000,
    buildEi:0,
    competitors:[
      {name:"SafetyCulture", usd:24, type:"per_user", source:"https://safetyculture.com/pricing"},
      {name:"GoAudits", usd:30, type:"per_user", source:"https://goaudits.com/pricing/"},
      {name:"Lumiform", usd:22, type:"per_user", source:"https://www.g2.com/products/zyp-one-gmbh-lumiform/pricing"}
    ],
    impacts:["Checklists estandarizados","Fotos y hallazgos asociados al punto auditado","Acciones y responsables visibles","Menos informes manuales repetitivos"]
  },
  {
    id:"paginaei",
    analystId:"luis",
    name:"Página general de Electro Ingeniería",
    short:"Página general EI",
    purpose:"Concentra información institucional, enlaces a asesores, catálogo y canales de consulta.",
    win:"La empresa obtiene presencia comercial ordenada sin pagar una construcción externa completa ni una administración mensual alta.",
    buildMarket:13500000,
    buildEi:2134000,
    competitors:[
      {name:"Wix Business Elite", usd:159, type:"flat", source:"https://www.wix.com/plans"},
      {name:"Webflow Business", usd:39, type:"flat", source:"https://webflow.com/pricing"},
      {name:"Squarespace Business", usd:23, type:"flat", source:"https://www.squarespace.com/pricing"}
    ],
    impacts:["Menos solicitudes repetidas por información comercial","Acceso directo a asesores y catálogo","Mejor presentación institucional","Punto de consulta simple para clientes y equipo"]
  },
  {
    id:"aula",
    analystId:"juanEsteban",
    name:"Aula EI",
    short:"Aula EI",
    purpose:"Organiza capacitaciones, módulos, evaluaciones, evidencias, certificados y seguimiento.",
    win:"La capacitación queda convertida en activo interno medible, reutilizable y alineado con los procesos de la empresa.",
    buildMarket:26000000,
    buildEi:0,
    competitors:[
      {name:"TalentLMS", usd:119, type:"flat", source:"https://www.talentlms.com/prices"},
      {name:"LearnWorlds", usd:249, type:"flat", source:"https://www.learnworlds.com/pricing/"},
      {name:"MoodleCloud", usd:13.33, type:"flat", source:"https://www.moodlecloud.com/standard-plans/"}
    ],
    impacts:["Menos jornadas repetitivas de inducción","Certificados y evidencias centralizadas","Evaluación controlada por módulo","Seguimiento del avance de participantes"]
  },
  {
    id:"trazabilidad",
    analystId:"juanEsteban",
    name:"ERP de trazabilidad logística",
    short:"Trazabilidad logística",
    purpose:"Controla recorrido del pedido, responsables, estados, evidencias, tiempos, reportes y alertas.",
    win:"El proceso logístico queda trazable de punta a punta sin comprar un ERP externo que obligue a adaptar la operación a una plantilla genérica.",
    buildMarket:45000000,
    buildEi:0,
    competitors:[
      {name:"Quickbase Business", usd:55, type:"per_user", source:"https://www.quickbase.com/plans-and-pricing"},
      {name:"Odoo Custom", usd:61, type:"per_user", source:"https://www.odoo.com/pricing"},
      {name:"Odoo Standard", usd:31.1, type:"per_user", source:"https://www.odoo.com/pricing"}
    ],
    impacts:["Menos seguimiento por WhatsApp y llamadas","Evidencia por etapa del pedido","Control de tiempos y cuellos de botella","Menos pérdida de trazabilidad entre áreas"]
  },
  {
    id:"mesa",
    analystId:"juanEsteban",
    name:"Mesa de ayuda de calidad",
    short:"Mesa de ayuda",
    purpose:"Recibe solicitudes, genera radicados, asigna responsables, mide tiempos y consolida indicadores.",
    win:"Las solicitudes dejan de perderse en canales informales y pasan a tener radicado, responsable y tiempo de atención.",
    buildMarket:18000000,
    buildEi:0,
    competitors:[
      {name:"Zendesk Suite Team", usd:55, type:"per_user", source:"https://www.zendesk.com/pricing/"},
      {name:"Freshdesk Pro", usd:55, type:"per_user", source:"https://www.freshworks.com/freshdesk/pricing/"},
      {name:"Help Scout Plus", usd:50, type:"per_user", source:"https://www.helpscout.com/pricing/"}
    ],
    impacts:["Control de solicitudes por radicado","Asignación visible de responsables","Indicadores de tiempos y cargas","Menos pérdida de solicitudes por canales informales"]
  },
  {
    id:"calidad",
    analystId:"juanEsteban",
    name:"Página de repositorio y noticias de calidad",
    short:"Repositorio calidad",
    purpose:"Centraliza documentos, noticias, auditorías, accesos a aplicaciones e información del proceso.",
    win:"El valor no está en tener una página, sino en ordenar el conocimiento del proceso y reducir búsqueda, reprocesos y dispersión documental.",
    buildMarket:10500000,
    buildEi:0,
    competitors:[
      {name:"Helpjuice", usd:249, type:"flat", source:"https://helpjuice.com/pricing"},
      {name:"Slab Business", usd:12.5, type:"per_user", source:"https://slab.com/pricing/"},
      {name:"Archbee", usd:80, type:"flat", source:"https://www.archbee.com/pricing"}
    ],
    impacts:["Menos búsqueda de documentos y enlaces","Menos solicitudes repetidas","Trazabilidad de noticias, auditorías y repositorios","Punto único de información del proceso"]
  },
  {
    id:"inventario",
    analystId:"juanEsteban",
    name:"APP de inventario cíclico",
    short:"Inventario cíclico",
    purpose:"Registra conteos, evidencias, diferencias, responsables y cierres de inventario.",
    win:"El control físico mejora sin contratar un paquete sobredimensionado para una necesidad que debía ser puntual, práctica y trazable.",
    buildMarket:20500000,
    buildEi:0,
    competitors:[
      {name:"inFlow", usd:999, type:"flat", source:"https://www.softwareadvice.com/scm/inflow-inventory-profile/"},
      {name:"Sortly", usd:299, type:"flat", source:"https://www.sortly.com/pricing/"},
      {name:"Zoho Inventory", usd:256.5, type:"flat", source:"https://www.zoho.com/inventory/pricing/"}
    ],
    impacts:["Menos papel en conteos físicos","Menos digitación posterior en Excel","Evidencia y responsable por conteo","Mejor control de diferencias y cierres"]
  }
];
const fmt = new Intl.NumberFormat("es-CO", {style:"currency", currency:"COP", maximumFractionDigits:0});
const num = new Intl.NumberFormat("es-CO", {maximumFractionDigits:1});
const $ = id => document.getElementById(id);
function load(){
  const raw = localStorage.getItem("eiBoardV4");
  if(!raw) return;
  try{
    const data = JSON.parse(raw);
    state.users = data.users || state.users;
    if(Array.isArray(data.analysts)) data.analysts.forEach(x=>{const a=analysts.find(y=>y.id===x.id); if(a){a.name=x.name || a.name; a.salary=Number(x.salary || a.salary)}});
    if(Array.isArray(data.apps)) data.apps.forEach(x=>{const a=apps.find(y=>y.id===x.id); if(a){a.buildMarket=Number(x.buildMarket || a.buildMarket); a.buildEi=Number(x.buildEi ?? a.buildEi)}});
  }catch(e){}
}
function save(){
  localStorage.setItem("eiBoardV4", JSON.stringify({users:state.users, analysts:analysts.map(a=>({id:a.id,name:a.name,salary:a.salary})), apps:apps.map(a=>({id:a.id,buildMarket:a.buildMarket,buildEi:a.buildEi}))}));
}
function analyst(id){return analysts.find(a=>a.id===id)}
function appsByAnalyst(id){return apps.filter(a=>a.analystId===id)}
function salaryShare(app){const a=analyst(app.analystId); return a.salary / Math.max(1, appsByAnalyst(a.id).length)}
function compMonthly(comp){const usd = comp.type === "per_user" ? comp.usd * state.users : comp.usd; return usd * TRM}
function appCalc(app){
  const compValues = app.competitors.map(compMonthly);
  const licenseAvg = compValues.reduce((a,b)=>a+b,0) / compValues.length;
  const buildMonthly = app.buildMarket / 12;
  const marketMonthly = licenseAvg + buildMonthly;
  const eiMonthly = salaryShare(app);
  const savingMonthly = marketMonthly - eiMonthly;
  const roi = marketMonthly / Math.max(1, eiMonthly);
  return {compValues,licenseAvg,buildMonthly,marketMonthly,eiMonthly,savingMonthly,roi,marketAnnual:marketMonthly*12,eiAnnual:eiMonthly*12,savingAnnual:savingMonthly*12};
}
function analystCalc(a){
  const owned = appsByAnalyst(a.id);
  const marketMonthly = owned.reduce((sum,app)=>sum+appCalc(app).marketMonthly,0);
  const savingMonthly = marketMonthly - a.salary;
  return {owned,marketMonthly,savingMonthly,roi:marketMonthly/Math.max(1,a.salary)};
}
function totals(){
  const marketMonthly = apps.reduce((sum,app)=>sum+appCalc(app).marketMonthly,0);
  const salaryMonthly = analysts.reduce((sum,a)=>sum+a.salary,0);
  return {marketMonthly,salaryMonthly,savingMonthly:marketMonthly-salaryMonthly,roi:marketMonthly/Math.max(1,salaryMonthly)};
}
function moneyShort(v){
  if(v>=1000000) return `$${(v/1000000).toFixed(1).replace(".",",")} M`;
  if(v>=1000) return `$${Math.round(v/1000)} mil`;
  return fmt.format(v);
}
function renderHero(){
  const t=totals();
  $("heroKpis").innerHTML = [
    ["Mercado mensual", fmt.format(t.marketMonthly)],
    ["Sueldos analistas", fmt.format(t.salaryMonthly)],
    ["Ahorro mensual", fmt.format(t.savingMonthly)],
    ["Retorno", `${num.format(t.roi)}x`]
  ].map(x=>`<article><span>${x[0]}</span><strong>${x[1]}</strong></article>`).join("");
}
function renderAnalysts(){
  $("analystCards").innerHTML = analysts.map(a=>{
    const c=analystCalc(a);
    return `<article class="analyst-card"><div><h3>${a.name}</h3><p>${c.owned.length} apps a cargo · sueldo base ${fmt.format(a.salary)}</p></div><div class="analyst-metrics"><strong>${fmt.format(c.savingMonthly)}</strong><span>ahorro mensual</span><strong>${num.format(c.roi)}x</strong><span>retorno</span></div><div class="app-chips">${c.owned.map(app=>`<button data-jump="${app.id}" class="${apps[state.active].id===app.id?"active":""}">${app.short}</button>`).join("")}</div></article>`
  }).join("");
  document.querySelectorAll("[data-jump]").forEach(btn=>btn.addEventListener("click",()=>{state.active=apps.findIndex(a=>a.id===btn.dataset.jump); renderAll()}));
}
function renderSelector(){
  $("appSelector").innerHTML = apps.map((app,i)=>`<button class="${i===state.active?"active":""}" data-select="${i}">${i+1}. ${app.short}</button>`).join("");
  document.querySelectorAll("[data-select]").forEach(btn=>btn.addEventListener("click",()=>{state.active=Number(btn.dataset.select); renderAll()}));
}
function renderFocus(){
  const app=apps[state.active];
  const c=appCalc(app);
  const a=analyst(app.analystId);
  $("appName").textContent=app.name;
  $("appPurpose").textContent=app.purpose;
  $("ownerName").textContent=a.name;
  $("ownerCost").textContent=`${fmt.format(c.eiMonthly)} mensuales asignados por app`;
  $("winText").textContent=app.win;
  $("chartSaving").textContent=`Ahorro ${moneyShort(c.savingMonthly)}/mes`;
  $("appKpis").innerHTML=[
    ["Mercado mes",fmt.format(c.marketMonthly)],
    ["EI mes",fmt.format(c.eiMonthly)],
    ["Ahorro mes",fmt.format(c.savingMonthly)],
    ["Retorno",`${num.format(c.roi)}x`]
  ].map(x=>`<article><span>${x[0]}</span><strong>${x[1]}</strong></article>`).join("");
  renderBars(app,c);
  $("summaryRows").innerHTML = [
    ["Licencia promedio para 20 usuarios",fmt.format(c.licenseAvg),"Incluido en gestión interna",fmt.format(c.licenseAvg)],
    ["Creación y personalización",fmt.format(app.buildMarket),app.buildEi?fmt.format(app.buildEi):"Cubierto con el equipo",fmt.format(Math.max(0,app.buildMarket-app.buildEi))],
    ["Mensual equivalente",fmt.format(c.marketMonthly),fmt.format(c.eiMonthly),fmt.format(c.savingMonthly)],
    ["Primer año",fmt.format(c.marketAnnual),fmt.format(c.eiAnnual),fmt.format(c.savingAnnual)]
  ].map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td class="good">${r[3]}</td></tr>`).join("");
}
function renderBars(app,c){
  const values=app.competitors.map((comp,i)=>({name:comp.name,license:c.compValues[i],total:c.compValues[i]+c.buildMonthly,basis:comp.type==="per_user"?`${comp.usd} USD × ${state.users}`:`${comp.usd} USD fijo`}));
  const max=Math.max(...values.map(v=>v.total),c.eiMonthly)*1.08;
  $("bars").innerHTML=values.map(v=>{
    const width=Math.max(7,(v.total/max)*100);
    const line=Math.min(96,Math.max(2,(c.eiMonthly/max)*100));
    const diff=v.total-c.eiMonthly;
    return `<div class="bar-row"><div class="bar-label"><b>${v.name}</b><span>${v.basis} + creación</span></div><div class="track"><div class="fill" style="width:${width}%">${moneyShort(v.total)}</div><i class="ei-line" style="left:${line}%"></i></div><div class="bar-value">${fmt.format(v.total)}<span>EI ahorra ${moneyShort(diff)}</span></div></div>`;
  }).join("");
}
function renderDetail(){
  const app=apps[state.active];
  const c=appCalc(app);
  const a=analyst(app.analystId);
  $("detailName").textContent=app.name;
  $("editAnalyst").value=a.name;
  $("editSalary").value=a.salary;
  $("editBuildMarket").value=app.buildMarket;
  $("editBuildEi").value=app.buildEi;
  $("competitorRows").innerHTML=app.competitors.map((comp,i)=>{
    const license=c.compValues[i];
    const total=license+c.buildMonthly;
    const basis=comp.type==="per_user"?`${comp.usd} USD por usuario × ${state.users} usuarios`:`${comp.usd} USD mensuales en plan fijo o referencia`;
    return `<div class="comp-row"><div><b>${comp.name}</b><span>${basis}</span></div><strong>${fmt.format(total)}</strong></div>`;
  }).join("");
  $("impactRows").innerHTML=app.impacts.map(x=>`<li>${x}</li>`).join("");
  $("formulaText").textContent=`${fmt.format(c.marketMonthly)} de mercado mensual equivalente menos ${fmt.format(c.eiMonthly)} de costo EI asignado. El costo EI sale de dividir el sueldo de ${a.name} entre ${appsByAnalyst(a.id).length} aplicaciones a cargo.`;
  $("sourceRows").innerHTML=app.competitors.map(comp=>`<a href="${comp.source}" target="_blank" rel="noopener">${comp.name}: ${comp.source}</a>`).join("");
}
function bind(){
  $("usersInput").addEventListener("input",e=>{state.users=Math.max(1,Number(e.target.value));save();renderAll()});
  $("prevApp").addEventListener("click",()=>{state.active=(state.active-1+apps.length)%apps.length;renderAll()});
  $("nextApp").addEventListener("click",()=>{state.active=(state.active+1)%apps.length;renderAll()});
  $("openDetail").addEventListener("click",()=>{renderDetail();$("detailDialog").showModal()});
  $("closeDetail").addEventListener("click",()=>$("detailDialog").close());
  $("openMethod").addEventListener("click",()=>$("methodDialog").showModal());
  $("closeMethod").addEventListener("click",()=>$("methodDialog").close());
  $("editAnalyst").addEventListener("input",e=>{analyst(apps[state.active].analystId).name=e.target.value;save();renderAll();renderDetail()});
  $("editSalary").addEventListener("input",e=>{analyst(apps[state.active].analystId).salary=Number(e.target.value);save();renderAll();renderDetail()});
  $("editBuildMarket").addEventListener("input",e=>{apps[state.active].buildMarket=Number(e.target.value);save();renderAll();renderDetail()});
  $("editBuildEi").addEventListener("input",e=>{apps[state.active].buildEi=Number(e.target.value);save();renderAll();renderDetail()});
  window.addEventListener("keydown",e=>{if(e.key==="ArrowRight"){state.active=(state.active+1)%apps.length;renderAll()} if(e.key==="ArrowLeft"){state.active=(state.active-1+apps.length)%apps.length;renderAll()}});
}
function renderAll(){
  $("usersInput").value=state.users;
  renderHero();
  renderAnalysts();
  renderSelector();
  renderFocus();
}
load();
bind();
renderAll();
setTimeout(()=>$("splash").classList.add("hide"),600);

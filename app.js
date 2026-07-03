const TRM=3357.82;
const state={panel:"resumen",active:0,users:20};
const analysts=[
  {id:"camilo",name:"Juan Camilo Montoya",salary:2100000},
  {id:"luis",name:"Luis Grisales",salary:2100000},
  {id:"juanesteban",name:"Juan Esteban Pérez",salary:2100000}
];
const apps=[
  {id:"requisiciones",analystId:"camilo",name:"Requisición de compras",short:"Requisiciones",purpose:"Controla solicitudes de compra, responsables, estados, aprobaciones, trazabilidad y consulta centralizada.",reason:"La empresa no depende de correos sueltos, archivos dispersos o aprobaciones sin ruta. El analista mantiene una solución ajustada al proceso interno y evita pagar licencias más implementación externa.",buildMarket:34000000,buildEi:0,competitors:[{name:"Precoro",usd:499,type:"flat",source:"https://precoro.com/pricing"},{name:"Procurify",usd:1000,type:"flat",source:"https://www.procurify.com/pricing/"},{name:"Tradogram",usd:425,type:"flat",source:"https://www.tradogram.com/tradogram-procurement-2026-pricing-v2"}],impact:["Menos correos y archivos paralelos","Aprobaciones con responsable visible","Historial centralizado de solicitudes","Menos reproceso al consultar estados"]},
  {id:"cartera",analystId:"camilo",name:"Gestión de cartera",short:"Cartera",purpose:"Ordena seguimiento de cartera, compromisos, estados de cobro, trazabilidad y control de gestión.",reason:"El valor está en ordenar la cartera desde la operación real, sin comprar una plataforma externa que luego exige parametrización, campañas, integración y soporte adicional.",buildMarket:30000000,buildEi:0,competitors:[{name:"Debitia",usd:880,type:"flat",source:"https://debitia.com/"},{name:"Dapta",usd:900,type:"flat",source:"https://dapta.ai/ai-calls-register-gad-cobranzas/"},{name:"Moonflow",usd:499,type:"flat",source:"https://www.moonflow.ai/pricing"}],impact:["Seguimiento unificado de compromisos","Menos pérdida de gestión por canal informal","Priorización de cobros pendientes","Mayor control sobre vencimientos y responsables"]},
  {id:"auditoria",analystId:"luis",name:"ERP de auditoría de procesos logísticos",short:"ERP auditoría",purpose:"Estandariza auditorías logísticas, hallazgos, evidencias, responsables, acciones y seguimiento.",reason:"Permite auditar el proceso con listas, evidencias y responsables alineados a la operación de EI. La compra externa tendría que ajustarse al flujo interno y cobrar implementación.",buildMarket:34000000,buildEi:0,competitors:[{name:"SafetyCulture",usd:24,type:"per_user",source:"https://safetyculture.com/pricing"},{name:"GoAudits",usd:10,type:"per_user",source:"https://goaudits.com/pricing/"},{name:"Lumiform",usd:22,type:"per_user",source:"https://lumiformapp.com/pricing/"}],impact:["Auditorías con evidencias trazables","Menos formatos manuales repetidos","Hallazgos con responsable y cierre","Mejor seguimiento a acciones logísticas"]},
  {id:"paginaei",analystId:"luis",name:"Página general de Electro Ingeniería",short:"Página general EI",purpose:"Concentra información institucional, enlaces a asesores, catálogo y canales de consulta comercial.",reason:"No se trata solo de una página. Es un punto de atención e información que evita construir un portal externo desde cero y reduce solicitudes repetidas al equipo.",buildMarket:18000000,buildEi:2134000,competitors:[{name:"Wix Business Elite",usd:159,type:"flat",source:"https://www.wix.com/plans"},{name:"Webflow Business",usd:39,type:"flat",source:"https://webflow.com/pricing"},{name:"Squarespace Business",usd:23,type:"flat",source:"https://www.squarespace.com/pricing"}],impact:["Canal institucional ordenado","Acceso a asesores y catálogo","Menos consultas repetidas por información básica","Mejor presentación para clientes y equipo comercial"]},
  {id:"aula",analystId:"juanesteban",name:"Aula EI",short:"Aula EI",purpose:"Administra capacitaciones, módulos, evaluaciones, evidencias, certificados y seguimiento de participantes.",reason:"Convierte la capacitación en un activo interno reutilizable. Lo que normalmente se compra como LMS se adaptó al lenguaje, evidencias y rutas propias de la empresa.",buildMarket:26000000,buildEi:0,competitors:[{name:"TalentLMS",usd:119,type:"flat",source:"https://www.talentlms.com/prices"},{name:"LearnWorlds",usd:249,type:"flat",source:"https://www.learnworlds.com/pricing/"},{name:"MoodleCloud",usd:13.33,type:"flat",source:"https://www.moodlecloud.com/standard-plans/"}],impact:["Menos inducciones repetidas","Certificados y evidencias centralizadas","Evaluaciones controladas por módulo","Seguimiento de avance por participante"]},
  {id:"trazabilidad",analystId:"juanesteban",name:"ERP de trazabilidad logística",short:"Trazabilidad logística",purpose:"Controla recorrido del pedido, responsables, estados, evidencias, tiempos, reportes y alertas.",reason:"Es la solución de mayor impacto operativo porque conecta etapas, responsables y evidencias. Comprar algo similar obligaría a parametrizar un flujo que internamente ya quedó adaptado.",buildMarket:48000000,buildEi:0,competitors:[{name:"Quickbase Business",usd:55,type:"per_user",source:"https://www.quickbase.com/plans-and-pricing"},{name:"Odoo Custom",usd:61,type:"per_user",source:"https://www.odoo.com/pricing"},{name:"Odoo Standard",usd:31.1,type:"per_user",source:"https://www.odoo.com/pricing"}],impact:["Menos seguimiento por WhatsApp y llamadas","Evidencia por etapa del pedido","Control de tiempos y cuellos de botella","Mejor trazabilidad entre ventas, caja, logística y facturación"]},
  {id:"mesa",analystId:"juanesteban",name:"Mesa de ayuda de calidad",short:"Mesa de ayuda",purpose:"Recibe solicitudes, genera radicados, asigna responsables, mide tiempos y consolida indicadores.",reason:"La empresa gana control de solicitudes sin depender de correos o chats. Cada caso tiene radicado, responsable y trazabilidad de atención.",buildMarket:20000000,buildEi:0,competitors:[{name:"Zendesk Suite Team",usd:55,type:"per_user",source:"https://www.zendesk.com/pricing/"},{name:"Freshdesk Pro",usd:55,type:"per_user",source:"https://www.freshworks.com/freshdesk/pricing/"},{name:"Help Scout Plus",usd:50,type:"per_user",source:"https://www.helpscout.com/pricing/"}],impact:["Solicitudes por radicado","Responsables visibles","Indicadores de tiempos y cargas","Menos pérdida de solicitudes por canales informales"]},
  {id:"calidad",analystId:"juanesteban",name:"Página de repositorio y noticias de calidad",short:"Repositorio calidad",purpose:"Centraliza documentos, noticias, auditorías, accesos a aplicaciones e información del proceso de calidad.",reason:"El aporte no es solo guardar documentos. El valor está en ordenar el conocimiento del proceso, disminuir búsquedas y mantener una entrada clara a los recursos de calidad.",buildMarket:15000000,buildEi:0,competitors:[{name:"Helpjuice",usd:249,type:"flat",source:"https://helpjuice.com/pricing"},{name:"Slab Business",usd:12.5,type:"per_user",source:"https://slab.com/pricing/"},{name:"Archbee",usd:80,type:"flat",source:"https://www.archbee.com/pricing"}],impact:["Menos búsqueda de documentos y enlaces","Menos solicitudes repetidas","Noticias y auditorías en un solo punto","Acceso organizado al ecosistema de apps"]},
  {id:"inventario",analystId:"juanesteban",name:"APP de inventario cíclico",short:"Inventario cíclico",purpose:"Registra conteos, evidencias, diferencias, responsables y cierres de inventario.",reason:"Resuelve una necesidad operativa puntual sin adquirir una suite completa. El control físico queda trazable y el cierre de diferencias se vuelve más claro.",buildMarket:22000000,buildEi:0,competitors:[{name:"inFlow",usd:999,type:"flat",source:"https://www.inflowinventory.com/pricing"},{name:"Sortly",usd:299,type:"flat",source:"https://www.sortly.com/pricing/"},{name:"Zoho Inventory",usd:256.5,type:"flat",source:"https://www.zoho.com/inventory/pricing/"}],impact:["Menos papel en conteos físicos","Menos digitación posterior","Evidencia y responsable por conteo","Mejor cierre de diferencias"]}
];
const fmt=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",maximumFractionDigits:0});
const num=new Intl.NumberFormat("es-CO",{maximumFractionDigits:1});
const qs=s=>document.querySelector(s);
const qsa=s=>Array.from(document.querySelectorAll(s));
const el=id=>document.getElementById(id);
function load(){
  const raw=localStorage.getItem("eiBoardV5");
  if(!raw)return;
  try{
    const data=JSON.parse(raw);
    if(data.users)state.users=Number(data.users);
    if(Array.isArray(data.analysts))data.analysts.forEach(item=>{const a=analysts.find(x=>x.id===item.id);if(a){a.name=item.name||a.name;a.salary=Number(item.salary)||a.salary}});
    if(Array.isArray(data.apps))data.apps.forEach(item=>{const app=apps.find(x=>x.id===item.id);if(app){app.buildMarket=Number(item.buildMarket)||app.buildMarket;app.buildEi=Number(item.buildEi)||0}});
  }catch(e){}
}
function save(){
  localStorage.setItem("eiBoardV5",JSON.stringify({users:state.users,analysts:analysts.map(a=>({id:a.id,name:a.name,salary:a.salary})),apps:apps.map(a=>({id:a.id,buildMarket:a.buildMarket,buildEi:a.buildEi}))}));
}
function analyst(id){return analysts.find(a=>a.id===id)}
function ownedApps(id){return apps.filter(app=>app.analystId===id)}
function licenseCop(comp){return (comp.type==="per_user"?comp.usd*state.users:comp.usd)*TRM}
function salaryShare(app){const owner=analyst(app.analystId);return owner.salary/Math.max(1,ownedApps(owner.id).length)}
function compTotal(app,comp){return licenseCop(comp)+app.buildMarket/12}
function appCalc(app){
  const competitorTotals=app.competitors.map(c=>compTotal(app,c));
  const licenseAvg=app.competitors.map(licenseCop).reduce((a,b)=>a+b,0)/app.competitors.length;
  const buildMonthly=app.buildMarket/12;
  const marketMonthly=competitorTotals.reduce((a,b)=>a+b,0)/competitorTotals.length;
  const eiMonthly=salaryShare(app)+app.buildEi/12;
  const savingMonthly=marketMonthly-eiMonthly;
  const creationSaving=app.buildMarket-app.buildEi;
  return {competitorTotals,licenseAvg,buildMonthly,marketMonthly,eiMonthly,savingMonthly,roi:marketMonthly/Math.max(1,eiMonthly),creationSaving,annualSaving:savingMonthly*12,marketAnnual:marketMonthly*12,eiAnnual:eiMonthly*12};
}
function analystCalc(a){
  const list=ownedApps(a.id);
  const marketMonthly=list.reduce((sum,app)=>sum+appCalc(app).marketMonthly,0);
  const internalBuild=list.reduce((sum,app)=>sum+app.buildEi/12,0);
  const eiMonthly=a.salary+internalBuild;
  const savingMonthly=marketMonthly-eiMonthly;
  return {list,marketMonthly,eiMonthly,savingMonthly,roi:marketMonthly/Math.max(1,eiMonthly)};
}
function totals(){
  const marketMonthly=apps.reduce((sum,app)=>sum+appCalc(app).marketMonthly,0);
  const eiMonthly=analysts.reduce((sum,a)=>sum+a.salary,0)+apps.reduce((sum,app)=>sum+app.buildEi/12,0);
  const buildMonthly=apps.reduce((sum,app)=>sum+app.buildMarket/12,0);
  const licenseMonthly=apps.reduce((sum,app)=>sum+appCalc(app).licenseAvg,0);
  const internalBuildMonthly=apps.reduce((sum,app)=>sum+app.buildEi/12,0);
  return {marketMonthly,eiMonthly,savingMonthly:marketMonthly-eiMonthly,roi:marketMonthly/Math.max(1,eiMonthly),buildMonthly,licenseMonthly,internalBuildMonthly};
}
function shortMoney(v){
  if(Math.abs(v)>=1000000)return `$${(v/1000000).toFixed(1).replace(".",",")} M`;
  if(Math.abs(v)>=1000)return `$${Math.round(v/1000)} mil`;
  return fmt.format(v);
}
function pct(value,max){return `${Math.max(4,Math.min(100,(value/max)*100))}%`}
function setPanel(panel){
  state.panel=panel;
  qsa(".panel").forEach(p=>p.classList.remove("active"));
  el(`panel-${panel}`).classList.add("active");
  qsa(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.panel===panel));
  render();
}
function renderSummary(){
  const t=totals();
  el("mainSaving").textContent=fmt.format(t.savingMonthly);
  el("metricStrip").innerHTML=[
    ["Mercado mensual",t.marketMonthly],
    ["Costo EI mensual",t.eiMonthly],
    ["Retorno",`${num.format(t.roi)}x`]
  ].map(([k,v])=>`<article><small>${k}</small><b>${typeof v==="number"?shortMoney(v):v}</b></article>`).join("");
  const max=Math.max(t.marketMonthly,t.eiMonthly,t.savingMonthly);
  el("generalBars").innerHTML=[
    ["Mercado completo",t.marketMonthly,"fill"],
    ["Costo EI interno",t.eiMonthly,"fill light"],
    ["Ahorro mensual",t.savingMonthly,"fill soft"]
  ].map(([label,value,klass])=>`<div class="general-bar"><span>${label}</span><div class="track"><div class="${klass}" style="--w:${pct(value,max)}"></div></div><b>${shortMoney(value)}</b></div>`).join("");
  const total=t.marketMonthly+t.eiMonthly;
  const a=(t.licenseMonthly/Math.max(1,total))*360;
  const b=a+(t.buildMonthly/Math.max(1,total))*360;
  el("mixChart").innerHTML=`<div class="mix-ring" style="--a:${a}deg;--b:${b}deg"><div><strong>${num.format(t.roi)}x</strong><span>retorno</span></div></div><div class="legend"><article><span><i></i>Licencias de mercado</span><b>${shortMoney(t.licenseMonthly)}</b></article><article><span><i></i>Creación mensualizada</span><b>${shortMoney(t.buildMonthly)}</b></article><article><span><i></i>Costo EI interno</span><b>${shortMoney(t.eiMonthly)}</b></article></div>`;
}
function renderAnalysts(){
  el("analystBoard").innerHTML=analysts.map(a=>{
    const c=analystCalc(a);
    return `<article class="analyst-card"><div class="analyst-title"><span class="eyebrow">Analista</span><h3>${a.name}</h3><p>${c.list.length} aplicaciones a cargo. La comparación suma mercado para 20 usuarios y creación mensualizada.</p></div><div class="analyst-metrics"><article><span>Mercado mensual</span><b>${shortMoney(c.marketMonthly)}</b></article><article><span>Costo EI</span><b>${shortMoney(c.eiMonthly)}</b></article><article><span>Ahorro mensual</span><b>${shortMoney(c.savingMonthly)}</b></article><article><span>Retorno</span><b>${num.format(c.roi)}x</b></article></div><div class="analyst-apps">${c.list.map(app=>{const ac=appCalc(app);return `<div class="analyst-app"><div><strong>${app.short}</strong><small>ahorro ${shortMoney(ac.savingMonthly)} / mes</small></div><button data-open-app="${app.id}">Ver</button></div>`}).join("")}</div><div class="analyst-foot"><button class="ghost-btn" data-analyst-detail="${a.id}">Detalle</button><button class="primary-btn" data-analyst-focus="${a.id}">Explorar apps</button></div></article>`;
  }).join("");
  qsa("[data-open-app]").forEach(btn=>btn.addEventListener("click",()=>{state.active=apps.findIndex(app=>app.id===btn.dataset.openApp);setPanel("apps")}));
  qsa("[data-analyst-detail]").forEach(btn=>btn.addEventListener("click",()=>showAnalystDetail(btn.dataset.analystDetail)));
  qsa("[data-analyst-focus]").forEach(btn=>{btn.addEventListener("click",()=>{const first=ownedApps(btn.dataset.analystFocus)[0];state.active=apps.findIndex(app=>app.id===first.id);setPanel("apps")})});
}
function renderApps(){
  const active=apps[state.active];
  const owner=analyst(active.analystId);
  const calc=appCalc(active);
  el("appList").innerHTML=apps.map((app,i)=>`<button class="${i===state.active?"active":""}" data-app-index="${i}"><span>${app.short}</span><small>${analyst(app.analystId).name}</small></button>`).join("");
  qsa("[data-app-index]").forEach(btn=>btn.addEventListener("click",()=>{state.active=Number(btn.dataset.appIndex);renderApps()}));
  el("appOwner").textContent=owner.name;
  el("appTitle").textContent=active.name;
  el("appPurpose").textContent=active.purpose;
  el("appReason").textContent=active.reason;
  el("appMetrics").innerHTML=[
    ["Mercado",calc.marketMonthly],
    ["Costo EI",calc.eiMonthly],
    ["Ahorro",calc.savingMonthly],
    ["Retorno",`${num.format(calc.roi)}x`]
  ].map(([k,v])=>`<article><span>${k}</span><b>${typeof v==="number"?shortMoney(v):v}</b></article>`).join("");
  const values=[calc.eiMonthly,...active.competitors.map(c=>compTotal(active,c))];
  const max=Math.max(...values);
  el("appBars").innerHTML=`<div class="app-bar"><label>EI interno</label><div class="app-track"><div class="app-fill ei" style="--w:${pct(calc.eiMonthly,max)}"></div></div><b>${shortMoney(calc.eiMonthly)}</b></div>`+active.competitors.map(c=>{const value=compTotal(active,c);return `<div class="app-bar"><label>${c.name}</label><div class="app-track"><div class="app-fill" style="--w:${pct(value,max)}"></div></div><b>${shortMoney(value)}</b></div>`}).join("");
}
function render(){
  if(state.panel==="resumen")renderSummary();
  if(state.panel==="analistas")renderAnalysts();
  if(state.panel==="apps")renderApps();
}
function openModal(title,eyebrow,body){
  el("modalTitle").textContent=title;
  el("modalEyebrow").textContent=eyebrow;
  el("modalBody").innerHTML=body;
  el("modal").showModal();
}
function tableRows(rows){return `<table class="detail-table"><tbody>${rows.map(([a,b])=>`<tr><td>${a}</td><td>${b}</td></tr>`).join("")}</tbody></table>`}
function competitorsTable(app){
  return `<table class="detail-table"><thead><tr><th>Competencia</th><th>Licencia 20 usuarios</th><th>Total mensual</th></tr></thead><tbody>${app.competitors.map(c=>`<tr><td>${c.name}</td><td>${fmt.format(licenseCop(c))}</td><td>${fmt.format(compTotal(app,c))}</td></tr>`).join("")}</tbody></table>`;
}
function showAppDetail(app=apps[state.active]){
  const c=appCalc(app);
  const owner=analyst(app.analystId);
  const body=`<div class="kpi-list"><article><span>Mercado mensual</span><b>${shortMoney(c.marketMonthly)}</b></article><article><span>Costo EI mensual</span><b>${shortMoney(c.eiMonthly)}</b></article><article><span>Ahorro mensual</span><b>${shortMoney(c.savingMonthly)}</b></article></div><div class="modal-grid"><section class="detail-card"><h4>Comparación directa</h4>${competitorsTable(app)}</section><section class="detail-card"><h4>Por qué cuesta eso en el mercado</h4><p>El valor mensual completo suma licencia para ${state.users} usuarios y creación o personalización dividida en 12 meses. Esa creación cubre levantamiento, configuración, flujos, pruebas, ajustes, despliegue y acompañamiento inicial.</p>${tableRows([["Analista responsable",owner.name],["Sueldo compartido por app",fmt.format(salaryShare(app))],["Creación de mercado",fmt.format(app.buildMarket)],["Creación EI",fmt.format(app.buildEi)],["Ahorro en creación",fmt.format(c.creationSaving)]])}</section></div><div class="modal-grid"><section class="detail-card"><h4>Aporte operativo</h4><ul>${app.impact.map(x=>`<li>${x}</li>`).join("")}</ul></section><section class="detail-card"><h4>Fuentes</h4><div class="source-list">${app.competitors.map(c=>`<a href="${c.source}" target="_blank" rel="noopener">${c.name} · ${c.source}</a>`).join("")}</div></section></div>`;
  openModal(app.name,"Detalle de aplicación",body);
}
function showCompetitors(){
  const app=apps[state.active];
  const body=`<div class="detail-card"><h4>Top 3 competencias</h4>${competitorsTable(app)}<p>El total mensual no es solo licencia. Incluye la creación o personalización mensualizada porque una solución equivalente no queda lista únicamente pagando el plan.</p></div>`;
  openModal(app.short,"Competencias de mercado",body);
}
function showEdit(){
  const app=apps[state.active];
  const owner=analyst(app.analystId);
  const body=`<div class="form-grid"><label>Nombre del analista<input id="mAnalystName" value="${owner.name}"></label><label>Sueldo mensual<input id="mSalary" type="number" value="${owner.salary}" step="50000"></label><label>Creación mercado<input id="mBuildMarket" type="number" value="${app.buildMarket}" step="100000"></label><label>Creación EI<input id="mBuildEi" type="number" value="${app.buildEi}" step="100000"></label></div><div class="detail-card"><h4>Campos editables</h4><p>Los cambios se guardan en este navegador y recalculan el tablero. El sueldo del analista se reparte entre las aplicaciones a cargo. La creación de mercado se mensualiza a 12 meses.</p><button id="saveEdit" class="primary-btn">Guardar y recalcular</button></div>`;
  openModal(app.short,"Edición de datos",body);
  el("saveEdit").addEventListener("click",()=>{owner.name=el("mAnalystName").value.trim()||owner.name;owner.salary=Number(el("mSalary").value)||owner.salary;app.buildMarket=Number(el("mBuildMarket").value)||app.buildMarket;app.buildEi=Number(el("mBuildEi").value)||0;save();el("modal").close();render()});
}
function showMethod(){
  const body=`<div class="modal-grid"><section class="detail-card"><h4>Fórmula principal</h4>${tableRows([["Mercado mensual", "promedio del top 3 de competencias"],["Competencia mensual", "licencia para 20 usuarios + creación de mercado / 12"],["Costo EI mensual", "sueldo del analista / apps a cargo + creación EI / 12"],["Ahorro mensual", "mercado mensual - costo EI mensual"]])}</section><section class="detail-card"><h4>Criterio de lectura</h4><p>La comparación se presenta como primer año equivalente porque incluye implementación. Después del primer año, la empresa conserva el conocimiento, la estructura, los ajustes internos y la posibilidad de seguir mejorando sin comprar un paquete nuevo por cada necesidad.</p></section></div><div class="detail-card"><h4>Base usada</h4><p>Todos los aplicativos se calculan con ${state.users} usuarios. El salario base por analista queda editable y parte de ${fmt.format(2100000)} mensuales. La TRM usada en el tablero es ${new Intl.NumberFormat("es-CO",{maximumFractionDigits:2}).format(TRM)} COP/USD.</p></div>`;
  openModal("Cómo se calcula el ahorro","Método de cálculo",body);
}
function showTotals(){
  const t=totals();
  const rows=[["Licencias mercado",fmt.format(t.licenseMonthly)],["Creación mercado mensualizada",fmt.format(t.buildMonthly)],["Mercado mensual completo",fmt.format(t.marketMonthly)],["Sueldos + creación EI mensualizada",fmt.format(t.eiMonthly)],["Ahorro mensual",fmt.format(t.savingMonthly)],["Ahorro anual",fmt.format(t.savingMonthly*12)],["Retorno",`${num.format(t.roi)}x`]];
  openModal("Resumen económico general","Portafolio completo",`<div class="detail-card"><h4>Resultado consolidado</h4>${tableRows(rows)}</div>`);
}
function showAnalystDetail(id){
  const a=analyst(id);
  const c=analystCalc(a);
  const body=`<div class="kpi-list"><article><span>Apps a cargo</span><b>${c.list.length}</b></article><article><span>Ahorro mensual</span><b>${shortMoney(c.savingMonthly)}</b></article><article><span>Retorno</span><b>${num.format(c.roi)}x</b></article></div><div class="detail-card"><h4>Aplicaciones bajo responsabilidad</h4><table class="detail-table"><thead><tr><th>Aplicación</th><th>Mercado mensual</th><th>Ahorro mensual</th></tr></thead><tbody>${c.list.map(app=>{const ac=appCalc(app);return `<tr><td>${app.short}</td><td>${fmt.format(ac.marketMonthly)}</td><td>${fmt.format(ac.savingMonthly)}</td></tr>`}).join("")}</tbody></table></div><div class="detail-card"><h4>Lectura</h4><p>El costo mensual del analista se compara contra el valor de mercado de todas las aplicaciones que sostiene. La diferencia muestra por qué resulta más rentable conservar el conocimiento y la mejora dentro del equipo.</p></div>`;
  openModal(a.name,"Ahorro por analista",body);
}
function bind(){
  qsa(".nav-btn").forEach(btn=>btn.addEventListener("click",()=>setPanel(btn.dataset.panel)));
  el("goApps").addEventListener("click",()=>setPanel("apps"));
  el("goAnalysts").addEventListener("click",()=>setPanel("analistas"));
  el("openMethod").addEventListener("click",showMethod);
  el("openTotals").addEventListener("click",showTotals);
  el("openAppDetail").addEventListener("click",()=>showAppDetail());
  el("openCompetitors").addEventListener("click",showCompetitors);
  el("openEdit").addEventListener("click",showEdit);
  el("prevApp").addEventListener("click",()=>{state.active=(state.active-1+apps.length)%apps.length;renderApps()});
  el("nextApp").addEventListener("click",()=>{state.active=(state.active+1)%apps.length;renderApps()});
  el("closeModal").addEventListener("click",()=>el("modal").close());
  el("modal").addEventListener("click",e=>{if(e.target.id==="modal")el("modal").close()});
}
load();
bind();
renderSummary();
setTimeout(()=>el("intro").classList.add("hide"),700);

const releases=[
{id:"CST001",title:"DIGGERS TOOLKIT",type:"BEATS",cat:"beats",img:"assets/recent-1.webp"},
{id:"CST002",title:"NOKTA EDIT PACK",type:"REMIX",cat:"remixes",img:"assets/recent-2.webp"},
{id:"CST003",title:"THE CULT SESSIONS",type:"MIX",cat:"mixes",img:"assets/recent-3.webp"},
{id:"CST004",title:"NIGHT SHIFT",type:"MASHUP",cat:"mashups",img:"assets/recent-2.webp"},
{id:"CST005",title:"RAW 001",type:"ORIGINAL",cat:"originals",img:"assets/recent-1.webp"},
{id:"CST006",title:"AFTER HOURS",type:"EXTENDED",cat:"extendeds",img:"assets/recent-3.webp"}];
const grid=document.querySelector("#release-grid");
let active="all";
function draw(){const data=active==="all"?releases.slice(0,3):releases.filter(r=>r.cat===active);grid.innerHTML=data.map(r=>`<article class="release-card"><img src="${r.img}" alt=""><div><span class="code">${r.id}</span><h3>${r.title}</h3><p>${r.type} / 2026 &nbsp; →</p></div></article>`).join("")||"<p>No releases in this folder yet.</p>"}
document.querySelectorAll(".folder").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".folder").forEach(x=>x.classList.remove("active"));b.classList.add("active");active=b.dataset.filter;draw()}));
document.querySelector("#show-all").addEventListener("click",()=>{active="all";grid.innerHTML=releases.map(r=>`<article class="release-card"><img src="${r.img}" alt=""><div><span class="code">${r.id}</span><h3>${r.title}</h3><p>${r.type} / 2026 &nbsp; →</p></div></article>`).join("")});
draw();
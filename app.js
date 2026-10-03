const releases=[
  {id:"CST001",title:"DIGGERS TOOLKIT",type:"BEATS",cat:"beats",img:"assets/recent-1.webp",meta:"INSTRUMENTAL / 2026"},
  {id:"CST002",title:"NOKTA EDIT PACK",type:"REMIX",cat:"remixes",img:"assets/recent-2.webp",meta:"REWORK / 2026"},
  {id:"CST003",title:"THE CULT SESSIONS",type:"MIX",cat:"mixes",img:"assets/recent-3.webp",meta:"LIVE MIX / 2026"},
  {id:"CST004",title:"NIGHT SHIFT",type:"MASHUP",cat:"mashups",img:"assets/recent-2.webp",meta:"BLEND / 2026"},
  {id:"CST005",title:"RAW 001",type:"ORIGINAL",cat:"originals",img:"assets/recent-1.webp",meta:"ORIGINAL / 2026"},
  {id:"CST006",title:"AFTER HOURS",type:"EXTENDED",cat:"extendeds",img:"assets/recent-3.webp",meta:"DJ TOOL / 2026"}
];

const grid=document.querySelector("#release-grid");
const filterLabel=document.querySelector("#filter-label");
const folders=[...document.querySelectorAll(".folder-card")];
let active="all";

function card(r){
  return `
    <article class="release-card">
      <div class="release-image">
        <img src="${r.img}" alt="">
        <span class="release-drag" style="background-image:url('${r.img}')" aria-hidden="true"></span>
      </div>
      <div class="release-topline">
        <span>${r.id}</span>
        <span>${r.type}</span>
      </div>
      <h3>${r.title}</h3>
      <div class="release-bottom">
        <span>${r.meta}</span>
        <span>↗</span>
      </div>
    </article>`;
}

function draw(){
  const data=active==="all"?releases.slice(0,3):releases.filter(r=>r.cat===active);
  filterLabel.textContent=active==="all"?"ALL RELEASES":active.toUpperCase();
  grid.innerHTML=data.length
    ?data.map(card).join("")
    :'<div class="empty-state">NO FILES IN THIS FOLDER YET.</div>';
}

function setFilter(filter,scroll=true){
  active=filter;
  folders.forEach(folder=>folder.classList.toggle("active",folder.dataset.filter===filter));
  draw();
  if(scroll){
    document.querySelector("#releases").scrollIntoView({behavior:"smooth",block:"start"});
  }
}

folders.forEach(folder=>{
  folder.addEventListener("click",()=>setFilter(folder.dataset.filter));
});

document.querySelector("#show-all").addEventListener("click",()=>setFilter("all",false));

draw();
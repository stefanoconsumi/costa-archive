const releases=[
  {id:"CST001",title:"DIGGERS TOOLKIT",type:"BEATS",img:"assets/recent-1.webp",meta:"INSTRUMENTAL / 2026"},
  {id:"CST002",title:"NOKTA EDIT PACK",type:"REMIX",img:"assets/recent-2.webp",meta:"REWORK / 2026"},
  {id:"CST003",title:"THE CULT SESSIONS",type:"MIX",img:"assets/recent-3.webp",meta:"LIVE MIX / 2026"}
];

const grid=document.querySelector("#release-grid");

function card(r){
  return `
    <article class="release-card">
      <div class="release-image">
        <img src="${r.img}" alt="">
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

grid.innerHTML=releases.map(card).join("");
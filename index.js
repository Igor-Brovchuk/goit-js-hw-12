import{a as S,S as q,i as n}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&d(f)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const R="https://pixabay.com/api/",C="54994040-b8635b68b4c6f311854573060";async function m(s,t){const o={key:C,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};return(await S.get(R,{params:o})).data}const g=document.querySelector(".gallery"),y=document.querySelector(".loader"),h=document.querySelector(".js-btn-load"),E=new q(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function b(s){const t=s.map(o=>`<li class="gallery-item">
        <a class="gallery-link" href="${o.largeImageURL}">
          <img
            class="gallery-image"
            src="${o.webformatURL}"
            alt="${o.tags}"
          />
        </a>

        <div class="info">
          <p class="info-item"><b>Likes</b> <span>${o.likes}</span></p>
          <p class="info-item"><b>Views</b> <span>${o.views}</span></p>
          <p class="info-item"><b>Comments</b> <span>${o.comments}</span></p>
          <p class="info-item"><b>Downloads</b> <span>${o.downloads}</span></p>
        </div>
      </li>`).join("");g.insertAdjacentHTML("beforeend",t),E.refresh()}function P(){g.innerHTML=""}function L(){y.classList.add("active")}function v(){y.classList.remove("active")}function w(){h.classList.remove("is-hidden")}function l(){h.classList.add("is-hidden")}const p=document.querySelector(".form"),$=document.querySelector(".js-btn-load");let a=1,i="",c=0;const u=15;p.addEventListener("submit",async s=>{if(s.preventDefault(),i=s.target.elements["search-text"].value.trim(),!!i){a=1,P(),l(),L();try{const t=await m(i,a);if(c=t.totalHits,t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#fafafb",backgroundColor:"#ef4040"});return}b(t.hits),c>u&&w(),a*u>=c&&(l(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),p.reset()}catch{n.error({message:"Something went wrong!",position:"topRight",messageColor:"#fafafb",backgroundColor:"#ef4040"})}finally{v()}}});$.addEventListener("click",async()=>{a+=1,L(),l();try{const s=await m(i,a);b(s.hits),w();const t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"}),a*u>=c&&(l(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{n.error({message:"Error loading more images",position:"topRight",messageColor:"#fafafb",backgroundColor:"#ef4040"})}finally{v()}});
//# sourceMappingURL=index.js.map

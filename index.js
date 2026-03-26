import{a as w,S,i as n}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const q="https://pixabay.com/api/",R="54994040-b8635b68b4c6f311854573060";async function p(s,t){const o={key:R,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};return(await w.get(q,{params:o})).data}const m=document.querySelector(".gallery"),g=document.querySelector(".loader"),y=document.querySelector(".js-btn-load"),E=new S(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function h(s){const t=s.map(o=>`<li class="gallery-item">
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
      </li>`).join("");m.insertAdjacentHTML("beforeend",t),E.refresh()}function P(){m.innerHTML=""}function b(){g.classList.add("active")}function L(){g.classList.remove("active")}function v(){y.classList.remove("is-hidden")}function l(){y.classList.add("is-hidden")}const f=document.querySelector(".form"),$=document.querySelector(".js-btn-load");let a=1,i="",c=0;f.addEventListener("submit",async s=>{if(s.preventDefault(),i=s.target.elements["search-text"].value.trim(),!!i){a=1,P(),l(),b();try{const t=await p(i,a);if(c=t.totalHits,t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight"});return}h(t.hits),c>perPage&&v(),a*15>=c&&(l(),n.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),f.reset()}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{L()}}});$.addEventListener("click",async()=>{a+=1,b(),l();try{const s=await p(i,a);h(s.hits),v();const t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"}),a*15>=c&&(l(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{n.error({message:"Error loading more images",position:"topRight"})}finally{L()}});
//# sourceMappingURL=index.js.map

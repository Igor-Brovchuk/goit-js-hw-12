import{a as u,S as p,i}from"./assets/vendor-dNBuWDsd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",d="54994040-b8635b68b4c6f311854573060";function y(s){return u.get(m,{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const c=document.querySelector(".gallery"),f=document.querySelector(".loader"),g=new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function h(s){const o=s.map(t=>`<li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
          />
        </a>

        <div class="info">
          <p class="info-item"><b>Likes</b> <span>${t.likes}</span></p>
          <p class="info-item"><b>Views</b> <span>${t.views}</span></p>
          <p class="info-item"><b>Comments</b> <span>${t.comments}</span></p>
          <p class="info-item"><b>Downloads</b> <span>${t.downloads}</span></p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){c.innerHTML=""}function L(){f.classList.add("active")}function v(){f.classList.remove("active")}const l=document.querySelector(".form");l.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();o&&(b(),L(),y(o).then(t=>{if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight"});return}h(t.hits)}).catch(t=>{i.error({message:"Something went wrong!",position:"topRight"})}).finally(()=>{v(),l.reset()}))});
//# sourceMappingURL=index.js.map

function e(e,t,a,i){Object.defineProperty(e,t,{get:a,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},n=t.parcelRequire4b1a;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequire4b1a=n),n.register("2nhTy",(function(t,a){e(t.exports,"default",(function(){return l}));document.querySelector(".main-container--card__box");const i=document.querySelector(".pagination"),n=i.querySelector(".pagination__list"),s=i.querySelector('[name="prev"]'),r=i.querySelector('[name="next"]'),o=document.getElementById("section__pagination");o.style.display="none";class l{constructor(){this.currentPage=1,this.totalPages=0,this.callback=function(){},this.init()}init(){n.addEventListener("click",this.onClickPages.bind(this)),s.addEventListener("click",this.onClickBtnPrev.bind(this)),r.addEventListener("click",this.onClickBtnNext.bind(this)),window.addEventListener("resize",(()=>{localStorage.getItem("CALLBACK")===this.callback.name&&this.renderPagination()}))}renderPagination(){if(o.style.display="block",r.classList.remove("disabled"),s.classList.remove("disabled"),window.innerWidth<768){if(this.currentPage===this.totalPages&&r.classList.add("disabled"),1===this.currentPage&&s.classList.add("disabled"),this.totalPages<=5)return void this.createPagination(!1,2,this.totalPages);if(this.totalPages>5){if(this.currentPage<=3&&this.createPagination(!1,2,5,!1,!1),this.currentPage>3&&this.currentPage<this.totalPages-1)return void this.createPagination(!1,this.currentPage-2,this.currentPage+2,!1,!1,!1);this.currentPage>this.totalPages-2&&this.createPagination(!1,this.totalPages-5,this.totalPages,!1,!1,!1)}}else if(1!==this.totalPages){if(this.totalPages<=9&&this.createPagination(this.totalPages,2,this.totalPages-1),this.totalPages>9){if(1===this.currentPage&&s.classList.add("disabled"),this.currentPage<5)return void this.createPagination(this.totalPages,2,7,!1,!0);if(this.currentPage>4&&this.currentPage<this.totalPages-5)return void this.createPagination(this.totalPages,this.currentPage-2,this.currentPage+2,!0,!0);if(this.currentPage!==this.totalPages&&this.currentPage>this.totalPages-6)return void this.createPagination(this.totalPages,this.totalPages-6,this.totalPages-1,!0,!1);if(this.currentPage===this.totalPages)return this.createPagination(this.totalPages,this.currentPage-6,this.currentPage-1,!0,!1),void r.classList.add("disabled")}}else i.classList.add("hidden")}createPagination(e,t,a,i,s,r=1){if(n.innerHTML="",r){let e=1===this.currentPage?" active":"";n.insertAdjacentHTML("beforeend",`<button class="pagination__link${e}" name="page">1</button>`)}i&&n.insertAdjacentHTML("beforeend",'<span class="pagination__link disabled">...</span>');for(let e=t;e<=a;e+=1){let t=e==this.currentPage?" active":"";n.insertAdjacentHTML("beforeend",`<button class="pagination__link${t}" name="page">${e}</button>`)}if(s&&n.insertAdjacentHTML("beforeend",'<span class="pagination__link disabled">...</span>'),e){let t=this.currentPage===this.totalPages?" active":"";n.insertAdjacentHTML("beforeend",`<button class="pagination__link${t}" name="page">${e}</button>`)}}onClickPages(e){"BUTTON"===e.target.nodeName&&(i.classList.add("hidden"),this.currentPage=1*e.target.textContent,window.scrollTo({top:0,behavior:"smooth"}),this.callbackRun(),i.classList.remove("hidden"))}onClickBtnPrev(){this.currentPage>1&&(i.classList.add("hidden"),window.scrollTo({top:0,behavior:"smooth"}),this.currentPage-=1,this.callbackRun(),i.classList.remove("hidden"))}onClickBtnNext(){this.currentPage!==this.totalPages&&(i.classList.add("hidden"),window.scrollTo({top:0,behavior:"smooth"}),this.currentPage+=1,this.callbackRun(),i.classList.remove("hidden"))}callbackRun(){localStorage.getItem("CALLBACK")===this.callback.name&&this.callback(this.currentPage)}set setCurrentPage(e){this.currentPage=e}set setTotalPages(e){this.totalPages=e}set setCallback(e){localStorage.setItem("CALLBACK",e.name),this.callback=e}}})),n.register("h8fuU",(function(t,a){e(t.exports,"renderMoviesCard",(function(){return s}));var i=n("krGWQ");function s(e){if(e===[]||void 0===e)return;const t=e.map((e=>{let t=e.release_date??e.first_air_date??null;return t=null!==t?t.slice(0,4):"",`\n          <li class="main-container--card"\n      data-modal-open>\n      <img class="card-poster"\n      data-id="${e.id}" \n      src="${e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"}"\n      alt="${e.original_name}" loading="lazy">\n      <div class="card-wrap">\n      <h2 class="card-title" data-id="${e.id}">${e.original_title.toUpperCase()||e.title.toUpperCase()}</h2>\n      <p class="card-info"> ${function([...e]){const t=localStorage.getItem("GENRES"),a=JSON.parse(t);let i;const n=[...e];for(let e=0;e<a.length;e++)for(let t=0;t<n.length;t++)n[t]===a[e].id&&(i=a[e].name,n[t]=i);if(n.length>2)return`${n[0]}, ${n[1]}, Other`;if(1===n.length)return`${n[0]}`;if(0===n.length)return"No genre";return`${n[0]}, ${n[1]}`}(e.genre_ids)} | ${t}<span class="card-rating"> ${e.vote_average.toFixed(1)}</span></p>\n       </div>\n  </li>`})).join("");i.default.moviesContainer.insertAdjacentHTML("beforeend",t)}})),n.register("gjiCh",(function(t,a){e(t.exports,"preloaderShow",(function(){return s})),e(t.exports,"hidePreloader",(function(){return r})),e(t.exports,"preloaderShowLonger",(function(){return o}));const i=document.getElementById("preloader"),n=document.querySelector(".loader");function s(){i.classList.add("is-open"),n.classList.add("is-open")}function r(){i.classList.remove("is-open"),n.classList.remove("is-open")}function o(){i.classList.add("is-open"),n.classList.add("is-open"),setTimeout((function(){i.classList.remove("is-open"),n.classList.remove("is-open")}),700)}}));var s=n("2nhTy"),r=n("h8fuU"),o=n("gjiCh");const l=new(0,s.default),c={watched:document.querySelector(".header_btn-watched"),queue:document.querySelector(".header_btn-queue"),containerMovie:document.querySelector(".main-container--card__box"),emptyPage:document.querySelector(".empty_page"),paginationPage:document.querySelector("#section__pagination")},d=localStorage.getItem("QUEUE_LIST"),g=JSON.parse(d);let u=0;function h(e=!1){(0,o.preloaderShowLonger)();const t=e||1,a=[];for(let e=1;e<=Math.ceil(g.length/10);e+=1){let t=10*e,i=e>1?10*(e-1):0;10*e>g.length&&(t=g.length),a[e]=g.slice(i,t)}u=a.length-1,c.containerMovie.innerHTML="",(0,r.renderMoviesCard)(a[t]),u>1&&(l.setCurrentPage=t,l.setTotalPages=u,l.setCallback=h,l.renderPagination())}c.queue.addEventListener("click",(function(e){if(e.preventDefault(),c.containerMovie.innerHTML="",c.queue.classList.add("current-btn"),c.watched.classList.remove("current-btn"),c.queue.classList.remove("simple-btn"),c.watched.classList.add("simple-btn"),0===g.length)return c.emptyPage.classList.add("visible"),void(c.paginationPage.style.display="none");try{h(),c.emptyPage.classList.remove("visible")}catch(e){console.log(e)}})),0===g.length&&(c.emptyPage.classList.add("visible"),c.paginationPage.style.display="none");
//# sourceMappingURL=library.1cc21454.js.map

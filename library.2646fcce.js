var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire4b1a;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire4b1a=a),a.register("02hw8",(function(e,t){var n=a("2nhTy"),i=a("h8fuU"),r=a("gjiCh");const o=new(0,n.default),l={watched:document.querySelector(".header_btn-watched"),queue:document.querySelector(".header_btn-queue"),containerMovie:document.querySelector(".main-container--card__box"),emptyPage:document.querySelector(".empty_page"),paginationPage:document.querySelector("#section__pagination")},s=localStorage.getItem("WATCHED_LIST"),c=JSON.parse(s);let d=0;if(l.watched.addEventListener("click",(function(e){if(e.preventDefault(),l.containerMovie.innerHTML="",l.watched.classList.add("current-btn"),l.queue.classList.remove("current-btn"),l.queue.classList.add("simple-btn"),l.watched.classList.remove("simple-btn"),0===c.length)return l.paginationPage.style.display="none",l.emptyPage.classList.add("visible");try{u(),l.emptyPage.classList.remove("visible")}catch(e){console.log(e)}})),0===c.length)return l.emptyPage.classList.add("visible"),void(l.paginationPage.style.display="none");function u(e=!1){(0,r.preloaderShowLonger)();const t=e||1,n=[];for(let e=1;e<=Math.ceil(c.length/10);e+=1){let t=10*e,a=e>1?10*(e-1):0;10*e>c.length&&(t=c.length),n[e]=c.slice(a,t)}d=n.length-1,l.containerMovie.innerHTML="",(0,i.renderMoviesCard)(n[t]),d>1&&(o.setCurrentPage=t,o.setTotalPages=d,o.setCallback=u,o.renderPagination())}l.emptyPage.classList.remove("visible"),u()})),a("02hw8");
//# sourceMappingURL=library.2646fcce.js.map

!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire4b1a;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire4b1a=a),a.register("1fiGW",(function(e,t){var n=a("jcFG7"),i=a("5u73R"),r=a("kvC6y"),o=new(0,n.default),l={watched:document.querySelector(".header_btn-watched"),queue:document.querySelector(".header_btn-queue"),containerMovie:document.querySelector(".main-container--card__box"),emptyPage:document.querySelector(".empty_page"),paginationPage:document.querySelector("#section__pagination")},s=localStorage.getItem("WATCHED_LIST"),c=JSON.parse(s),d=10,u=0;if(l.watched.addEventListener("click",(function(e){if(e.preventDefault(),l.containerMovie.innerHTML="",l.watched.classList.add("current-btn"),l.queue.classList.remove("current-btn"),l.queue.classList.add("simple-btn"),l.watched.classList.remove("simple-btn"),0===c.length)return l.paginationPage.style.display="none",l.emptyPage.classList.add("visible");try{g(),l.emptyPage.classList.remove("visible")}catch(e){console.log(e)}})),0===c.length)return l.emptyPage.classList.add("visible"),void(l.paginationPage.style.display="none");function g(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(0,r.preloaderShowLonger)();for(var t=e||1,n=[],a=1;a<=Math.ceil(c.length/d);a+=1){var s=d*a,p=a>1?d*(a-1):0;d*a>c.length&&(s=c.length),n[a]=c.slice(p,s)}u=n.length-1,l.containerMovie.innerHTML="",(0,i.renderMoviesCard)(n[t]),u>1&&(o.setCurrentPage=t,o.setTotalPages=u,o.setCallback=g,o.renderPagination())}l.emptyPage.classList.remove("visible"),g()})),a("1fiGW")}();
//# sourceMappingURL=library.28d7a365.js.map

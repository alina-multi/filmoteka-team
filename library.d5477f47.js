!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},d=e.parcelRequire4b1a;null==d&&((d=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var d={id:t,exports:{}};return n[t]=d,e.call(d.exports,d,d.exports),d.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){a[t]=e},e.parcelRequire4b1a=d);var i=d("q7ZX2"),o=d("8nrFW");function c(e){var n="No information";return e.overview&&(n=e.overview),'\n  <div class="modal-wrap">\n      \n      <div class="modal-container">\n        <div class="modal-left">\n      \n          <img src="'.concat(null===e.poster_path?"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg":"".concat("https://image.tmdb.org/t/p/w500").concat(e.poster_path),'"class="film-image" />\n      \n        </div>\n        <div class="modal-right">\n      \n          <h2 class="film-modal-title">').concat(e.original_title,'</h2>\n          <table class="film-info">\n            <tr>\n              <td class="table-name">Vote / Votes</td>\n             <td class="table-value"><span class="rating-value">').concat(e.vote_average.toFixed(1),"</span>/ ").concat(e.vote_count,'</td>\n             </tr>\n            <tr>\n              <td class="table-name">Popularity</td>\n              <td class="table-value">').concat(e.popularity.toFixed(1),'</td>\n            </tr>\n            <tr>\n              <td class="table-name">Original title</td>\n              <td class="table-value">').concat(e.original_title,'</td>\n            </tr>\n            <tr>\n              <td class="table-name">Genre</td>\n              <td class="table-value">').concat(function(e){for(var n,a=t(i)(e).slice(0),d=localStorage.getItem("GENRES"),c=JSON.parse(d),l=t(o)(a),s=0;s<c.length;s++)for(var r=0;r<l.length;r++)l[r]===c[s].id&&(n=c[s].name,l[r]=n);return 0===l.length?"":1===l.length?"".concat(l[0]):2===l.length?"".concat(l[0],", ").concat(l[1]):3===l.length?"".concat(l[0],", ").concat(l[1],", ").concat(l[2]):4===l.length?"".concat(l[0],", ").concat(l[1],", ").concat(l[2],", ").concat(l[3]):5===l.length?"".concat(l[0],", ").concat(l[1],", ").concat(l[2],", ").concat(l[3],", ").concat(l[4]):void 0}(e.genre_ids),'</td>\n            </tr>\n          </table>\n<div class="modal-about">\n          <h3 class="about-title">About</h3>\n          <p class="about-desc">').concat(n,'</p>\n      </div>\n      <div class="modal-button">\n        <button class="btn watched-btn" type="button" data-addwatched>ADD TO WATCHED</button>\n         <button class="btn watched-btn is-hidden" type="button" data-removewatched>REMOVE FROM WATCHED</button>\n        <button class="btn queue-btn" type="button" data-addqueue>ADD TO QUEUE</button>\n        <button class="btn queue-btn is-hidden" type="button" data-removequeue>REMOVE FROM QUEUE</button>\n      </div>\n          </div>\n        </div>\n      </div>  \n    </div>')}var l=d("4Nugj"),s=d("FH8Gh"),r=d("8MBJY"),u=d("a2hTj");var v="WATCHED_LIST",f="QUEUE_LIST",m=new(function(){"use strict";function e(){t(r)(this,e),this.watched=[],this.queue=[]}return t(u)(e,[{key:"addToLSwathced",value:function(t){localStorage.setItem(t,JSON.stringify(this.watched))}},{key:"addToLSqueue",value:function(t){localStorage.setItem(t,JSON.stringify(this.queue))}}]),e}()),h=m.watched,g=m.queue;function b(t){var e,n,a=document.querySelector("[data-addwatched]"),d=document.querySelector("[data-removewatched]"),i=localStorage.getItem(v),o=(e=t,(n=localStorage.getItem(v))?JSON.parse(n).find((function(t){return t.id===e})):null);function c(e){e.preventDefault();var n=L(t);o&&i||(m.addToLSwathced(v),h.push(n),a.classList.add("is-hidden"),d.classList.remove("is-hidden"),d.addEventListener("click",l)),m.addToLSwathced(v)}function l(e){a.classList.remove("is-hidden"),d.classList.add("is-hidden"),a.addEventListener("click",c);var n=L(t),i=localStorage.getItem(v),o=JSON.parse(i).findIndex((function(t){return t.id===n.id}));h.splice(o,1),m.addToLSwathced(v)}i&&o?(a.classList.add("is-hidden"),d.classList.remove("is-hidden"),d.addEventListener("click",l)):a.addEventListener("click",c)}function p(t){var e,n,a=document.querySelector("[data-addqueue]"),d=document.querySelector("[data-removequeue]"),i=(e=t,(n=localStorage.getItem(f))?JSON.parse(n).find((function(t){return t.id===e})):null),o=localStorage.getItem(f);function c(e){e.preventDefault();var n=L(t);i&&!o||(m.addToLSqueue(f),g.push(n),a.classList.add("is-hidden"),d.classList.remove("is-hidden"),d.addEventListener("click",l)),m.addToLSqueue(f)}function l(e){a.classList.remove("is-hidden"),d.classList.add("is-hidden"),a.addEventListener("click",c);var n=L(t),i=localStorage.getItem(f),o=JSON.parse(i).findIndex((function(t){return t.id===n.id}));g.splice(o,1),localStorage.setItem(f,JSON.stringify(g))}o&&i?(a.classList.add("is-hidden"),d.classList.remove("is-hidden"),d.addEventListener("click",l)):a.addEventListener("click",c)}function L(t){var e=localStorage.getItem("MOVIE_LIST");return JSON.parse(e).find((function(e){return e.id===t}))}var S="";function E(t,e){var n=function(t){var e=localStorage.getItem(t);return JSON.parse(e)}(e);n.find((function(e){if(e.id===t){var n=c(e);l.default.modalContent.insertAdjacentHTML("beforeend",n)}}))}S||document.removeEventListener("click",s.escExit),l.default.containerBox.addEventListener("click",(function(t){if("IMG"===t.target.nodeName||"H2"===t.target.nodeName){l.default.modal.classList.remove("is-hidden");var e=Number(t.target.dataset.id);E(e,"WATCHED_LIST"),""===l.default.modalContent.textContent&&E(e,"QUEUE_LIST"),b(e),p(e),document.body.style.overflowY="hidden"}(S=!0)&&document.addEventListener("keydown",s.escExit)})),l.default.onBtnClose.addEventListener("click",s.closeModal),l.default.modal.addEventListener("click",s.outOfModal)}();
//# sourceMappingURL=library.d5477f47.js.map

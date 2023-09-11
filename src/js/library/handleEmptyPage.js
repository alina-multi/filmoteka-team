import refs from "../refs.js";

export function handleEmptyPage(listForRender){
    if (!listForRender) {
        refs.emptyPage.classList.add("visible");
        refs.paginationPage.style.display = "none";
        return;
      }
      refs.emptyPage.classList.remove("visible");
}
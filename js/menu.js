//  MENU VIEW MORE
const viewmenu = document.querySelector(".viewMenu");
const addedItems = document.querySelector(".added-items");

viewmenu.addEventListener("click", () =>{
    if (addedItems.style.display === "none"){
        addedItems.style.display = "flex";
        viewmenu.innerHTML = "View less";
    }else{
        addedItems.style.display = "none";
        viewmenu.innerHTML = "View more";
    }
});
let span = document.getElementsByTagName('span');
let product = document.getElementsByClassName("items");
let product_page = Math.ceil(product.length/4);
let l = 0;
let movePer = 50; //25.34
let maxMove = 203;

//Mobile view
let mobileView = window.matchMedia("(max-width: 768px)");
if (mobileView.matches){
    movePer = 50.36;
    maxMove = 504;
}

let rightMover = () => {
    l = l + movePer;
    if (product == 1) { l = 0}
    for(const i of product){
        if (l > maxMove) {l = l - movePer;}
        i.style.left = '-' + l + '%';
    }
}

let leftMover = () => {
    l = l - movePer;
    if (l<=0) { l = 0}
    for(const i of product){
        if (product_page > 1)
        i.style.left = '-' + l + '%';
    }
}
span[1].onclick = ()=> {rightMover();}
span[0].onclick = ()=> {leftMover();}

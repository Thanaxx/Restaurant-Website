window.addEventListener('scroll', () => {
    const navigation = document.querySelector(".navbar");

    if (window.pageYOffset > 30){
        navigation.classList.add("active");
        navigation.classList.add("activeA");
    }else{
        navigation.classList.remove("active");
        navigation.classList.remove("activeA");
        navigation.classList.add("transition-out");
    }
});


// TOP BAR
const topBar = document.querySelector(".top-bar");
const menu = document.querySelector(".nav-bar");
const cancel = document.querySelector(".cancel-bar");

menu.addEventListener('click', () =>{
    topBar.style.height = "100%";
});

cancel.addEventListener('click', () =>{
    topBar.style.height = "0";
});




//  Login
const loginbtn = document.querySelector(".login");
const loginPage = document.querySelector(".login-container");
const cancelBtn = document.querySelector("#cancel");

loginbtn.addEventListener('click', () =>{
    loginPage.style.display = "block";
});

cancelBtn.addEventListener("click", () =>{
    loginPage.style.display = "none";
});

window.onclick = function(event){
    if(event.target == loginPage){
        loginPage.style.display = "none";
    }
}

// order online btn
const alertMessage = document.querySelector(".order-online-btn");

alertMessage.addEventListener('click', () =>{
    alert("Please login first to order online.");
})
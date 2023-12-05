const btnmobile = document.getElementById("menubtn");
const li = document.getElementsByTagName("li");

function toggleMenu(){
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
};

function closeMenu(){
    const nav = document.getElementById("nav");
    nav.classList.remove("active");
}

for(i=0;i<li.length;i++){
    li[i].addEventListener("click",closeMenu);
}

btnmobile.addEventListener("click", toggleMenu);
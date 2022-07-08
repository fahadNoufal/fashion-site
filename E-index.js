const menuIcon = document.querySelector(".menu-icon");
const navLinks=document.querySelector(".nav-links");
const closeMenuIcon=document.querySelector(".close-menu-icon");

menuIcon.addEventListener("click",()=> {
    navLinks.classList.add("mob-nav-links")
    menuIcon.style.right="-15%";
    closeMenuIcon.style.visibility="visible";
    navLinks.style.right="0";
})

closeMenuIcon.addEventListener("click",()=>{
    navLinks.classList.remove("mob-nav-links")
    menuIcon.style.right="15%"
    closeMenuIcon.style.visibility="hidden";
    navLinks.style.right="-500px";
})



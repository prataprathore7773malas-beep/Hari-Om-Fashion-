/*=========================================
HARI OM FASHION
SCRIPT.JS - PART 1
Navigation + Sticky Header + Scroll Top
==========================================*/


/*=========================================
MOBILE MENU
==========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

menuBtn.addEventListener("click", () => {

navLinks.classList.toggle("active");

menuBtn.classList.toggle("bx-x");

});

}


/*=========================================
CLOSE MENU AFTER CLICK
==========================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

link.addEventListener("click", () => {

navLinks.classList.remove("active");

menuBtn.classList.remove("bx-x");

});

});


/*=========================================
STICKY HEADER
==========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if (window.scrollY > 80) {

header.style.boxShadow = "0 12px 35px rgba(0,0,0,.08)";
header.style.background = "#fff";

} else {

header.style.boxShadow = "none";
header.style.background = "transparent";

}

});


/*=========================================
ACTIVE NAVIGATION
==========================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;
const sectionHeight = section.clientHeight;

if (pageYOffset >= sectionTop) {

current = section.getAttribute("id");

}

});

navItems.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {

link.classList.add("active");

}

});

});


/*=========================================
SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function (e) {

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if (target) {

target.scrollIntoView({

behavior: "smooth"

});

}

});

});


/*=========================================
SCROLL TO TOP BUTTON
==========================================*/

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

if (window.scrollY > 400) {

scrollBtn.classList.add("show");

} else {

scrollBtn.classList.remove("show");

}

});

scrollBtn.addEventListener("click", () => {

window.scrollTo({

top: 0,
behavior: "smooth"

});

});


/*=========================================
AOS ANIMATION
==========================================*/

AOS.init({

duration:1000,
offset:120,
once:true,
easing:"ease-in-out"

});


/*=========================================
CURRENT YEAR
==========================================*/

const year = document.querySelector("#year");

if(year){

year.textContent = new Date().getFullYear();

} /*=========================================
HARI OM FASHION
SCRIPT.JS - PART 2
FAQ + Counter + WhatsApp Form + Preloader
==========================================*/


/*=========================================
PRELOADER
==========================================*/

window.addEventListener("load", () => {

const preloader = document.getElementById("preloader");

setTimeout(() => {

if(preloader){

preloader.style.opacity = "0";
preloader.style.visibility = "hidden";

}

},700);

});


/*=========================================
FAQ ACCORDION
==========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question = item.querySelector(".faq-question");

question.addEventListener("click",()=>{

faqItems.forEach(faq=>{

if(faq!==item){

faq.classList.remove("active");

}

});

item.classList.toggle("active");

});

});


/*=========================================
COUNTER ANIMATION
==========================================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/150;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

counterObserver.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/*=========================================
WHATSAPP ENQUIRY FORM
==========================================*/

const enquiryForm=document.getElementById("whatsappForm");

if(enquiryForm){

enquiryForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;
const phone=document.getElementById("phone").value;
const city=document.getElementById("city").value;
const business=document.getElementById("business").value;
const category=document.getElementById("category").value;
const message=document.getElementById("message").value;

const text=

`*Hari Om Fashion Enquiry*%0A%0A
👤 Name : ${name}%0A
📞 Mobile : ${phone}%0A
🏙 City : ${city}%0A
🛍 Collection : ${category}%0A
💬 Message : ${message}`;

window.open(

`https://wa.me/916359458384?text=${text}`,

"_blank"

);

this.reset();

});

}


/*=========================================
INPUT VALIDATION
==========================================*/

document.querySelectorAll("input,textarea").forEach(input=>{

input.addEventListener("input",()=>{

input.style.borderColor="#d9d9d9";

});

});


/*=========================================
PHONE ONLY NUMBERS
==========================================*/

const phoneInput=document.getElementById("phone");

if(phoneInput){

phoneInput.addEventListener("input",function(){

this.value=this.value.replace(/\D/g,"");

});

}


/*=========================================
BUTTON RIPPLE EFFECT
==========================================*/

document.querySelectorAll(".primary-btn,.secondary-btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";
ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

}); /*=========================================
HARI OM FASHION
SCRIPT.JS - PART 3
Gallery + Navbar + Effects
==========================================*/


/*=========================================
GALLERY LIGHTBOX
==========================================*/

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image => {

image.addEventListener("click", () => {

const overlay = document.createElement("div");

overlay.style.position = "fixed";
overlay.style.left = "0";
overlay.style.top = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background = "rgba(0,0,0,.92)";
overlay.style.display = "flex";
overlay.style.alignItems = "center";
overlay.style.justifyContent = "center";
overlay.style.zIndex = "99999";
overlay.style.cursor = "zoom-out";

const img = document.createElement("img");

img.src = image.src;
img.style.maxWidth = "90%";
img.style.maxHeight = "90%";
img.style.borderRadius = "15px";
img.style.boxShadow = "0 20px 60px rgba(0,0,0,.5)";
img.style.animation = "zoomImage .35s ease";

overlay.appendChild(img);

document.body.appendChild(overlay);

overlay.addEventListener("click", () => {

overlay.remove();

});

});

});


/*=========================================
NAVBAR BACKGROUND
==========================================*/

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.background = "rgba(255,255,255,.97)";
navbar.style.backdropFilter = "blur(15px)";

}else{

navbar.style.background = "rgba(255,255,255,.88)";

}

});


/*=========================================
HERO PARALLAX
==========================================*/

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {

if(heroImage){

let value = window.scrollY * 0.12;

heroImage.style.transform =
`translateY(${value}px)`;

}

});


/*=========================================
BUTTON HOVER EFFECT
==========================================*/

document.querySelectorAll(".primary-btn,.secondary-btn")
.forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const x=e.pageX-button.offsetLeft;
const y=e.pageY-button.offsetTop;

button.style.setProperty("--x",x+"px");
button.style.setProperty("--y",y+"px");

});

});


/*=========================================
REVEAL ANIMATION
==========================================*/

const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-100){

item.classList.add("active");

}

});

});


/*=========================================
DISABLE RIGHT CLICK
(Optional)
==========================================*/

// document.addEventListener("contextmenu",e=>{

// e.preventDefault();

//});


/*=========================================
DISABLE IMAGE DRAG
==========================================*/

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});


/*=========================================
ZOOM ANIMATION
==========================================*/

const style=document.createElement("style");

style.innerHTML=`

@keyframes zoomImage{

0%{

transform:scale(.7);
opacity:0;

}

100%{

transform:scale(1);
opacity:1;

}

}

`;

document.head.appendChild(style);


/*=========================================
CONSOLE MESSAGE
==========================================*/

console.log("%cHari Om Fashion Website",
"font-size:22px;color:#C9A15A;font-weight:bold;");

console.log("Developed with ❤️");


/*=========================================
END OF SCRIPT
==========================================*/

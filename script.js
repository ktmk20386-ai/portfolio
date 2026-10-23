const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
menuToggle.addEventListener("click",function(){const isOpen=navLinks.classList.toggle("open");menuToggle.setAttribute("aria-expanded",isOpen);menuToggle.textContent=isOpen?"✕":"☰";});
document.querySelectorAll("#navLinks a").forEach(link=>link.addEventListener("click",function(){navLinks.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");menuToggle.textContent="☰";}));
document.getElementById("currentYear").textContent=new Date().getFullYear();
const typingText=document.getElementById("typingText"),roles=["Developer","Python Programmer","Java Programmer","Web Developer"];
let roleIndex=0,characterIndex=0,deleting=false;
function animateText(){const role=roles[roleIndex];if(!deleting){characterIndex++;typingText.textContent=role.substring(0,characterIndex);if(characterIndex>=role.length){deleting=true;setTimeout(animateText,1300);return;}}else{characterIndex--;typingText.textContent=role.substring(0,characterIndex);if(characterIndex<=0){deleting=false;roleIndex=(roleIndex+1)%roles.length;}}setTimeout(animateText,deleting?45:85);}
animateText();
document.getElementById("printResume").addEventListener("click",()=>window.print());
const sections=document.querySelectorAll("main section[id]"),navigationLinks=document.querySelectorAll("#navLinks a");
if("IntersectionObserver" in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){navigationLinks.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+entry.target.id));}});},{rootMargin:"-25% 0px -60% 0px"});sections.forEach(section=>observer.observe(section));}
document.querySelectorAll("[data-placeholder-link]").forEach(link=>link.addEventListener("click",event=>{if(link.getAttribute("href")==="#"){event.preventDefault();alert("Add your actual GitHub or LinkedIn profile URL.");}}));

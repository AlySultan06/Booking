let ul = document.querySelector("header ul");
let sideBar = document.querySelector("header i");
let featuresHeaders = document.querySelectorAll(".features-titles h3");
let featureImg = document.querySelector(".features-cont  .img-holder2 img");
let featureParagraph = document.querySelector(".features-cont .info p");
let featureTitle = document.querySelector(".features-cont .info h4");
let featuresInfo = document.querySelector(".features-cont .info");
let faqQuestion = document.querySelectorAll(".faq .container .question")
let faqIcon = document.querySelectorAll(".faq .container .question i")
let email = document.querySelector("#email")
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u
let form = document.querySelector("form")
let error = document.querySelector("error-msg")

form.onsubmit = (e) =>{
  
  if(emailRegex.test(email.value) == false){
    e.preventDefault()
    form.classList.add("active")
  }else{this.classList.remove("active")}
}



faqIcon.forEach((ele) =>{
  ele.addEventListener("click",() => {
    ele.parentElement.parentElement.classList.toggle("active")
  })
})



sideBar.addEventListener("click", () => {
  if (sideBar.getAttribute("isClicked") == "false") {
    ul.style.display = "flex";
    document.documentElement.style.setProperty("--index", "1");
    sideBar.style.cssText = "z-index:1;";
    document.documentElement.style.setProperty(
      "--nav-color",
      "hsl(229deg 31% 21% / 90%)"
    );
    sideBar.setAttribute("isClicked", "true");
    sideBar.className = "fa-solid fa-xmark";
    sideBar.style.color = "white";
  } else {
    ul.style.display = "none";
    document.documentElement.style.setProperty("--nav-color", "white");
    document.documentElement.style.setProperty("--index", "-1");
    sideBar.style.cssText = "z-index:0;";
    sideBar.setAttribute("isClicked", "false");
    sideBar.className = "fa-solid fa-bars";
  }
});

function changeContent(src, h, p) {
  featureImg.src = src;
  featureTitle.innerHTML = h;
  featureParagraph.innerHTML = p;
  featuresHeaders.forEach(
    (ele) => {
      ele.style.cssText = "border-bottom:1px solid grey"
    }
    
  )
  featureImg.classList.add("animate__fadeInLeft")
  setTimeout(() => {featureImg.classList.remove("animate__fadeInLeft")}, 500)
  featuresInfo.classList.add("animate__fadeInRight")
  setTimeout(() => {featuresInfo.classList.remove("animate__fadeInRight")}, 500)
  }

featuresHeaders[0].addEventListener("click", () => {
  
  changeContent(
  "images/illustration-features-tab-1.svg",
  "simple booking",
  " Organize your bookmarks however you like. Our simple drag-and-dropinterface gives you complete control over how you manage yourfavourite sites.",
 
)
featuresHeaders[0].style.cssText = "border-bottom: 3px solid var(--Soft-Red)"
})


featuresHeaders[1].addEventListener("click", () => {changeContent(
    "images/illustration-features-tab-2.svg",
    "intelligent search",
    "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
   
)
featuresHeaders[1].style.cssText = "border-bottom: 3px solid var(--Soft-Red)"
})  

  featuresHeaders[2].addEventListener("click" , () => {
  changeContent(
    "images/illustration-features-tab-3.svg",
    "share your bookmarks",
    "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  )
  featuresHeaders[2].style.cssText= "border-bottom: 3px solid var(--Soft-Red)"
})
















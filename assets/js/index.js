/* Show SideBar */
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}

if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

if(navMenu){
    navMenu.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}


/* Skills Tabs */
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills_active')
            })

            target.classList.add('skills_active')

            tabs.forEach(tabContents => {
                tabContents.classList.remove('skills_active')
            })

            tab.classList.add('skills_active')
        })    
      })

/* MIXITUP Filter Portfolio */
var mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

/* Active Link Works */
const linkWork = document.querySelectorAll('.work_item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))

/* Work PopUps */
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work_button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup(){
    document.querySelector(".portfolio_popup").classList.toggle("open");
}

document.querySelector(".portfolio_popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
    document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
    document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;
}

/* Services Modal */
const modalViews = document.querySelectorAll('.services_modal'),
      modelBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modelBtns.forEach((modelBtn, i) => { 
    modelBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})


/* Input Animation */
const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurfunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurfunc);
})

/* Scroll Sections Active Links */
//get all section that have an id defined
const sections = document.querySelectorAll("section[id");

//add an event listener listening for scroll
window.addEventListener("scroll",navHighlighter);

function navHighlighter(){
    //get current scroll position
    let scrollY = window.pageYOffset;
    //now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else
        {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}

let certCurrentSlide = 0;

function showCertSlide(index) {
  const slides = document.querySelectorAll('.cert-slider-image');
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    certCurrentSlide = 0;
  } else if (index < 0) {
    certCurrentSlide = totalSlides - 1;
  } else {
    certCurrentSlide = index;
  }

  const offset = -certCurrentSlide * 100;
  document.querySelector('.cert-slider').style.transform = `translateX(${offset}%)`;
}

function nextCertSlide() {
  showCertSlide(certCurrentSlide + 1);
}

function prevCertSlide() {
  showCertSlide(certCurrentSlide - 1);
}




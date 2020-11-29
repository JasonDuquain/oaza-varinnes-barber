
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(ScrollTrigger)

const heroSVG = document.querySelector('.hero__svg-icons')

const timeline = gsap.timeline({repeat:-1});

timeline.to(heroSVG, 3, {
  attr: {viewBox:"-16 75 40 40"},
  onUpdate: function() {
    //console.log(this.progress())
    if (this.progress() >= .26) {
      //console.log(this.pause());
      //console.log('stop');
    }
  },
  onComplete: function() {
    //this.invalidate()
    //this.restart()
  }

});



/* use onComplete to reset from start and begin again? */
/* check staggered staggers with no gap lesson! */


const afterImg = document.querySelector('.secrets__img--two')
const range = document.querySelector('.secrets__range');

document.addEventListener('input', (e) => {
  afterImg.style.width = `${e.target.value}%`;
  console.log(e.target.value)
})

const secretsSvg = [...document.querySelectorAll('.secrets__svg path')];
const secretsSvgTwo = [...document.querySelectorAll('.secrets__svg--two path')];
const secretsSvgThree = [...document.querySelectorAll('.secrets__svg--three path')];

const newArr = [secretsSvg, secretsSvgTwo, secretsSvgThree];




// secretsSvg.forEach(function(el) {
//   el.style.stroke = 'black';
//   el.style.strokeWidth= "3"
//   el.style.fill = 'none'
//   el.style.fillOpacity = 0
// })

// secretsSvgTwo.forEach(function(el) {
//   el.style.stroke = 'black';
//   el.style.strokeWidth= "3"
//   el.style.fill = 'none'
//   el.style.fillOpacity = 0
// })

// secretsSvgThree.forEach(function(el) {
//   el.style.stroke = 'black';
//   el.style.strokeWidth= "3"
//   el.style.fill = 'none'
//   el.style.fillOpacity = 0
// })

newArr.forEach((el, idx) => {
  el.forEach((el, idx) => {
    el.style.stroke = 'black';
  el.style.strokeWidth= "3"
  el.style.fill = 'none'
  el.style.fillOpacity = 0
  })
  
  gsap.from(el, {
    duration: 3,
    drawSVG: '0%',
    scrollTrigger: {
      trigger: el,
      markers: true,
      start: 'top 75%',
      end: 'bottom 25%',
      toggleActions: 'play none none none'
    },
    onComplete: function() {
      this.targets().forEach(function(el) {
        el.style.stroke = 'none'
        el.style.fill = null;
        el.style.fillOpacity = 1;
        el.style.transition = 'fill-opacity 2s';
      })
    }
  })

})


const list = document.querySelector('.services__list');
const links = document.querySelectorAll('.services__link');
const mainItems = document.querySelectorAll('.services__pow');

const listTwo = document.querySelectorAll('.services__list--two')
const linksTwo = document.querySelector('.services__link--two');

console.log(listTwo)

list.addEventListener('click', function(e) {
  e.preventDefault();

  if (!e.target.classList.contains("active") && e.target.classList.contains("services__link")) {
    links.forEach((el, idx) => {
      e.target.classList.add("active");
      el.classList.remove("active");
      mainItems[idx].classList.remove("active");
      mainItems[idx+4].classList.remove("active");
      mainItems[idx+5].classList.remove("active");
      mainItems[idx+6].classList.remove("active");
      mainItems[idx+7].classList.remove("active");
      mainItems[idx+8].classList.remove("active");
      mainItems[idx+9].classList.remove("active");
      mainItems[idx+10].classList.remove("active");
      mainItems[idx+11].classList.remove("active");

       if (mainItems[idx].children[2].firstElementChild.textContent === e.target.getAttribute("href").slice(1))  {
         mainItems[idx].classList.add("active");
       } 

    })

  }
})

listTwo.forEach(function(el, idx) {
  el.addEventListener('click', function(e) {
    e.preventDefault();

    

    if (!e.target.classList.contains("active") && e.target.classList.contains("services__link--two")) {
      el.firstElementChild.firstElementChild.classList.remove("active")
      el.firstElementChild.nextElementSibling.firstElementChild.classList.remove("active")
      e.target.classList.add("active");
    }

    

    mainItems[idx].classList.remove("active")

    if (mainItems[idx+4].children[1].firstElementChild.textContent === e.target.getAttribute("href").slice(1))  {
      
      mainItems[idx+4].classList.add("active");
    } 

    if (mainItems[idx+5].children[1].firstElementChild.textContent === e.target.getAttribute("href").slice(1))  {
      
      mainItems[idx+5].classList.add("active");
    } 

    if (mainItems[idx+6].children[1].firstElementChild.textContent === e.target.getAttribute("href").slice(1))  {
      
      mainItems[idx+6].classList.add("active");
    } 

    if (mainItems[idx+7].children[1].firstElementChild.textContent === e.target.getAttribute("href").slice(1))  {
      
      mainItems[idx+7].classList.add("active");
    } 

    if (mainItems[idx+8].children[1].firstElementChild.textContent === e.target.getAttribute("href").slice(1))  {
      
      mainItems[idx+8].classList.add("active");
    } 

    if (mainItems[idx+9].children[1].firstElementChild.textContent === e.target.getAttribute("href").slice(1))  {
      
      mainItems[idx+9].classList.add("active");
    } 

    if (mainItems[idx+10].children[1].firstElementChild.textContent === e.target.getAttribute("href").slice(1))  {
      
      mainItems[idx+10].classList.add("active");
    } 

    if (mainItems[idx+11].children[1].firstElementChild.textContent === e.target.getAttribute("href").slice(1))  {
      
      mainItems[idx+11].classList.add("active");
    } 
  })
})



const circleOne = document.querySelector('.animate')
const circleTwo = document.querySelector('.animate--two')
const textOne = document.querySelector('.text--one')

let el = document.querySelector('.animate');
let style = window.getComputedStyle(el);


var startTime = new Date().getTime();

let interval = setInterval(function() {
  if (new Date().getTime() - startTime > 2000){
    clearInterval(interval);
    return;
  }
  let arr = style.getPropertyValue('stroke-dasharray').split(",");
  textOne.textContent = Number(arr[0].slice(0, 4)) + '%'
  console.log(arr[0])

  
   
}, 50)




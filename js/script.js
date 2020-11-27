
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

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

document.addEventListener('click', (e) => {
  console.log(e.target)
})




/* use onComplete to reset from start and begin again? */
/* check staggered staggers with no gap lesson! */
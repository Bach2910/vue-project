const changeSegmentImage = (el) => {
  const imageDemo = document.getElementById('img-segment-demo');
  const imageValue = el.getAttribute('img');
  removeAllClasses('segment-item', 'active');
  el.classList.add('active');
  imageDemo.classList.remove('slide-animation');
  setTimeout(() => {
    imageDemo.classList.add('slide-animation');
  });
  imageDemo.style.backgroundImage = `url(${imageValue})`;
}
const removeAllClasses = (className, classRemoved) => {
  const elements = document.getElementsByClassName(className);
  for (let element of elements) {
    element.classList.remove(classRemoved);
  }
}

const bootstrapElements = () => {
  /**
   * Load segment demo image
   */
  const imageDemo = document.getElementById('img-segment-demo');
  const segmentImages = document.getElementsByClassName('segment-item');
  if (segmentImages.length > 0) {
    imageDemo.style.backgroundImage = `url(${segmentImages[0].getAttribute('img')})`;
  }
  /**
   * Load slider images
   */
  let stagePadding = 350;
  const screenWidth = document.body.offsetWidth;
  if (screenWidth > 1000 && screenWidth <= 1500) {
    stagePadding = 180;
  }
  if (screenWidth > 800 && screenWidth <= 1000) {
    stagePadding = 60;
  }
  if (screenWidth <= 800) {
    if (screenWidth > 400 && screenWidth <= 800) {
      stagePadding = 10;
    }
    if (screenWidth <= 400) {
      stagePadding = 0;
      let sliderItem = document.getElementsByClassName('slider-item');
      for (let slider of sliderItem) {
        slider.style.borderRadius = '0px';
        document.getElementById('slider-image').style.borderRadius = '0px';
      }
    }
    document.getElementById('trigger-prev-slider').style.left = '10px';
    document.getElementById('trigger-prev-slider').style.opacity = '.3';
    document.getElementById('trigger-next-slider').style.right = '10px';
    document.getElementById('trigger-next-slider').style.opacity = '.3';
  }
  $('.owl-carousel-banner').owlCarousel({
    stagePadding,
    loop: true,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
}
const owlHandler = {
  dots: document.getElementsByClassName('owl-dot'),
  prevPage() {
    const currentDotIndex = this.currentDotIndex();
    let triggerDot = currentDotIndex == 0 ? this.dots.length - 1 : currentDotIndex - 1;
    this.dots[triggerDot].click();
  },
  nextPage() {
    const currentDotIndex = this.currentDotIndex();
    let triggerDot = currentDotIndex < this.dots.length - 1 ? +currentDotIndex + 1 : 0;
    this.dots[triggerDot].click();
  },
  currentDotIndex() {
    const dots = this.dots;
    let currentDotIndex = 0;
    for (let i in dots) {
      if (dots[i].classList.contains('active')) {
        currentDotIndex = i;
        break;
      }
    }
    return currentDotIndex;
  }
}
bootstrapElements();

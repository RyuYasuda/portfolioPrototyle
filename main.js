const mainVisual = new Rellax('.main-visual__img',{
    speed: -10,
    center:true
})

class ScrollObserver {
    constructor(targets, options, callback) {
      this.targets = document.querySelectorAll(targets);
      this.options = options;
      this.callback = callback;
  
      this.init();
    }

    init() {
      this.targets.forEach((target, index) => { // 全てのターゲットに対してIntersectionObserverを初期化
          const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                  this.callback(entry, index);
              });
          }, this.options);

          observer.observe(target);
      });
  }
  }
  // scrollobserverの記入
  const header = document.querySelector(".header");
  const aboutTitle = document.querySelector(".About__title");
  let aboutObserver = null; // 新しくIntersectionObserverを保持する変数を追加

new ScrollObserver(".header-trigger", { threshold: 0 }, (entry) => {
    if (!entry.isIntersecting) {
        header.classList.add("triggered");
    } else {
        header.classList.remove("triggered");
    }
});

new ScrollObserver(".About", { threshold: 0 }, (entry) => {
    if (entry.isIntersecting) {
        aboutTitle.classList.add("inview");
    } else {
        // aboutObserver.unobserve(); // ScrollObserverのunobserveメソッドを呼び出す
    }
});

const DELAY_INCREMENT = 200; // 適切な値に設定します


new ScrollObserver(".About", { threshold: 0 }, (entry, index) => {
    if (entry.isIntersecting) {
        const children = entry.target.querySelectorAll('.About__me');
        children.forEach((child, i) => {
            setTimeout(() => {
                child.classList.add('inview');
            }, i * DELAY_INCREMENT + 500);
        });
    }
});
let aboutMeElements = document.querySelectorAll('.About__me');
console.log(aboutMeElements);
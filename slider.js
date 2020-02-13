// ======================== SLIDER ============================================

class Slider {
    constructor(idSlider) {
        // SLIDER INIT
        this.container = document.getElementById(idSlider);
        this.slides = this.container.querySelectorAll(".Slide");
        this.index = 0;
        this.display();
        this.play();
        // EVENT CLICK SLIDER
        this.container.querySelector(".play").addEventListener("click", () => {
          this.buttonPauseDisplay();
          if (this.intervalId == null) this.play();
        })
        this.container.querySelector(".pause").addEventListener("click", () => {
            this.pause();
        })
        this.container.querySelector(".next").addEventListener("click", () => {
          this.next();
        })
        this.container.querySelector(".previous").addEventListener("click", () => {
          this.previous();
        })
        // TOUCHES EVENT
        window.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "ArrowRight":
                    this.next();
                    break;
                case "ArrowLeft":
                    this.previous();
                    break;
                case " ":
                    if (this.intervalId == null)
                        this.play()
                    else {
                        this.pause();
                    }
                    break;
            }
        });
    }
    // CREATION OF ITERATOR INDEX
    display() {
      for (var i = 0; i < this.slides.length; i++) {
        this.slides[i].style.display = "none";
      };
      this.slides[this.index].style.display = "flex";
    }
    // INCREMENT INDEX
    next() {
      this.index++;
      if (this.index >= this.slides.length) {
        this.index = 0
      };
      this.display()
    }
    // DECREMENT INDEX
    previous() {
      this.index--;
      if (this.index < 0) {
        this.index = this.slides.length - 1
      };
      this.display()
    }
    // NEXT EVERY 5sec WHIT CREATION OF INTERVAL
    play() {
        this.intervalId = setInterval(() => {
            this.next()
        }, 5000);
    }
    // STOP INTERVAL
    pause() {
        clearInterval(this.intervalId)
        this.intervalId = null;
        document.getElementById('pause').style.display = 'none';
        document.getElementById('play').style.display = 'block';
    }
    // DISPLAY BUTTON PAUSE
    buttonPauseDisplay(){
      document.getElementById('play').style.display = 'none';
      document.getElementById('pause').style.display = 'block';
    }
};

let slider = new Slider("SliderBox");

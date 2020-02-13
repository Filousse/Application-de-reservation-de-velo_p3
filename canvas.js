//========== CANVAS= DRAWNING PANEL ===========================================

class Canvas {
    constructor(idCanvas) {
        // CANVA INIT
        this.canvas = document.getElementById(idCanvas);
        this.ctx = this.canvas.getContext('2d');
        this.radius = 2;
        this.ctx.lineWidth = this.radius * 2;
        this.dragging = false;
        this.drawn = false;
        // CLEAR BUTTON EVENT ON CLICK
        this.clear = document.getElementById("Clear");
        this.clear.addEventListener('click', () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        });
        // EVENT WHEN CLICK IT'S PUSHING
        this.canvas.addEventListener('mousedown', (e) => {
            this.dragging = true;
            this.drawing(e);
        });
        // EVENT WHEN CLICK MOUVE
        this.canvas.addEventListener('mousemove', (e) => {
            this.drawing(e)
        });
        // EVENT WHEN CLICK STOP BE PUSHING
        this.canvas.addEventListener('mouseup', (e) => {
            this.dragging = false;
            this.ctx.beginPath(e);
        });
        // EVENT WHEN THE SCREN IT'S AFFECTED
        this.canvas.addEventListener('touchstart', (e) => {
            this.dragging = true;
            this.drawing(e);
        });
        // EVENT WHEN THE SCREN CONTINU TO BE AFFECTED AND MOVING
        this.canvas.addEventListener('touchmove', (e) => {
            this.drawing(e);
            e.preventDefault();
        });
        // EVENT WHEN THE SCREEN FINISHED TO BE AFFECTED
        this.canvas.addEventListener('touchend', (e) => {
            this.dragging = false;
            this.ctx.beginPath(e);
        });
    }
    // CHECK IF IT'S SIGN BEFORE CLICK EVENT IN RESERVATION CLASS
    checkingSignature() {
        return this.drawn;
    }

    drawing(e) {
        // DRAWING INIT
        let rect = this.canvas.getBoundingClientRect();
        // COODONATE CLICK INIT
        let touchOffsetX;
        let touchOffsetY;
        if (e.touches != undefined) {
            touchOffsetX = e.touches[0].clientX;
            touchOffsetY = e.touches[0].clientY;
        } else {
            touchOffsetX = e.offsetX;
            touchOffsetY = e.offsetY;
        };
        // CREATE THE WRITTING PATH
        if (this.dragging) {
            this.drawn = true;
            // CREATE LIGNE WHIT X AND Y MOUSE POSITION
            this.ctx.lineTo(touchOffsetX, touchOffsetY);
            this.ctx.stroke();
             // CREATE PATH
            this.ctx.beginPath();
            // CREATE CIRCLE
            this.ctx.arc(touchOffsetX, touchOffsetY, this.radius, 0, Math.PI * 2);
            // PAINT CIRCLE
            this.ctx.fill();
            // CREATE NEW PATH
            this.ctx.beginPath();
            // CREATE LIGNE
            this.ctx.moveTo(touchOffsetX, touchOffsetY);
        }
    }
}
let canvas = new Canvas("Canvas");

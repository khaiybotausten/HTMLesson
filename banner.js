// Function to show an alert
function showAlert() {
    alert("Welcome to the coding journey! Let's get started!");
}
// Get the canvas element
const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Firework class
class Firework {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.speed = Math.random() * 3 + 1;
        this.angle = Math.random() * Math.PI * 2;
        this.exploded = false;
        this.particles = [];
    }

    update() {
        if (!this.exploded) {
            this.x += Math.cos(this.angle) * this.speed;
            this.y += Math.sin

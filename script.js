/**
 * Based on https://eperezcosano.github.io/hex-grid/.
 */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const a = 2 * Math.PI / 6;
const circleRadius = 50;

function init() {
    drawGrid(canvas.width, canvas.height);
}

init();

function drawGrid(width, height) {
    for (let y = circleRadius; y + circleRadius * Math.sin(a) < height; y += circleRadius * Math.sin(a)) {
        for (let x = circleRadius, j = 0; x + circleRadius * (1 + Math.cos(a)) < width; x += circleRadius * (1 + Math.cos(a)), y += (-1) ** j++ * circleRadius * Math.sin(a)) {
            drawHexagon(x, y);
        }
    }
}

function drawHexagon(x, y) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        ctx.lineTo(x + circleRadius * Math.cos(a * i), y + circleRadius * Math.sin(a * i));
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = 'red';
    ctx.fill();
}

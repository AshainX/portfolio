// ripple.js
const canvas = document.getElementById('ripple-canvas');
const ctx = canvas.getContext('2d');

let ripples = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function addRipple(x, y) {
  ripples.push({ x, y, radius: 0, opacity: 1 });
}

function drawRipples() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ripples.forEach((ripple, i) => {
    ripple.radius += 1.5;
    ripple.opacity -= 0.01;
    if (ripple.opacity <= 0) ripples.splice(i, 1);

    ctx.beginPath();
    ctx.arc(ripple.x, ripple.y, ripple.radius, 0, 2 * Math.PI, false);
    ctx.strokeStyle = `rgba(255, 255, 255, ${ripple.opacity})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });
}

function animate() {
  drawRipples();
  requestAnimationFrame(animate);
}
animate();

setInterval(() => {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  addRipple(x, y);
}, 500);

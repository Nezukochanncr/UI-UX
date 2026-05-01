// Matrix Effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const letters = '01';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];
for (let x = 0; x < columns; x++) drops[x] = 1;

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0F0';
  ctx.font = fontSize + 'px monospace';
  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(draw, 35);

// Simulated Terminal Messages
const terminal = document.getElementById("terminal");
const messages = [
  "Your account has been hacked.",
  "[ACCESS GRANTED]",
  "Decrypting password..",
  "Bypassing firewall..",
  "Uploading payload..",
  "Trace detected! Masking IP."
];
let i = 0;

function typeMessage(msg, callback) {
  let j = 0;
  const interval = setInterval(() => {
    terminal.innerHTML += msg[j];
    j++;
    if (j >= msg.length) {
      clearInterval(interval);
      terminal.innerHTML += "<br>";
      setTimeout(callback, 500);
    }
  }, 50);
}

function nextMessage() {
  if (i < messages.length) {
    typeMessage(messages[i], nextMessage);
    i++;
  }
}

nextMessage();

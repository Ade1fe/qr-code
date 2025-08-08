
const videoPageURL = "https://video-qr-demo.netlify.app/watch.html"; // Replace with your actual Netlify URL

new QRCode(document.getElementById("qrcode"), {
  text: videoPageURL,
  width: 256,
  height: 256,
  colorDark: "#000000",       // Blue
  colorLight: "#F0F0F0",      // Light background
  correctLevel: QRCode.CorrectLevel.H
});

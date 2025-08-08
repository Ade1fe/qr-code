
const videoPageURL = "https://video-qr-demo.netlify.app/watch.html"; 

new QRCode(document.getElementById("qrcode"), {
  text: videoPageURL,
  width: 256,
  height: 256,
  colorDark: "#000000",       
  colorLight: "#F0F0F0",      // Light background
  correctLevel: QRCode.CorrectLevel.H
});

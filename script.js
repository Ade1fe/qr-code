// Link to the video in your project folder
// const videoURL = window.location.origin + '/videos/my-video.mp4';
const videoPageURL = "https://video-qr-demo.netlify.app/watch.html"; // Replace with your actual Netlify URL


new QRCode(document.getElementById("qrcode"), {
  text: videoPageURL,
  width: 256,
  height: 256,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});

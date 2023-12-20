let img = document.getElementById("img");
let inputji = document.getElementById("inputji");

function generateQR() {
  img.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    inputji.value;
  img.style.visibility = "visible";
}
function generateQRcode() {
  const linkInput = document.querySelector("input");
  const QrCode = document.querySelector("#qr-code");
  const link = linkInput.value.trim(); //removes any white spaces
  if (link !== "") {
    let qrCode = new QRCode(document.querySelector(".qr-box"), {
      text: link,
      width: 128,
      height: 128,
    });
    qrCodeImage.src = qrCode.toDataURL();
    qrCodeImage.style.display = "block";
  } else {
    alert("Enter a Valid Link");
  }
}
function downloadQRCode() {
  let QrCode = document.querySelector(".qr-box canvas");
  var link = document.createElement("a");
  var dataUrl = QrCode.toDataURL("image/png"); //this converts image content to data url
  // Sets the data URL as the href attribute
  link.href = dataUrl;
  // Set the download attribute with a filename (e.g., "qrcode.png")
  link.download = "qrcode.png";

  // Programmatically trigger a click on the link element
  link.click();
}


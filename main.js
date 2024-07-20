
document.addEventListener("DOMContentLoaded", function () {
    let pieceCanvas = document.getElementById("next-piece");
    let pieceContext = pieceCanvas.getContext("2d");

    let rectX = 20; 
    let rectY = 20; 
    let rectWidth = 50;
    let rectHeight = 20;
    let rectSpeed = 2; 

    function drawRectangle() {
        pieceContext.clearRect(0, 0, pieceCanvas.width, pieceCanvas.height);
        pieceContext.fillStyle = "red";
        pieceContext.strokeRect(rectX, rectY, rectWidth, rectHeight);
        pieceContext.fillRect(rectX, rectY, rectWidth, rectHeight);
        pieceContext.beginPath();
        pieceContext.moveTo(rectX + 15, rectY);
        pieceContext.lineTo(rectX + 15, rectY + rectHeight);
        pieceContext.moveTo(rectX + 31, rectY);
        pieceContext.lineTo(rectX + 31, rectY + rectHeight);
        pieceContext.stroke();

        rectY += rectSpeed;

        if (rectY + rectHeight >= pieceCanvas.height) {
            rectY = pieceCanvas.height - rectHeight;
            return;
        }

        requestAnimationFrame(drawRectangle);
    }

    drawRectangle();
});

function handleStart() {
  alert("clicked on Start");
}

function handleRestart() {
  alert("clicked on Restart");
}

function handlePause() {
  alert("clicked on pause");
}

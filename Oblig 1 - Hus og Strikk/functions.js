function FillPolygon (xCoords, yCoords){
    ctx.beginPath();
    ctx.moveTo(xCoords[0], yCoords[0]);
    for (let i = 1; i < xCoords.length; i++){
        ctx.lineTo(xCoords[i], yCoords[i]);
    }
    ctx.fill();
}
function ConnectDots (xCoords, yCoords){
    ctx.beginPath();
    ctx.moveTo(xCoords[0], yCoords[0]);
    for (let i = 1; i < xCoords.length; i++){
        ctx.lineTo(xCoords[i], yCoords[i]);
    }
    ctx.stroke();
}
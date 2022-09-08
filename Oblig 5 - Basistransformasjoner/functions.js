function Point(x, y) {
    this.x = x,
    this.y = y
};
function FillPolygon (xCoords, yCoords){
    ctx.beginPath();
    ctx.moveTo(xCoords[0], yCoords[0]);
    for (let i = 1; i < xCoords.length; i++){
        ctx.lineTo(xCoords[i], yCoords[i]);
    }
    ctx.closePath();
    ctx.fill();
}
function ConnectPolygon (points){
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++){
        ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.closePath();
    ctx.stroke();
}
function ConnectDots (xCoords, yCoords){
    ctx.beginPath();
    ctx.moveTo(xCoords[0], yCoords[0]);
    for (let i = 1; i < xCoords.length; i++){
        ctx.lineTo(xCoords[i], yCoords[i]);
    }
    ctx.closePath();
    ctx.stroke();
}
function drawCircle(point, circleRadius){
    ctx.beginPath();
    ctx.arc(point.x, point.y, circleRadius, 0, 2*Math.PI);
    ctx.stroke();
}

function totalDiff(point1, point2){
    return Math.abs(point2.x - point1.x) + Math.abs(point2.y - point1.y);
}
function diff(point1, point2){
    return [point2.x - point1.x, point2.y - point1.y];
}
function vectorLength(point){
    return Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
}


function getCenterPoint(points){
    let xSum = 0;
    let ySum = 0;
    points.forEach(point => {
        xSum += point.x
        ySum += point.y
    });
    return new Point(xSum/points.length, ySum/points.length);
}

function findGrabbedPoint(points, point){
    let nearestPoint = points[0];
    let currDiff = totalDiff(nearestPoint, point);
    for (let i = 1; i < points.length; i++){
        if (totalDiff(points[i], point) < currDiff){
            nearestPoint = points[i];
            currDiff = totalDiff(points[i], point);
        }
    }
    return nearestPoint;
}
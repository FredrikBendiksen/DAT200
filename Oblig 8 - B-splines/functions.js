class Point {
    constructor(x, y){
        this.x = x,
        this.y = y
    }
};
function FillPolygon (xCoords, yCoords){
    graphics.beginPath();
    graphics.moveTo(xCoords[0], yCoords[0]);
    for (let i = 1; i < xCoords.length; i++){
        graphics.lineTo(xCoords[i], yCoords[i]);
    }
    graphics.closePath();
    graphics.fill();
}
function ConnectPolygon (points){
    graphics.beginPath();
    graphics.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++){
        graphics.lineTo(points[i].x, points[i].y);
    }
    graphics.closePath();
    graphics.stroke();
}
function ConnectDots (xCoords, yCoords){
    graphics.beginPath();
    graphics.moveTo(xCoords[0], yCoords[0]);
    for (let i = 1; i < xCoords.length; i++){
        graphics.lineTo(xCoords[i], yCoords[i]);
    }
    graphics.stroke();
}
function DrawLine (point1, point2){
    graphics.beginPath();
    graphics.moveTo(point1.x, point1.y);
    graphics.lineTo(point2.x, point2.y);
    graphics.stroke();
}
function drawCircle(point, circleRadius){
    graphics.beginPath();
    graphics.arc(point.x, point.y, circleRadius, 0, 2*Math.PI);
    graphics.stroke();
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
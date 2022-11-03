function drawBezier()
{
    let length = controlPoints.length;
    if (length < 4)
    {
        return;
    }
    let n = 20;
    let j, t;
    let delta = 1.0/n;
    let lastIndex = controlPoints.length -1;

    for (j=0;j<=n;j++)
    {
        t=j*delta;

        x = controlPoints[lastIndex-3].x*(1/6)* Math.pow((1.0-t), 3)
            + controlPoints[lastIndex-2].x*(1/6)*(3*Math.pow(t, 3) - 6 * Math.pow(t, 2) + 4)
            + controlPoints[lastIndex-1].x*(1/6)*(-3*Math.pow(t, 3) + 3 * Math.pow(t, 2) + 3*t + 1)
            + controlPoints[lastIndex].x*(1/6)*Math.pow(t, 3);
        y = controlPoints[lastIndex-3].y*(1/6)* Math.pow((1.0-t), 3)
            + controlPoints[lastIndex-2].y*(1/6)*(3*Math.pow(t, 3) - 6 * Math.pow(t, 2) + 4)
            + controlPoints[lastIndex-1].y*(1/6)*(-3*Math.pow(t, 3) + 3 * Math.pow(t, 2) + 3*t + 1)
            + controlPoints[lastIndex].y*(1/6)*Math.pow(t, 3);

        curvePoints.push(new Point(x, y));
    }
    
    graphics.clearRect(0, 0, canvas.width, canvas.height);
    graphics.strokeStyle = "gray";
    controlPoints.forEach(p => drawCircle(p, circleRadius));
    ConnectDots(controlPoints.map(p => p.x), controlPoints.map(p => p.y));
    graphics.strokeStyle = "black";
    ConnectDots(curvePoints.map(p => p.x), curvePoints.map(p => p.y));
}
function addControlPoint(e)
{
    let curX = e.clientX - canvas.offsetLeft;
    let curY = e.clientY - canvas.offsetTop;
    controlPoints.push(new Point(curX, curY));
    graphics.strokeStyle = "gray";
    drawCircle(controlPoints[controlPoints.length - 1], circleRadius)
    
    if (controlPoints.length > 1 && controlPoints.length < 4){
        DrawLine(controlPoints[controlPoints.length - 2], controlPoints[controlPoints.length - 1]);
    }
    drawBezier();
}
function resetControlPoints()
{
    controlPoints = [];
    curvePoints = [];
    graphics.clearRect(0, 0, canvas.width, canvas.height);
}


let canvas = document.getElementById("graphics");
let graphics = canvas.getContext("2d");
let newSpline = document.getElementById("newSpline");

graphics.fillStyle = "red";
graphics.strokeStyle = "black";
graphics.lineWidth = 1;
let circleRadius = 5;

let controlPoints = [];
let curvePoints = [];

newSpline.addEventListener("click", resetControlPoints);
canvas.addEventListener("click", addControlPoint);
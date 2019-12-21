// document.write("hello");

// var controlPanel = document.getElementById("controlPanel");
// var ctxTop = controlPanel.getContext("2d");
// var canvas = document.getElementById("myCanvas");		
// var ctx = canvas.getContext("2d");

// var clicked = false;
// var startDrawing = false;

// lineList=[]
// var x1 = 0;
// var y1 = 0;
// var x2 = 0;
// var y2 = 0;

// function refreshScreen(){
// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
// }
// refreshScreen();
// rgbaValues = [255,0,0,1]
// ctx.rgbaValues = rgbaValues
// ctx.fillStyle = "rgba("+rgbaValues[0]+","+rgbaValues[1]+","+rgbaValues[2]+","+rgbaValues[3]+")";

// //--------------------------------------------------------------------------------------------------------------------------------------

// function drawLine(a1,b1,a2,b2,spacing,width){
// 	var lineLength = Math.sqrt((a1-a2)*(a1-a2)+(b1-b2)*(b1-b2));
//     for (i=0; i<lineLength/spacing; i++){
// 		increment = (spacing*i)/lineLength
//         ctx.beginPath();
//         //draw a line by lots of small circles
// 		ctx.arc(a1+increment*(a2-a1), b1+increment*(b2-b1), width/2, 0, Math.PI*2);
// 		ctx.fill();
// 		ctx.closePath();
// 	}
// }

// function addLine(a1,b1,a2,b2){
//     lineList.push([[a1,b1],[a2,b2]])
// }

// //pixelCoords takes parameters D (a data array representing an image, as obtained from getImageData)
// //and x (a number less than or equal to the length of that array) 
// //and returns [i,j], the coords of the pixel that that element of the array is referring to, 
// //taking top-left of the relevant image to be (0,0) 
// //(remember the array has 4 bits of data for each pixel, for the rgba values)
// function pixelCoords(x,D){
// 	return [Math.floor((x % (D.width*4))/4), Math.floor(x/(D.width*4))];
// }
// //arrayPosition takes parameters D (as above) and i,j 
// //(co-ordinates of a pixel (taking top left of the relevant image as (0,0))) 
// //and returns the number of the first of the four positions in the array that refer to that pixel
// function arrayPosition(i,j,D){
// 	return ((D.width*4)*j + i*4);
// }

// function sameColour(pixel1Colours,pixel2Colours) {
//     return (
//         pixel1Colours[0]==pixel2Colours[0] && 
//         pixel1Colours[1]==pixel2Colours[1] &&
//         pixel1Colours[2]==pixel2Colours[2]
//     );
// }


// //--------------------------------------------------------------------------------------------------------------------------------------

// function over(item,x,y) {
// 	var relativeX = x - controlPanel.offsetLeft;	
// 	var relativeY = y - controlPanel.offsetTop;
// 	return(relativeX > item.left && relativeX < item.right && relativeY > item.top && relativeY < item.bottom);
// }

// document.addEventListener("mousedown", mouseDownHandler, false);
// document.addEventListener("mouseup", mouseUpHandler, false);
// document.addEventListener("mousemove", mouseMoveHandler, false);
// myCanvas.addEventListener("mouseover", mouseOverHandler,false);
// myCanvas.addEventListener("mouseout", mouseOutHandler,false);
// document.addEventListener("keydown", keyDownHandler, false);


// function mouseOverHandler(e) {
//    overCanvas = true;
// }
// function mouseOutHandler(e) {
//    overCanvas = false;
// }

// function mouseMoveHandler(e) {
//     x2 = e.clientX - canvas.offsetLeft;
// 	y2 = e.clientY - canvas.offsetTop; 
// 	if (clicked){
//         drawLine(x1,y1,x2,y2,1,10);
//         addLine(x1,y1,x2,y2);
// 	}
// 	x1 = x2;
// 	y1 = y2;
// }

// function mouseDownHandler(e){
// 	if(overCanvas){
// 		clicked = true;
// 		if(!startDrawing){
// 			startDrawing = true;
// 			x1 = e.clientX - canvas.offsetLeft;
// 			y1 = e.clientY - canvas.offsetTop;
// 		}
//     }    
// }

// function mouseUpHandler(e) {
// 	clicked = false;
// 	startDrawing = false;
// }


// function keyDownHandler(e) {
// 	if(e.keyCode == 8) {							//backspace
// 		for (i=0; i<lineList.length; i++){
//             document.write("<br/>");
//             document.write("(")
//             document.write(lineList[i][0][0]);
//             document.write(", ")
//             document.write(lineList[i][0][1]);
//             document.write(") (")
//             document.write(lineList[i][1][0]);
//             document.write(", ")
//             document.write(lineList[i][1][1]);
//             document.write(")")
//             document.write("<br/>");
//         }
//     }
//     if(e.keyCode == 81) {                           //q
//         ctx.fillstyle = "Black"
//         ctx.beginPath();
//         ctx.moveTo(0, 0);
//         ctx.lineTo(300, 150);
//         ctx.stroke();
//         ctx.closePath();
//         var start = [0,0];
//         var end = [300,150];
//         var vec = [end[0]-start[0], end[1]-start[1]];
//         var linelength = Math.sqrt(vec[0]*vec[0] + vec[1]*vec[1]);
//         spacing = 5;
//         vec = [vec[0]/spacing, vec[1]/spacing];
//         var current = start;
//         d = ctx.getImageData(0,0,canvas.width,canvas.height);
//         var intersection = false
//         for(i=0; i<linelength/spacing; i++){
//             current = [current[0]+vec[0], current[1]+vec[1]];
//             if (d.data[arrayPosition(current[0], current[1], d)]){
//                intersection = true
//                break
//             }
//         }
//         if(intersection){
//             ctx.beginPath();
//             ctx.arc(600, 550, 50, 0, Math.PI*2);
//             ctx.fill();
//             ctx.closePath();
//         }
//         else {
//             ctx.beginPath();
//             ctx.arc(600, 50, 50, 0, Math.PI*2);
//             ctx.fill();
//             ctx.closePath();
//         }
//     }
// }

import {print, newLine} from './debugging.mjs';
import {vector} from './vector.mjs';
import {matrix} from './matrix.mjs';
import {rotation} from './rotation.mjs';
import {line} from './line.mjs';

var pos1 = new vector(1,1);
var pos2 = new vector(2,2);
var line1 = new line(pos1, pos2);

print(line1.length());

var mat1 = new matrix(1,2,1,1);
var pos3 = mat1.inverse().vMult(pos1);

mat1.print()

var rot = new rotation(4);

line1.print()
pos3.print()
print(pos3.x);
print(pos3.y);
print(mat1.det());

rot.mMult(mat1).print()

newLine();
newLine();

line1.print();
line1.rotate(-Math.PI/2).print();
function drawLine(a1,b1,a2,b2,spacing,width){
	var lineLength = Math.sqrt((a1-a2)*(a1-a2)+(b1-b2)*(b1-b2));
    for (i=0; i<lineLength/spacing; i++){
		increment = (spacing*i)/lineLength
        ctx.beginPath();
        //draw a line by lots of small circles
		ctx.arc(a1+increment*(a2-a1), b1+increment*(b2-b1), width/2, 0, Math.PI*2);
		ctx.fill();
		ctx.closePath();
	}
}
/*Acordion Animation*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

var colors=['skyblue','gray','orange'];
var values=[90,6,47];
var labels=['Voluntary','Robot','Mandatory'];

dmbChart(150,150,125,25,values,colors,labels,0);

function dmbChart(cx,cy,radius,arcwidth,values,colors,labels,selectedValue){
    var tot=0;
    var accum=0;
    var PI=Math.PI;
    var PI2=PI*2;
    var offset=-PI/2;
    ctx.lineWidth=arcwidth;
    for(var i=0;i<values.length;i++){tot+=values[i];}
    for(var i=0;i<values.length;i++){
        ctx.beginPath();
        ctx.arc(cx,cy,radius,
            offset+PI2*(accum/tot),
            offset+PI2*((accum+values[i])/tot)
        );
        ctx.strokeStyle=colors[i];
        ctx.stroke();
        accum+=values[i];
    }
    var innerRadius=radius-arcwidth-3;
    ctx.beginPath();
    ctx.arc(cx,cy,innerRadius,0,PI2);
    ctx.fillStyle=colors[selectedValue];
    ctx.fill();
    ctx.textAlign='center';
    ctx.textBaseline='bottom';
    ctx.fillStyle='white';
    ctx.font=(innerRadius)+'px verdana';
    ctx.fillText(values[selectedValue],cx,cy+innerRadius*.9);
    ctx.font=(innerRadius/4)+'px verdana';
    ctx.fillText(labels[selectedValue],cx,cy-innerRadius*.25);
}

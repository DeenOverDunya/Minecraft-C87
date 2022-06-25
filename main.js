var canvas=new fabric.Canvas('myCanvas');
block_imgwidth=30;
block_imgheight=30;
player_x=10;
player_y=10;


function player_update()
{
fabric.Image.fromURL("player.png",function(Img)
{
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object);

});
}


function new_image(get_image)
{
fabric.Image.fromURL(get_image,function(Img)
{
block_img_object=Img;
block_img_object.scaleToWidth(block_imgwidth);
block_img_object.scaleToHeight(block_imgheight);
block_img_object.set({
top:player_y,
top:player_x
});
canvas.add(block_img_object);

}

);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed);
if(e.shiftKey==true && keyPressed=='80')
{
console.log("P And Shift Pressed Together!");
block_imgwidth=block_imgwidth+10;
block_imgheight=block_imgheight+10;
document.getElementById("currentwidth").innerHTML=block_imgwidth;
document.getElementById("currentheight").innerHTML=block_imgheight;
}

if (e.shiftKey==true && keyPressed=='77')
{
console.log("M And Shift Pressed Together!");
block_imgwidth=block_imgwidth-10;
block_imgheight=block_imgheight-10;
document.getElementById("currentwidth").innerHTML=block_imgwidth;
document.getElementById("currentheight").innerHTML=block_imgheight;
}

if(keyPressed=='38')
{
up();
console.log("up");
}

if(keyPressed=='40')
{
down();
console.log("down");
}

if (keyPressed=='37')
{
left();
console.log("left");
}

if(keyPressed=='39')
{
right();
console.log("right");
}

if (keyPressed=='87')
{
console.log("W");
new_image('wall.jpg');
}

if (keyPressed='84')
{
console.log("T");
new_image('trunk.jpg');
}
}

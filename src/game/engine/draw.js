import {Reference} from "./class/World.js"
function draw(game){
    //clear rect
    let ctx = game.ctx
    ctx.clearRect(0,0,game.canvas.width,game.canvas.height)
    let cam = game.camera
    game.world.iterate((building,x,y)=>{
            x = x*game.tileSize;//convert cords to px
            y = y*game.tileSize;
        let w = building.w*game.tileSize;
        let h = building.h*game.tileSize;
        //check if it's in the camera
        /* console.log(building) */
        if(building instanceof Reference)return;
        if(
            (
            (y<cam.y)             ||
            (x<cam.x)             ||
            (y>(cam.h+cam.y))     ||
            (x>(cam.w+cam.x))     
            )&&
            (
            ((h+y)<cam.y)         ||
            ((w+x)<cam.x)         ||
            ((h+y)>(cam.h+cam.y)) ||
            ((w+x)>(cam.w+cam.x))
            )
         )return;
         x -= cam.x
         y -= cam.y
         //draw building
         ctx.beginPath();
         if(!building.sprite){
            ctx.fillStyle = "black"
            ctx.fillRect(x,y,w,h);
         }else{
            if(!building.image){
                let img = new Image();
                img.src = building.sprite;
                img.onload = ()=>{
                    ctx.drawImage(img,x,y)
                }
            } else {
                ctx.drawImage(building.image,x,y)
            }
         }
         ctx.closePath();

    })
}
export default draw 
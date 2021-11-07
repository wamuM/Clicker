import draw from "./draw.js";
import Game from "./class/Game.js"
/**
 * A function that starts the Game
 * @param {setupFunction} setup The setup Function
 * @param {updateFunction} update The update Function
 */
function start(setup,update = ()=>{}){
    let game = setup();
    if(!game)throw new Error("[Game Engine] >> The setup function didn't return a valid Game");
    var clientX = 0;
    var clientY = 0;
    document.addEventListener("mousemove",(e)=>{
        let can = game.canvas.getBoundingClientRect()
        clientX = e.clientX - can.left
        clientY = e.clientY - can.top
    })
    document.addEventListener("mousedown",(e)=>{
        if(e.button != 0)return
        game.keys.add("mouse")
        //trigger onlcicks
        //todo remove camera offset from cords
        let x = Math.floor((clientX+game.camera.x)/game.tileSize);
        let y = Math.floor((clientY+game.camera.y)/game.tileSize);
        if(game.world.find(x,y)){
           let tile = game.world.find(x,y)
           if(tile.ref)tile = game.world.find(tile.ref.x,tile.ref.y);
           tile._onclick()
           console.log("click")
        }
    })
    document.addEventListener("mouseup",(e)=>{
        game.keys.delete("mouse")
    });
    let lastAT = 0
    function tickLoop(animationTime){
        let dt = (animationTime-lastAT)/(game.fps*1000)
        lastAT = animationTime
        game.clientX = clientX
        game.clientY = clientY
        update(game,dt)
        draw(game)
        requestAnimationFrame(tickLoop)
    }
    requestAnimationFrame(tickLoop)
}

export default start

/**
 * @function setupFunction
 * @returns {Game} if no game is returned it creates a new game
 */
/**
 * @function updateFunction
 * @param {Game} game the game that is being updated
 * @param {Number}dt the delta time of the frame
 */

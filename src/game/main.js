//Game Engine
import start from "./engine/tick.js"
import Game from "./engine/class/Game.js"

//Structures created by us
import buildings from "./buildings/constr.js"

//The canvas where everything is drawn
const canvas = document.getElementById("canvas")
//a set up function
function setup(){
    //that creates a new game with a tile size of 30px linked to the canvas
    let game = new Game(canvas,30);
    ///it places a temple at the cords 10 10 and 2 3
    game.world.place(10,10,new buildings.Temple())
    game.world.place(2,3,new buildings.Temple())
    //it returns the game where everything will be executed
    return game
}
//this is for the logic of the camera scroll
let mouseClickFirstCords = false
let lastMouseCords = false
// this function updates at the end of every game tick
function update(game,dt){
    //keys is a set with all the keys that are being pressed rn
    if(game.keys.has("mouse")){
        //css sugar
        document.body.style.cursor = "grab" 
        //camera scroll logic
        if(!mouseClickFirstCords){
            mouseClickFirstCords = [game.clientX,game.clientY]
        }
        if(lastMouseCords){
            game.camera.x -= game.clientX - lastMouseCords[0]
            game.camera.y -= game.clientY - lastMouseCords[1]
        }
        lastMouseCords = [game.clientX, game.clientY]
    }else{
        document.body.style.cursor = "default" 
        mouseClickFirstCords = false
        lastMouseCords = false
    }
}
//this starts the game
start(setup,update)
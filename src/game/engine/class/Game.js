import {World} from "./World.js"
class Game{
    /**
     * Game constructor
     * @param {HTMLCanvasElement} canvas the canvas in which the game is drawn
     * @param {Number} fps the expected frames per second (used for delta time, requestAnimationFrame will normally ask for the max fps posible each frame)
     */
    constructor(canvas,fps,data,loadzone){
        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d");
        this.tileSize = 25//px
        this.camera = {x:0,y:0,w:canvas.width,h:canvas.height}
        this.fps = fps;
        this.keys = new Set();
        this.loadzone = loadzone
        if(!data){
            this.world = new World();
        }else {
            this.world = data.world
        }
        
    }
    load(data){
        this.world = data.world||new Map();
    }
}

export default Game
class Reference{
    constructor(x,y){
        this.ref = x,y
    }
}
/**
 * An extended map that represents the game Scene
 */
class World extends Map{
    constructor(){
        super()
    }
    /**
     * @param {Number} x the x cord where 
     * @param {Number} y 
     * @param {Object} element 
     * @private
     */
    _AxisSet(x,y,element){
        if(!this.has(x)){
            let map = new Map()
            this.set(x,map)
        }
        this.get(x).set(y,element)
    }
    /**
     * Gets the element at the specifieds cords
     * @param {Number} x the x cord
     * @param {Number} y the y cord
     * @returns The element at that cord or undefined
     */
    find(x,y){
        if(!this.has(x))return undefined;
        return this.get(x).get(y)
    }
    /**
     * Places the element at the specifieds cords
     * @param {Number} x the x cord
     * @param {Number} y the y cord
     * @param {Object} element the placed element
     */
    place(x,y,element){
        this._AxisSet(x,y,element)
        for(let vx=1;vx<=element.w;vx++){
            for(let vy=1;vy<=element.h;vy++){
                this._AxisSet(x+vx,y+vy,new Reference(x,y))
            }
        }
    }
    /**
     * @param {2dCallbackfn} callbackfn the callback
     */
    iterate(callbackfn){
        this.forEach((XedyAxis,x)=>{
            XedyAxis.forEach((element,y)=>{
                callbackfn(element,x,y,this)
            })
        })
    }
    /**
     * @callback 2dCallbackfn
     * @param {Object} element the element
     * @param {Number} x the X cord
     * @param {Number} y the Y cord
     * @param {world} this the world 
     */
}
export {World,Reference}
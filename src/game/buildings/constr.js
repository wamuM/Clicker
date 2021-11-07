class Building {
    constructor(lvl,hp,w,h){
        this.lvl = lvl;
        this.hp = hp;
        this.w = w
        this.h = h
    }
    onclick(handler){
        this._onclick = handler;
    }
}

const buildings = {
    "Temple":class extends Building {
        constructor(lvl,hp){
            super(lvl||0,hp||true,3,3)
            this.sprite = false //"temple"
            this.onclick(()=>alert("Hi"))
        }
    }
};
export default buildings
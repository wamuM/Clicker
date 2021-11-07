const canvas = document.getElementById("canvas")

function resize(){ canvas.height=window.innerHeight; canvas.width=window.innerWidth}
window.addEventListener("resize",resize);
resize();


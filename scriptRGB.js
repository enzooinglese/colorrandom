const btnGenRGB = document.querySelector("#colorRGB-generator")
const color1 = document.querySelector("#colorRGB")


btnGenRGB.addEventListener('click', () => {
    
    //crear color rgb
    function numAzar(){
        const num =  Math.floor(Math.random() * 256);
        return num
    }

    let r = numAzar();
    let g = numAzar();
    let b = numAzar();
    const newColorRgb = "(" + r + "," + g + "," + b + ")";
    
    //mostrar codigo rgb en el dom
    document.getElementById('colorRGB-code').innerHTML = "rgb" + newColorRgb;
    // color1.style.backgroundColor = "rgb" + newColorRgb;

    //mostrar color en el body
    document.body.style.backgroundColor = "rgb" + newColorRgb;

    //pasar de rgb a hexadecimal
    function rgbAHex(r,g,b){
        return("#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
        
    }
    
    let colorHex = rgbAHex(r, g, b);

    //mostrar codigo rgb en el dom
    document.getElementById('colorHEX-code2').innerHTML = colorHex;
}) 
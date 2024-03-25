const btnGenHex = document.querySelector("#color-generator")
const color = document.querySelector("#color")


btnGenHex.addEventListener('click', () => {
    
    //crear color hexadecimal
    const newColor = Math.floor(Math.random() * 16777215).toString(16);
    
    //mostrar codigo hexadecimal en el dom
    document.getElementById('color-code').innerHTML = "#" + newColor;
    //color.style.backgroundColor = "#" + newColor;

    //mostrar color en el body
    document.body.style.backgroundColor = "#" + newColor;

    //pasar de hexadecimal a rgb
    function hexARgb(hex){
        return{
            red: parseInt(hex.substring(0,2), 16),
            green: parseInt(hex.substring(2, 4), 16),
            blue: parseInt(hex.substring(4, 6), 16)
        }
    }
    
    let colorHex = newColor;
    let colorRgb = hexARgb(colorHex);
    //mostrar codigo rgb en el dom
    document.getElementById('colorRgb-code').innerHTML = "rgb" + "(" + colorRgb.red + "," + colorRgb.green + "," + colorRgb.blue + ")";
})




// access
let red = document.querySelector(".red input");
let green = document.querySelector(".green input");
let blue = document.querySelector(".blue input");
// capture value 
let redValue=document.querySelector(".red-all .change")
let greenValue=document.querySelector(".green-all .change")
let blueValue=document.querySelector(".blue-all .change")
// current Result
let rColor=document.querySelector(".red")
let gColor=document.querySelector(".green")
let bColor=document.querySelector(".blue")
// my Result
let mainResult=document.querySelector(".color-result")
let hexResult=document.querySelector(".hex-color")
let rgbResult=document.querySelector(".rgb-color")
// hex result
let HEXRsult=document.querySelector(".hex-color")
// rgb Result
let RGBResult=document.querySelector(".rgb-color")
// to result on hex one
let hex1="00";
let hex2="00";
let hex3="00"
// to result on rgb
let rgb1="00";
let rgb2="00";
let rgb3="00";
red.oninput = (e) => {
    let value=red.value
    redValue.innerHTML=value
    hex1=parseInt(value,10).toString(16);
    rgb1=parseInt(value,10)
    if(hex1==0) hex1="00"
    if(hex2==0) hex2="00"
    if (hex3==0) hex3="00"
    mainResult.style.backgroundColor=`#${hex1}${hex2}${hex3}`
    rColor.style.backgroundColor=`#${hex1}0000`
    HEXRsult.innerHTML=`#${hex1}${hex2}${hex3}`
    RGBResult.innerHTML=`rbg(${rgb1},${rgb2},${rgb3})`
};
green.oninput=e=> {
    let value=green.value
    greenValue.innerHTML=value
    hex2=parseInt(value,10).toString(16)
    if(hex1==0) hex1="00"
    if(hex2==0) hex2="00"
    if (hex3==0) hex3="00"
    mainResult.style.backgroundColor=`#${hex1}${hex2}${hex3}`
    gColor.style.backgroundColor=`#00${hex2}00`;
    HEXRsult.innerHTML=`#${hex1}${hex2}${hex3}`
    rgb2=parseInt(value,10)
    RGBResult.innerHTML=`rbg(${rgb1},${rgb2},${rgb3})`
}
blue.oninput=e=> {
    let value=blue.value
    blueValue.innerHTML=value
    hex3=parseInt(value,10).toString(16)
    if(hex1==0) hex1="00"
    if(hex2==0) hex2="00"
    if (hex3==0) hex3="00"
    mainResult.style.backgroundColor=`#${hex1}${hex2}${hex3}`
    bColor.style.backgroundColor=`#0000${hex3}`
    HEXRsult.innerHTML=`#${hex1}${hex2}${hex3}`
    rgb3=parseInt(value,10)
    RGBResult.innerHTML=`rbg(${rgb1},${rgb2},${rgb3})`
}
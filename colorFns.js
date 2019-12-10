export { tweenColors }

//
// Returns an object with a color in between 2 input colors
//
// The tweended color can be a blend with a fraction of 0 to 1
// with 0 being identical to colorA, and 1 being identical to colorB
// and 0.5 being midway between.
// Input colors are represented as an array [ r, g, b, alpha ] as used in a color rgba(r,g,b,a)
//
// Returned object has properties:
//     .rbga is a color string like "rgba(100,100,100,0.5)"
//     .arr is an array similar to the input color arrays
//
function tweenColors(colorA, colorB, fraction, minOpacity) {

    // improve error reporting here
    if (fraction>1) fraction = 1
    if (fraction<0) fraction = 0
    if (colorA.length!=3 && colorA.length!=4) return null
    if (colorB.length!=3 && colorB.length!=4) return null
    if (colorA.length==3) colorA[3]=1
    if (colorB.length==3) colorB[3]=1

    let colorAB = {}
    colorAB.arr = []
    colorAB.rgba = "rgba("
    for (let i=0;i<4;i++) {
        colorAB.arr[i] = colorA[i]*fraction + colorB[i]*(1-fraction)
        // enforce min opacity constraint if one is defined
        if (minOpacity && i==3) colorAB.arr[i] = Math.max(minOpacity, colorAB.arr[i])
        // construct the .rgba property
        colorAB.rgba += colorAB.arr[i]
        if (i<3) colorAB.rgba += ","
    }
    colorAB.rgba += ")"  // complete the rgba string definition
    colorAB.r = colorAB.arr[0]
    colorAB.g = colorAB.arr[1]
    colorAB.b = colorAB.arr[2]
    colorAB.a = colorAB.arr[3]
            //console.log("colorA, colorB, fraction, colorAB",colorA, colorB, fraction, colorAB)
    return colorAB
}
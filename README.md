# colorFns
Javascript color functions used in projects

## Installation
Clone this repository to the appropriate folder on the local device.  
Import the desired functions into the component where needed.  

  `import { tweenColors } from '../js/colorFns'`

  

### tweenColors(colorA, colorB, fraction, minOpacity)
Returns an object with a color in between 2 input colors.  
Useful in mapping circles where the shade of the color is related to a data value.  The data value can be used to create the `fraction` so that the color morphs as the data changes.

The tweened color can be a blend with a `fraction` of 0 to 1
with 0 being identical to `colorA`, and 1 being identical to `colorB`
and 0.5 being midway between.  
Input colors are represented as an array [ r, g, b, alpha ] as in the order in a color rgba(red, green ,blue, alpha).  
If the 4th element in the array is specified then the `alpha` value is also tweened.  If no alpha value is input, then an alpha of 1 is assumed.  
A minimum alpha level `minOpacity` can also be specified to avoid too faint of a color.

Returned object has the following properties:   

     .rbga a color string like "rgba(100,100,100,0.5)"   
     .arr  an array similar to the input color arrays . 
     .r the red component (0 to 255)   
     .g the green component (0 to 255)   
     .b the blue component (0 to 255)  
     .a the alpha component (0 to 1)

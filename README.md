# colorFns
Javascript color functions used in projects


### tweenColors(colorA, colorB, fraction, minOpacity)
Returns an object with a color in between 2 input colors

The tweened color can be a blend with a `fraction` of 0 to 1
with 0 being identical to `colorA`, and 1 being identical to `colorB`
and 0.5 being midway between.  
Input colors are represented as an array [ r, g, b, alpha ] as in the order in a color rgba(red, green ,blue, alpha).  
If the 4th element in the array is specified then the `alpha` value is also tweened.  But a minimum alpha level `minOpacity` can also be specified to avoid too faint of a color.

Returned object has properties:   

     .rbga is a color string like "rgba(100,100,100,0.5)"   
     .arr  is an array similar to the input color arrays

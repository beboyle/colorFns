# colorFns
Javascript color functions used in projects


### tweenColors(colorA, colorB, fraction, minOpacity)
Returns an object with a color in between 2 input colors

The tweended color can be a blend with a fraction of 0 to 1
with 0 being identical to colorA, and 1 being identical to colorB
and 0.5 being midway between.
Input colors are represented as an array [ r, g, b, alpha ] as used in a color rgba(r,g,b,a)

Returned object has properties:
     .rbga is a color string like "rgba(100,100,100,0.5)"
     .arr is an array similar to the input color arrays

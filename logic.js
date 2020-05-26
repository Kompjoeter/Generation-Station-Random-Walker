//Canvas Variables
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;;
var c;

//Generator Variables
var myPaths;

var cellSize;
var cellSizeRandomize;
var drawingStyle;
var drawingAnimated;

var directionsAmount;
var diagonalOnly;

var walkerAmount;
var steps;

var hue;
var saturation;
var brightness;

var hueRandomize;
var saturationRandomize;
var brightnessRandomize;



function initializeGenerator()
{
    //Reset Generated Paths to 0
    myPaths = new Array();

    //Reset Animation Counters for Drawing Method
    window[drawingStyle].counters = [];
    window[drawingStyle].countersIncr = [];

    //Apply Logic Variables to paths to be initialized.
    for(let i = 0; i < walkerAmount; i++)
    {
        //If cellSize set to Randomize, Randomize (Pet Path);
        if (cellSizeRandomize)
        {
            cellSize = Math.ceil(Math.random() * 4) * 4;
        }

        //Randomize Path Length within Set Range
        let steps = Math.floor(Math.random() * (stepsRange) +10);

        //If Color Value set to Randomize, Randomize (Per Path)
        //Hue (0 - 360)
        if (hueRandomize)
        {
            hue = Math.floor(Math.random() * 360);
        }
        //Saturation (Percentages)
        if (saturationRandomize)
        {
            saturation = Math.floor(Math.random() * 100);
        }
        //Lightness (Percentages)
        if (brightnessRandomize)
        {
            brightness = Math.floor(Math.random() * 100);
        }

        //Set HSL/HSB to be used for next path.
        let color = 'hsl('+hue+','+saturation+'%,'+brightness+'%)';       

        //Create new Path add to myPaths Array for use with 'draw'
        myPaths.push (window[drawingStyle].initialize(cellSize*4,canvasWidth-(cellSize*4),cellSize*4,canvasHeight-(cellSize*4),cellSize,steps,directionsAmount,diagonalOnly,color));
    }

    //If drawingAnimated is checked, loop the 'draw' function.
    if (drawingAnimated)
    {
        loop();
    }

    //Rerun 'draw' after initializing is done
    redraw();
}
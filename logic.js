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
var walkerAmount;

var hue;
var saturation;
var brightness;

var hueRandomize;
var saturationRandomize;
var brightnessRandomize;

var steps;



function initializeGenerator()
{
    myPaths = new Array();

    //Reset Animation Counters for Drawing Method
    window[drawingStyle].counters = [];
    window[drawingStyle].countersIncr = [];

    //Define your initialize variables+functions here:
    for(let i = 0; i < walkerAmount; i++)
    {
        //Hue (0 - 360)
        if (hueRandomize)
        {
            hue = Math.floor(Math.random() * 255);
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

        let color = 'hsl('+hue+','+saturation+'%,'+brightness+'%)';
        
        if (cellSizeRandomize)
        {
            cellSize = Math.ceil(Math.random() * 4) * 4;
        }
        //let cellSize = 4;
        let steps = Math.floor(Math.random() * (stepsMultiplier));
        //let steps = Math.floor(Math.random() * (stepsMultiplier / cellSize) + 10);
        //let steps = 40;        
        myPaths.push (window[drawingStyle].initialize(cellSize*4,canvasWidth-(cellSize*4),cellSize*4,canvasHeight-(cellSize*4),cellSize,steps,4,false,color));
    }

    if (drawingAnimated)
    {
        loop();
    }

    redraw();
}
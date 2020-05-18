//You can adjust the canvas size to your liking, but it's adviced to have it be divisible by 'cellSize'
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;;
//Define amount of paths to be created here:
var myPaths;
var c;

function setup() 
{   
    c = createCanvas(canvasWidth,canvasHeight);
    c.id('canvas');
    c.parent('canvas-holder');

    setLogic();
    initializeDrawMethod();

}

function initializeDrawMethod()
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
        let steps = Math.floor(Math.random() * (stepsMultiplier / cellSize) + 10);
        //let steps = 40;        
        myPaths.push (window[drawingStyle].initialize(cellSize*4,canvasWidth-(cellSize*4),cellSize*4,canvasHeight-(cellSize*4),cellSize,steps,4,false,color));
    }

    if (drawingAnimated)
    {
        loop();
    }

    redraw();
}

function draw()
{   
    clear();
    //Feel free to change the background color:
    background(25);

    //Define your drawing variables+functions here:
    for(let i = 0; i < walkerAmount; i++)
    {
        if (drawingAnimated)
        {   window[drawingStyle].drawAnimate(myPaths[i],i);}
        else
        { window[drawingStyle].drawStatic(myPaths[i],i);}
    }
}

function windowResized()
{
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
    resizeCanvas(canvasWidth,canvasHeight,true);
    initializeDrawMethod();
}
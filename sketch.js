//You can adjust the canvas size to your liking, but it's adviced to have it be divisible by 'cellSize'
const canvasWidth = 1024;
const canvasHeight = 640;
//Define amount of paths to be created here:
const pathsAmount = 50;
var myPaths = new Array();

function setup() 
{    
    createCanvas(canvasWidth,canvasHeight);
    //Define your initialize variables+functions here:
    for(let i = 0; i < pathsAmount; i++)
    {
        //Hue (0 - 360)
        let h = Math.floor(Math.random() * 360);
        //Saturation (Percentages)
        let s = 15;
        //Lightness (Percentages)
        let l = Math.floor(Math.random() * 100) + 25;
        let color = 'hsl('+h+','+s+'%,'+l+'%)';
        //let color = Math.floor(Math.random() * 255) + 55;
        let cellSize = Math.ceil(Math.random() * 4) * 4;
        let steps = Math.floor(Math.random() * (4000 / cellSize) + 10);
        
        myPaths.push (Metro.initialize(cellSize*4,canvasWidth-(cellSize*4),cellSize*4,canvasHeight-(cellSize*4),cellSize,steps,4,false,color));
    }
}

function draw()
{
    //Feel free to change the background color:
    background(35);

    //Define your drawing variables+functions here:
    for(let i = 0; i < pathsAmount; i++)
    {
        console.log(myPaths[i].color);
        Metro.drawAnimate(i,myPaths[i].color);
    }
}
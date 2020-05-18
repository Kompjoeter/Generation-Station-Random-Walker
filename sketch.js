

function setup() 
{   
    c = createCanvas(canvasWidth,canvasHeight);
    c.id('canvas');
    c.parent('canvas-holder');

    setLogic();
    initializeGenerator();

}



function draw()
{   
    clear();
    //Feel free to change the background color
    background(25);

    //Draw Generator Output to Canvas, either Animated or Static
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
    //Reinitialize Variables on Window Resize
    initializeGenerator();
}
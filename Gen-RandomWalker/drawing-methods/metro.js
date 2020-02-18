//Call this function in 'sketch.js > setup()'
function metroInitialize(width, height, cellSize, steps, dirAmount, color)
{
    //Create new path and add it to the end of myPaths[]
    let path = new Path(width, height, cellSize, steps, dirAmount, color);

    //Set Origin Coordinates for path
    let goal = new Array(2);
    path.path[0][0] = path.gridWidth / 2;
    path.path[0][1] = path.gridHeight / 2;

    //Generate a path for X amount of steps
    for(let i = 0; i < path.steps-1; i++)
    {
        goal = getGoal(1,path.gridWidth-1,1,path.gridHeight-1,path.dirAmount,path.path[i][0],path.path[i][1]);
        path.path[i+1][0] = goal[0];
        path.path[i+1][1] = goal[1];
    }
    return path;
}

//Call this function in 'sketch.js > draw()'
function metroDrawStatic(path,color)
{
    let p = path;
    
    //Draw current path(p) fully
    for(let i = 0; i < myPaths[p].steps - 1; i++)
    {
        noFill();
        stroke(color);
        circle(myPaths[p].path[i][0]*myPaths[p].cellSize,myPaths[p].path[i][1]*myPaths[p].cellSize, myPaths[p].cellSize / 4);
    }
    //Run 'sketch.js > draw()' once
    noLoop();
}


//Call this "function" in 'sketch.js > draw()'
let metroDrawAnimate = (function() 
{   
    //Fill an array with a counter and counterIncrement for each path
    let metroCounters = new Array(pathsAmount)
    for(let i = 0; i < pathsAmount; i++)
    {
        metroCounters[i] = new Array(2);
        //Counter
        metroCounters[i][0] = 0;
        //Counter Increment
        metroCounters[i][1] = 1;
    }
    
    return function(path, color) 
    {
        let p = path;

        //Draw part of path from origin[0] to counter value
        for(let i = 0; i < metroCounters[p][0]; i++)
        {
            noFill();
            stroke(color);
            circle(myPaths[p].path[i][0]*myPaths[p].cellSize,myPaths[p].path[i][1]*myPaths[p].cellSize, myPaths[p].cellSize / 4);
        }

        //If path is not-drawn
        if (metroCounters[p][0] <= 0) 
        {
            //Set new color to current path
            myPaths[p].color = Math.floor(Math.random() * 255) + 55;

            //Regenerate current path (Create new coordinates with same stepSize)
            for(let i = 0; i < myPaths[p].steps-1; i++)
            {
                goal = getGoal(1,myPaths[p].gridWidth-1,1,myPaths[p].gridHeight-1,myPaths[p].dirAmount,myPaths[p].path[i][0],myPaths[p].path[i][1]);
                myPaths[p].path[i+1][0] = goal[0];
                myPaths[p].path[i+1][1] = goal[1];
            }

            //Set Increment of part-of-path counter to +1
            metroCounters[p][1] = 1;
        }
        //If path is fully drawn
        else if (metroCounters[p][0] >= myPaths[p].steps -1)
        {
            //Set Increment of part-of-path counter to -1
            metroCounters[p][1] = -1;
        }
        
        //Increase/decrease part-of-path to draw (Increase/decrease by steps)
        metroCounters[p][0] += metroCounters[p][1];

    };
})();

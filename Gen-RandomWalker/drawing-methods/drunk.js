//Call this function in 'sketch.js > setup'
function drunkInitialize(width, height, cellSize, steps, dirAmount, color)
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
function drunkDrawStatic(path,color)
{
    let p = path;

    //Draw current path(p) fully
    for(let i = 0; i < myPaths[p].steps - 1; i++)
    {
        stroke(color);
        line(myPaths[p].path[i][0]*myPaths[p].cellSize,myPaths[p].path[i][1]*myPaths[p].cellSize,myPaths[p].path[i+1][0]*myPaths[p].cellSize,myPaths[p].path[i+1][1]*myPaths[p].cellSize);
    }
    //Run 'sketch.js > draw()' once
    noLoop();
}

//Call this "function" in sketch.js
let drunkDrawAnimate = (function() 
{   
    //Fill an array with a counter for each path
    let metroCounters = new Array(pathsAmount)
    for(let i = 0; i < pathsAmount; i++)
    {
        metroCounters[i] = 0;
    }
    
    return function(path, color) 
    {
        let p = path;
        
        //Draw part of path from origin[0] to counter value
        for(let i = 0; i < metroCounters[p]; i++)
        {
            stroke(color);
            line(myPaths[p].path[i][0]*myPaths[p].cellSize,myPaths[p].path[i][1]*myPaths[p].cellSize,myPaths[p].path[i+1][0]*myPaths[p].cellSize,myPaths[p].path[i+1][1]*myPaths[p].cellSize);
        }

        //If path is not fully drawn
        if (metroCounters[p] < myPaths[p].steps -1) 
        {
            metroCounters[p]++;
        }
    };
})();


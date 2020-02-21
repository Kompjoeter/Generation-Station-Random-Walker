var Snake =
{
    //Call this function in 'sketch.js > setup'
    initialize: function(boundsMinX, boundsMaxX, boundsMinY, boundsMaxY, cellSize, steps, dirAmount, color)
    {
        //Create new path and add it to the end of myPaths[]
        let path = new Path(boundsMinX, boundsMaxX, boundsMinY, boundsMaxY, cellSize, steps, dirAmount, color);

        //Set Origin Coordinates for path
        path.path[0][0] = Math.floor(Math.random() * (path.boundsMaxX - path.boundsMinX)) + path.boundsMinX;
        path.path[0][1] = Math.floor(Math.random() * (path.boundsMaxY - path.boundsMinY)) + path.boundsMinY;

        //Generate a path for X amount of steps
        let goal = new Array(2);
        for(let i = 0; i < path.steps-1; i++)
        {
        goal = Walker.getGoal(path.boundsMinX,path.boundsMaxX,path.boundsMinY,path.boundsMaxY,path.dirAmount,path.path[i][0],path.path[i][1],path.cellSize);
            path.path[i+1][0] = goal[0];
            path.path[i+1][1] = goal[1];
        }
        return path;
    },

    //Call this function in 'sketch.js > draw()'
    drawStatic: function(path,color)
    {
        let p = path;

        //Draw current path(p) fully
        for(let i = 0; i < myPaths[p].steps - 1; i++)
        {
            stroke(color);  
            strokeWeight(myPaths[p].cellSize/4);
            noFill();
            square(myPaths[p].path[i][0],myPaths[p].path[i][1],myPaths[p].cellSize);
        }
        //Run 'sketch.js > draw()' once
        noLoop();
    },

    //Call this function in 'sketch.js > draw()'
    drawAnimate: function(path, color) 
    {
        let p = path;

        //Draw current path(p) fully
        for(let i = 0; i < myPaths[p].steps -1; i++)
        {
            stroke(color);
            strokeWeight(myPaths[p].cellSize/4);
            noFill();
            square(myPaths[p].path[i][0],myPaths[p].path[i][1],myPaths[p].cellSize/4);
        }

        //Set coordinates of Array index to coordinates of upper Array index
        for(let i = 0; i < myPaths[p].steps -1; i++)
        {
            myPaths[p].path[i][0] = myPaths[p].path[i+1][0];
            myPaths[p].path[i][1] = myPaths[p].path[i+1][1];
        }
        
        //Generate new goal/coordinates for last Array index AKA 'head-of-snake'
        let goal = Walker.getGoal(myPaths[p].boundsMinX,myPaths[p].boundsMaxX,myPaths[p].boundsMinY,myPaths[p].boundsMaxY,myPaths[p].dirAmount,myPaths[p].path[myPaths[p].steps-1][0],myPaths[p].path[myPaths[p].steps-1][1],myPaths[p].cellSize);        

        myPaths[p].path[myPaths[p].steps-1][0] = goal[0];
        myPaths[p].path[myPaths[p].steps-1][1] = goal[1];
    },
    drawBounds: function(path, color)
    {
        stroke(color);
        noFill();
        rect(myPaths[path].boundsMinX,myPaths[path].boundsMinY,myPaths[path].boundsMaxX-myPaths[path].boundsMinX,myPaths[path].boundsMaxY-myPaths[path].boundsMinY);
    }
}
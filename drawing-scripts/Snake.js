var Snake =
{
    //Call this function in 'sketch.js > setup'
    initialize: function(width, height, cellSize, steps, dirAmount, color)
    {
       //Create new path and add it to the end of myPaths[]
       let path = new Path(width, height, cellSize, steps, dirAmount, color);

       //Set Origin Coordinates for path
       let goal = new Array(2);
       path.path[0][0] = Math.floor(Math.random() * (path.gridWidth));
       path.path[0][1] = Math.floor(Math.random() * (path.gridHeight));

       //Generate a path for X amount of steps
       for(let i = 0; i < path.steps-1; i++)
       {
           goal = Walker.getGoal(1,path.gridWidth-1,1,path.gridHeight-1,path.dirAmount,path.path[i][0],path.path[i][1]);
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
            square(myPaths[p].path[i][0]*myPaths[p].cellSize,myPaths[p].path[i][1]*myPaths[p].cellSize,myPaths[p].cellSize);
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
            //square(myPaths[p].path[i][0]*myPaths[p].cellSize,myPaths[p].path[i][1]*myPaths[p].cellSize,myPaths[p].cellSize,myPaths[p].cellSize/4);
            line(myPaths[p].path[i][0]*myPaths[p].cellSize,myPaths[p].path[i][1]*myPaths[p].cellSize,myPaths[p].path[i+1][0]*myPaths[p].cellSize,myPaths[p].path[i+1][1]*myPaths[p].cellSize);
        }

        //Set coordinates of Array index to coordinates of upper Array index
        for(let i = 0; i < myPaths[p].steps -1; i++)
        {
            myPaths[p].path[i][0] = myPaths[p].path[i+1][0];
            myPaths[p].path[i][1] = myPaths[p].path[i+1][1];
        }
        
        //Generate new goal/coordinates for last Array index AKA 'head-of-snake'
        let goal = Walker.getGoal(1,myPaths[p].gridWidth-1,1,myPaths[p].gridHeight-1,myPaths[p].dirAmount,myPaths[p].path[myPaths[p].steps-1][0],myPaths[p].path[myPaths[p].steps-1][1]);        

        myPaths[p].path[myPaths[p].steps-1][0] = goal[0];
        myPaths[p].path[myPaths[p].steps-1][1] = goal[1];
    },
}
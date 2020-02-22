var Metro = {
    
    //Create empty array for counters and countersIncrement to be used for animation
    counters: new Array(),
    countersIncr: new Array(),

   //Call this function in 'sketch.js > setup'
   initialize: function(boundsMinX, boundsMaxX, boundsMinY, boundsMaxY, cellSize, steps, dirAmount, onlyDiag, color)
   {
       //Create new path.
       let path = new Path(boundsMinX, boundsMaxX, boundsMinY, boundsMaxY, cellSize, steps, dirAmount, onlyDiag, color);

        //Create new (animation) counter and add it to the end of counters[]
        this.counters.push (0);
        //Create new (animation) counterIncrement and add it to the end of countersIncr[]
        this.counters.push(1);

        //Set Origin Coordinates for path
        let goal = new Array(2);
        path.path[0][0] = path.boundsMaxX / 2;
        path.path[0][1] = path.boundsMaxY / 2;

        //Generate X amount of steps(coordinates) for path
        for(let i = 0; i < path.steps-1; i++)
        {
            goal = Walker.getGoal(path.boundsMinX,path.boundsMaxX,path.boundsMinY,path.boundsMaxY,path.dirAmount,path.onlyDiag,path.path[i][0],path.path[i][1],path.cellSize);
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
            noFill();
            stroke(color);
            circle(myPaths[p].path[i][0],myPaths[p].path[i][1], myPaths[p].cellSize / 4);
        }
        //Run 'sketch.js > draw()' once
        noLoop();
    },

    //Call this function in 'sketch.js > draw()'
    drawAnimate: function(path, color) 
    {
        let p = path;

        //Draw part of path from origin[0] to counter value
        for(let i = 0; i < this.counters[p]; i++)
        {
            noFill();
            stroke(color);
            circle(myPaths[p].path[i][0],myPaths[p].path[i][1], myPaths[p].cellSize / 4);
        }

        //If path is not-drawn
        if (this.counters[p] <= 0) 
        {
            //Set new color to current path
            myPaths[p].color = Math.floor(Math.random() * 255) + 55;

            //Regenerate current path (Create new coordinates with same stepSize from same Origin)
            for(let i = 0; i < myPaths[p].steps-1; i++)
            {
                goal = Walker.getGoal(myPaths[p].boundsMinX,myPaths[p].boundsMaxX,myPaths[p].boundsMinY,myPaths[p].boundsMaxY,myPaths[p].dirAmount,myPaths[p].onlyDiag,myPaths[p].path[i][0],myPaths[p].path[i][1],myPaths[p].cellSize);
                myPaths[p].path[i+1][0] = goal[0];
                myPaths[p].path[i+1][1] = goal[1];
            }

            //Set Increment of part-of-path counter to +1
            this.countersIncr[p] = 1;
        }
        //If path is fully drawn
        else if (this.counters[p] >= myPaths[p].steps -1)
        {
            //Set Increment of part-of-path counter to -1
            this.countersIncr[p] = -1;
        }
        
        //Increase/decrease part-of-path to draw
        this.counters[p] += this.countersIncr[p];
    },

    //Debugging tool: Draws drawing-bounds to canvas.
    drawBounds: function(path, color)
    {
        stroke(color);
        noFill();
        rect(myPaths[path].boundsMinX,myPaths[path].boundsMinY,myPaths[path].boundsMaxX-myPaths[path].boundsMinX,myPaths[path].boundsMaxY-myPaths[path].boundsMinY);
    }
}
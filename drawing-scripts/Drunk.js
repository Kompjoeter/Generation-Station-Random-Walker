var Drunk = {

    //Create empty array for counters to be used for animation
    counters: new Array(),

    //Call this function in 'sketch.js > setup'
    initialize: function(boundsMinX, boundsMaxX, boundsMinY, boundsMaxY, cellSize, steps, dirAmount, onlyDiag, color)
    {
        //Create new path and add it to the end of myPaths[]
        let path = new Path(boundsMinX, boundsMaxX, boundsMinY, boundsMaxY, cellSize, steps, dirAmount, onlyDiag, color);

        //Create new (animation) counter and add it to the end of counters[]
        this.counters.push (0);

        //Set Origin Coordinates for path
        let goal = new Array(2);
        path.path[0][0] = path.boundsMaxX / 2;
        path.path[0][1] = path.boundsMaxY / 2;

        //Generate a path for X amount of steps
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
            stroke(color);
            line(myPaths[p].path[i][0],myPaths[p].path[i][1],myPaths[p].path[i+1][0],myPaths[p].path[i+1][1]);
        }
        //Run 'sketch.js > draw()' once
        noLoop();
    },

    //Call this function in sketch.js
    drawAnimate: function(path, color) 
    {
        {
            let p = path;
            
            //Draw part of path from origin[0] to counter value
            for(let i = 0; i < this.counters[p]; i++)
            {
                stroke(color);
                line(myPaths[p].path[i][0],myPaths[p].path[i][1],myPaths[p].path[i+1][0],myPaths[p].path[i+1][1]);
            }

            //If path is not fully drawn
            if (this.counters[p] < myPaths[p].steps -1) 
            {
                this.counters[p]++;
            }
        };
    },

    //Debugging tool: Draws drawing-bounds to canvas.
    drawBounds: function(path, color)
    {
        stroke(color);
        noFill();
        rect(myPaths[path].boundsMinX,myPaths[path].boundsMinY,myPaths[path].boundsMaxX-myPaths[path].boundsMinX,myPaths[path].boundsMaxY-myPaths[path].boundsMinY);
    }
}


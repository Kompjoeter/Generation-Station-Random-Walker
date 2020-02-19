var Drunk = {

    //Create empty array for counters to be used for animation
    counters: new Array(),

    //Call this function in 'sketch.js > setup'
    initialize: function(width, height, cellSize, steps, dirAmount, color)
    {
        //Create new path and add it to the end of myPaths[]
        let path = new Path(width, height, cellSize, steps, dirAmount, color);

        //Create new (animation) counter and add it to the end of counters[]
        this.counters.push (0);

        //Set Origin Coordinates for path
        let goal = new Array(2);
        path.path[0][0] = path.gridWidth / 2;
        path.path[0][1] = path.gridHeight / 2;

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
            line(myPaths[p].path[i][0]*myPaths[p].cellSize,myPaths[p].path[i][1]*myPaths[p].cellSize,myPaths[p].path[i+1][0]*myPaths[p].cellSize,myPaths[p].path[i+1][1]*myPaths[p].cellSize);
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
                line(myPaths[p].path[i][0]*myPaths[p].cellSize,myPaths[p].path[i][1]*myPaths[p].cellSize,myPaths[p].path[i+1][0]*myPaths[p].cellSize,myPaths[p].path[i+1][1]*myPaths[p].cellSize);
            }

            //If path is not fully drawn
            if (this.counters[p] < myPaths[p].steps -1) 
            {
                this.counters[p]++;
            }
        };
    }
}


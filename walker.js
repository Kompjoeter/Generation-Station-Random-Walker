class Path
{
    constructor(boundsMinX, boundsMaxX, boundsMinY, boundsMaxY, cellSize, steps, dirAmount, color)
    {
        this.steps = steps;
        //Generate a 'path' Array to store X and Y coordinates
        this.path = new Array(this.steps);
        for(let i = 0; i < this.steps; i++)
        {
            this.path[i] = new Array(2);
        }

        this.cellSize = cellSize;
    
        this.boundsMinX = boundsMinX / this.cellSize;
        this.boundsMaxX = boundsMaxX / this.cellSize;
        this.boundsMinY = boundsMinY / this.cellSize;
        this.boundsMaxY = boundsMaxY / this.cellSize;

        this.dirAmount = dirAmount;
        this.color = color;
    }
}

var Walker = 
{
    getDirRandom: function(dirAmount)
    {
        return Math.floor(Math.random() * dirAmount) * (360 / dirAmount);
    },

    getDirXYIncr: function(dir, isX)
    {
        let incr = 1;

        switch(dir)
        {
            //Up
            case 0:  
                if (isX)
                {
                    incr = 0;
                }
                else
                {
                    incr = -1;
                }
                break;
            //Up-Right
            case 45:
                if (isX)
                {
                    incr = 1;
                }
                else
                {
                    incr = -1;
                }
                break;
            //Right
            case 90:
                if (isX)
                {
                    incr = 1;
                }
                else
                {
                    incr = 0;
                }
                break;
            //Down-Right
            case 135:
                if (isX)
                {
                    incr = 1;
                }
                else
                {
                    incr = 1;
                }
                break;
            //Down
            case 180:
                if (isX)
                {
                    incr = 0;
                }
                else
                {
                    incr = 1;
                }
                break;
            //Down-Left
            case 225:
                if (isX)
                {
                    incr = -1;
                }
                else
                {
                    incr = 1;
                }
                break;
            //Left
            case 270:
                if (isX)
                {
                    incr = -1;
                }
                else
                {
                    incr = 0;
                }
                break;
            //Up-Left
            case 315:
                if (isX)
                {
                    incr = -1;
                }
                else
                {
                    incr = -1;
                }
                break;
        }
        return incr;
    },

    getGoalXY: function(incr, xYStart)
    {
        return xYStart + (1 * incr);
    },

    //xIn: should be the 'x coordinate' to check for.
    //yIn: should be the 'y coordinate' to check for.
    checkBoundsXY: function(boundsMinX, boundsMaxX, boundsMinY, boundsMaxY, xIn, yIn)
    {
        let isOutOfBounds = false;

        if (xIn < boundsMinX || yIn < boundsMinY || xIn > boundsMaxX || yIn > boundsMaxY)
        {
            isOutOfBounds = true;
        }

        return isOutOfBounds;
    },

    //xStart: should be the 'x coordinate' of the starting point to set a goal from.
    //yStart: should be the 'y coordinate' of the starting point to set a goal from.
    getGoal: function(boundsMinX, boundsMaxX, boundsMinY, boundsMaxY, dirAmount, xStart, yStart)
    {
        let xYGoal = new Array(2);
        let isOutOfBounds = true;
        while(isOutOfBounds == true)
        {
            let dir = this.getDirRandom(dirAmount);
            let incr = this.getDirXYIncr(dir, true);
            xYGoal[0] = this.getGoalXY(incr, xStart);
            incr = this.getDirXYIncr(dir, false);
            xYGoal[1] = this.getGoalXY(incr, yStart );
            isOutOfBounds = this.checkBoundsXY(boundsMinX,boundsMaxX,boundsMinY, boundsMaxY,xYGoal[0], xYGoal[1]);
        }
        return xYGoal;
    }
}
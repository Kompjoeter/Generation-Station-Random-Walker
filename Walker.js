class Path
{
    //boundsMinX: should be the 'lowest x coordinate' allowed to draw in (not lower than 0).
    //boundsMaxX: should be the 'highest x coordinate' allowed to draw in.
        //Advice: should not be higher than canvas width.
    //boundsMinY: should be the 'lowest y coordinate' allowed to draw in (not lower than 0).
    //boundsMaxY: should be the 'highest y coordinate' allowed to draw in.
        //Advice: should not be higher than canvas height.
    //cellSize: should be a positive integer 
        //Advice: Should be a power of 2.
    //steps: should be a positive integer and the desired length of the path.
     //dirAmount: should be '4' or '8'
        //If '4' and getDirRandom is called, it returns a direction of (0,90,180 or 270)
        //If '8' and getDirRandom is called, it returns a direction of (0,45,90,135,180,225,270 or 315)
    //onlyDiag: should be 'true' or 'false'
        //If 'true' 'dirAmount' is ignored and getDirRandom is called, it returns a direction of (45,135,225 or 315)
        //If 'false' 'dirAmount' is used to generate a direction as explained above
    //color: should be the desired color of the path in any of these formats:( 255 , '#FF0000' , 'red' , 'hsl(0, 100%, 50%)' , 'rgb(255, 0, 0)' )
    constructor(boundsMinX, boundsMaxX, boundsMinY, boundsMaxY, cellSize, steps, dirAmount, onlyDiag, color)
    {
        this.steps = steps;

        //Generate an Array to store X and Y coordinates of a path
        this.path = new Array(this.steps);
        for(let i = 0; i < this.steps; i++)
        {
            this.path[i] = new Array(2);
        }
        
        this.cellSize = cellSize;
        this.boundsMinX = boundsMinX;
        this.boundsMaxX = boundsMaxX;
        this.boundsMinY = boundsMinY;
        this.boundsMaxY = boundsMaxY;
        this.dirAmount = dirAmount;
        this.onlyDiag = onlyDiag;
        this.color = color;
    }
}

var Walker = 
{
    //dirAmount: should be '4' or '8'
        //If '4' getDirRandom returns a direction of (0,90,180 or 270)
        //If '8' getDirRandom returns a direction of (0,45,90,135,180,225,270 or 315)
    //onlyDiag: should be 'true' or 'false'
        //If 'true' 'dirAmount' is ignored and getDirRandom returns a direction of (45,135,225 or 315)
        //If 'false' 'dirAmount' is used to generate a direction as explained above
    getDirRandom: function(dirAmount,onlyDiag)
    {
        if (!onlyDiag)
        {
            return Math.floor(Math.random() * dirAmount) * (360 / dirAmount);
        }
        else
        {
            return 45 + Math.floor(Math.random() * 4) * (360 / 4);
        }
    },

    //dir : should be a 'direction (0,45,90,135,180,225,270 or 315)'
    //isX: should be 'true' or 'false'
        //If 'true' getDirXYIncr returns an 'increment' based on 'dir' for a 'X-coordinate'.
        //If 'false' getDirXYIncr returns an 'increment' based on 'dir' for a 'Y-coordinate'.
    //cellSize: should be a positive integer 
        //Advice: Should be a power of 2.
    getDirXYIncr: function(dir, isX, cellSize)
    {
        let incr = 0;

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
                    incr = -cellSize;
                }
                break;
            //Up-Right
            case 45:
                if (isX)
                {
                    incr = cellSize;
                }
                else
                {
                    incr = -cellSize;
                }
                break;
            //Right
            case 90:
                if (isX)
                {
                    incr = cellSize;
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
                    incr = cellSize;
                }
                else
                {
                    incr = cellSize;
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
                    incr = cellSize;
                }
                break;
            //Down-Left
            case 225:
                if (isX)
                {
                    incr = -cellSize;
                }
                else
                {
                    incr = cellSize;
                }
                break;
            //Left
            case 270:
                if (isX)
                {
                    incr = -cellSize;
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
                    incr = -cellSize;
                }
                else
                {
                    incr = -cellSize;
                }
                break;
        }
        return incr;
    },

    //incr: should be 0, a postive value, or a negative value 
        //Advice: the positive/negative values should be 'equal' to cellSize
    //xYStart: should be the 'x or y coordinate' to base the x/y goal coordinate on.
    getGoalXY: function(incr, xYStart)
    {
        return xYStart + (incr);
    },

    //boundsMinX: should be the 'lowest x coordinate' allowed to draw in (not lower than 0).
    //boundsMaxX: should be the 'highest x coordinate' allowed to draw in.
        //Advice: should not be higher than canvas width.
    //boundsMinY: should be the 'lowest y coordinate' allowed to draw in (not lower than 0).
    //boundsMaxY: should be the 'highest y coordinate' allowed to draw in.
        //Advice: should not be higher than canvas height.
    //xIn: should be the 'x coordinate' to test against boundsX.
    //yIn: should be the 'y coordinate' to test against boundsY.
    checkBoundsXY: function(boundsMinX, boundsMaxX, boundsMinY, boundsMaxY, xIn, yIn)
    {
        let isOutOfBounds = false;

        if (xIn < boundsMinX || yIn < boundsMinY || xIn > boundsMaxX || yIn > boundsMaxY)
        {
            isOutOfBounds = true;
        }

        return isOutOfBounds;
    },

    //boundsMinX: should be the 'lowest x coordinate' allowed to draw in (not lower than 0).
    //boundsMaxX: should be the 'highest x coordinate' allowed to draw in.
        //Advice: should not be higher than canvas width.
    //boundsMinY: should be the 'lowest y coordinate' allowed to draw in (not lower than 0).
    //boundsMaxY: should be the 'highest y coordinate' allowed to draw in.
        //Advice: should not be higher than canvas height.
     //dirAmount: should be '4' or '8'
        //If '4' getDirRandom returns a direction of (0,90,180 or 270)
        //If '8' getDirRandom returns a direction of (0,45,90,135,180,225,270 or 315)
    //onlyDiag: should be 'true' or 'false'
        //If 'true' 'dirAmount' is ignored and getDirRandom returns a direction of (45,135,225 or 315)
        //If 'false' 'dirAmount' is used to generate a direction as explained above
    //xStart: should be the 'x coordinate' to base the x goal coordinate on.
    //yStart: should be the 'y coordinate' to base the y goal coordinate on.
    //cellSize: should be a positive integer 
        //Advice: Should be a power of 2.
    getGoal: function(boundsMinX, boundsMaxX, boundsMinY, boundsMaxY, dirAmount, onlyDiag, xStart, yStart, cellSize)
    {
        let xYGoal = new Array(2);
        let isOutOfBounds = true;
        while(isOutOfBounds == true)
        {
            let dir = this.getDirRandom(dirAmount,onlyDiag);
            let incr = this.getDirXYIncr(dir, true, cellSize);
            xYGoal[0] = this.getGoalXY(incr, xStart);
            incr = this.getDirXYIncr(dir, false, cellSize);
            xYGoal[1] = this.getGoalXY(incr, yStart );
            isOutOfBounds = this.checkBoundsXY(boundsMinX,boundsMaxX,boundsMinY, boundsMaxY,xYGoal[0], xYGoal[1]);
        }
        return xYGoal;
    }
}
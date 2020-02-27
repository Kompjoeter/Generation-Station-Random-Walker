class Path
{
    /**
    * Create new path.    
    * @param {int} boundsMinX - The 'lowest x coordinate' allowed to draw in 
    * (Should not be lower than 0).
    * @param {int} boundsMaxX - The 'highest x coordinate' allowed to draw in 
    * (Should not be higher than canvas width).
    * @param {int} boundsMinY - The 'lowest y coordinate' allowed to draw in 
    * (Should not be lower than 0).
    * @param {int} boundsMaxY - The 'highest y coordinate' allowed to draw in 
    * (Should not be higher than canvas height).
    * @param {int} cellSize - The width and height of grid-cells 
    * (Should be a power of 2).
    * @param {int} steps - The desired length (Amount of cells) of the path.
    * @param {int} dirAmount - The amount of directions to randomly choose from 
    * (Should be '4' or '8') 
    * (If '4', returns a direction of (0,90,180 or 270)), 
    * (If '8', returns a direction of (0,45,90,135,180,225,270 or 315))
    * @param {bool} onlyDiag - Constrict the path to only pick diagonal directions. 
    * (If 'true', overrides 'dirAmount')
    * @param {color} color - The desired color of the path. 
    * (Should be any of these formats: 255 , '#FF0000' , 'red' , 'hsl(0, 100%, 50%)' , 'rgb(255, 0, 0)' )
    */
    constructor(boundsMinX, boundsMaxX, boundsMinY, boundsMaxY, cellSize, steps, dirAmount, onlyDiag, color)
    {

        this.boundsMinX = boundsMinX;
        this.boundsMaxX = boundsMaxX;
        this.boundsMinY = boundsMinY;
        this.boundsMaxY = boundsMaxY;
        this.cellSize = cellSize;
        this.steps = steps;
        this.dirAmount = dirAmount;
        this.onlyDiag = onlyDiag;
        this.color = color;

        //Generate an Array to store X and Y coordinates of a path
        this.path = new Array(this.steps);
        for(let i = 0; i < this.steps; i++)
        {
            this.path[i] = new Array(2);
        }
    }

    /**
    * Get random direction.
    * @param {int} dirAmount - The amount of directions to randomly choose from 
    * (Should be '4' or '8') 
    * (If '4', returns a direction of (0,90,180 or 270)), 
    * (If '8', returns a direction of (0,45,90,135,180,225,270 or 315))
    * @param {bool} onlyDiag - Constrict the path to only pick diagonal directions. 
    * (If 'true', overrides 'dirAmount')
    */
    getDirRandom(dirAmount,onlyDiag)
    {
        if (!onlyDiag)
        {
            return Math.floor(Math.random() * dirAmount) * (360 / dirAmount);
        }
        else
        {
            return 45 + Math.floor(Math.random() * 4) * (360 / 4);
        }
    }

    /**
    * Get X or Y increment for direction.
    * @param {int} dir - The direction to get a increment for (0,45,90,135,180,225,270 or 315)'
    * @param {bool} isX - Get increment for 'x coordinate' (If for 'y', should be false)
    * @param {int} cellSize - The width and height of grid-cells 
    * (Should be a power of 2).
    */
    getDirXYIncr(dir, isX, cellSize)
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
    }

    /**
    *Get X or Y Goal Coordinate
    * @param {int} incr - The increment to increase 'x or y coordinate' by.
    * (Should be 'equal' to cellSize, or be 0, can be negative)
    * @param {int} xYStart - should be the 'x or y coordinate' to base the x/y goal coordinate on.
    */
    getGoalXY(incr, xYStart)
    {
        return xYStart + (incr);
    }

    /**
    * Create new path.    
    * @param {int} boundsMinX - The 'lowest x coordinate' allowed to draw in 
    * (Should not be lower than 0).
    * @param {int} boundsMaxX - The 'highest x coordinate' allowed to draw in 
    * (Should not be higher than canvas width).
    * @param {int} boundsMinY - The 'lowest y coordinate' allowed to draw in 
    * (Should not be lower than 0).
    * @param {int} boundsMaxY - The 'highest y coordinate' allowed to draw in 
    * (Should not be higher than canvas height).
    * @param {int} xIn - The 'x coordinate' to test against boundsX.
    * @param {int} yIn - The 'y coordinate' to test against boundsY.
    */
    checkBoundsXY(boundsMinX, boundsMaxX, boundsMinY, boundsMaxY, xIn, yIn)
    {
        let isOutOfBounds = false;

        if (xIn < boundsMinX || yIn < boundsMinY || xIn > boundsMaxX || yIn > boundsMaxY)
        {
            isOutOfBounds = true;
        }

        return isOutOfBounds;
    }

    /**
    * Get Goal Coordinates in random direction.
    * @param {int} boundsMinX - The 'lowest x coordinate' allowed to draw in 
    * (Should not be lower than 0).
    * @param {int} boundsMaxX - The 'highest x coordinate' allowed to draw in 
    * (Should not be higher than canvas width).
    * @param {int} boundsMinY - The 'lowest y coordinate' allowed to draw in 
    * (Should not be lower than 0).
    * @param {int} boundsMaxY - The 'highest y coordinate' allowed to draw in 
    * (Should not be higher than canvas height).
    * @param {int} dirAmount - The amount of directions to randomly choose from 
    * (Should be '4' or '8') 
    * (If '4', returns a direction of (0,90,180 or 270)), 
    * (If '8', returns a direction of (0,45,90,135,180,225,270 or 315))
    * @param {bool} onlyDiag - Constrict the path to only pick diagonal directions. 
    * (If 'true', overrides 'dirAmount')
    * @param {int} xStart - The 'x coordinate' to base the x goal coordinate on.
    * @param {int} yStart - The 'y coordinate' to base the y goal coordinate on.
    * @param {int} cellSize - The width and height of grid-cells 
    * (Should be a power of 2).
    */
    getGoal(boundsMinX, boundsMaxX, boundsMinY, boundsMaxY, dirAmount, onlyDiag, xStart, yStart, cellSize)
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
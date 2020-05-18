var Dot = 
{
    /**
    * Initialize Dot
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
    * @param {int} dirAmount - The amount of directions to randomly choose from 
    * (Should be '4' or '8') 
    * (If '4', returns a direction of (0,90,180 or 270)), 
    * (If '8', returns a direction of (0,45,90,135,180,225,270 or 315))
    * @param {bool} onlyDiag - Constrict the path to only pick diagonal directions. 
    * (If 'true', overrides 'dirAmount')
    * @param {color} color - The desired color of the path. 
    * (Should be any of these formats: 255 , '#FF0000' , 'red' , 'hsl(0, 100%, 50%)' , 'rgb(255, 0, 0)' )
    */
    //Call this function in 'sketch.js > setup'
    initialize: function(boundsMinX, boundsMaxX, boundsMinY, boundsMaxY, cellSize, steps, dirAmount, onlyDiag, color)
    {
        //Create new path.
        let p = new Path(boundsMinX, boundsMaxX, boundsMinY, boundsMaxY, cellSize, steps, dirAmount, onlyDiag, color);

        //Set Origin Coordinates for path
        let goal = new Array(2);
        p.path[0][0] = Math.floor(Math.random() * (p.boundsMaxX - p.boundsMinX)) + p.boundsMinX;
        p.path[0][1] = Math.floor(Math.random() * (p.boundsMaxY - p.boundsMinY)) + p.boundsMinY;

        return p;
    },

    /**
    * Draw Dot fully without Animation 
    * @param {Object} pathObject - The path to draw. 
    * @param {Int} pathIndex - The index of the path to draw.
    * (Should be any of these formats: 255 , '#FF0000' , 'red' , 'hsl(0, 100%, 50%)' , 'rgb(255, 0, 0)' )
    */   
    //Call this function in 'sketch.js > draw()'
    drawStatic: function(pathObject,pathIndex)
    {
        let color = pathObject.color;
        
        //Draw current path(p) fully
        fill(color)
        stroke(color);
        circle(pathObject.path[0][0],pathObject.path[0][1], pathObject.cellSize / 4);
        
        //Run 'sketch.js > draw()' once
        noLoop();
    },

    /**
    * Draw Dot Animated (loop)
    * @param {Object} pathObject - The path to draw. 
    * @param {Int} pathIndex - The index of the path to draw.
    * (Should be any of these formats: 255 , '#FF0000' , 'red' , 'hsl(0, 100%, 50%)' , 'rgb(255, 0, 0)' )
    */   
    //Call this function in sketch.js
    drawAnimate: function(pathObject, pathIndex) 
    {
        let color = pathObject.color;
        
        //Draw current path(p) fully
        fill(color);
        stroke(color);
        circle(pathObject.path[0][0],pathObject.path[0][1], pathObject.cellSize / 4);
        
        let goal = pathObject.getGoal(pathObject.boundsMinX,pathObject.boundsMaxX,pathObject.boundsMinY,pathObject.boundsMaxY,pathObject.dirAmount,pathObject.onlyDiag,pathObject.path[0][0],pathObject.path[0][1],pathObject.cellSize);
        pathObject.path[0][0] = goal[0];
        pathObject.path[0][1] = goal[1];
    }
}
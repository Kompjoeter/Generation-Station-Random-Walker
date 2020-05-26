# Generation Station (Random Walker)

# Description
A tiny library of functions to generate paths with the Random Walker technique, coupled with the p5.js library
and a canvas to draw the generated paths onto.

The scripts in the 'drawing-scripts' folder are examples of how one can use the Walker.js library (+ the p5.js library) to create a variety of ways to draw generative-art onto the canvas. Which are then initalized and called in sketch.js.

The user interface is based of a seperate project I made, [Responsive Template Canvas UI](https://github.com/RanDByyp/Responsive-Template-Canvas-UI).

My purpose for making this project was to get familiar with the p5.js library and used it to test my 'Responsive Template Canvas UI'.

# Contents
* **HTML**
  * index.html **(All UI Elements + Canvas (Edited from Template Canvas UI), and initializes all scripts.)**
* **CSS**
  * main-aesthetic.css **(All Aesthetic styling for the UI (From Template Canvas UI))**
  * main-spatial.css **(All Spatial/Functional styling for the UI (From Template Canvas UI))**
* **JS**
  * libraries
    * p5.min.js **(A minimal version of the p5js Library)**
    * utility.js **(A tiny library with general functions used in UI)**
  * drawing-scripts
    * Drunk.js **(A unique method to draw Random Walkers to the Canvas, Static or Animated.)**
    * Metro.js **(A unique method to draw Random Walkers to the Canvas, Static or Animated.)**
    * Snake.js **(A unique method to draw Random Walkers to the Canvas, Static or Animated.)**
  * Walker.js **(Path Class and Functions to generate methods of drawing Random Walkers)**
  * logic.js **(All Variables used in generation and initialization Function for generation)** 
  * sketch.js **(P5 Script/Functionality to Setup and Draw onto a Canvas)**
  * ui-menu.js **(Template Canvas UI Functionality)**
  * ui-program.js **(Functionality to bind the UI to the Program/Logic)**

# Credits
This program was made by Joran de Boer AKA RanDByyp using the p5.js Library (https://p5js.org/) (which is not made by Joran).

# License
The p5.js library used in this project uses the **GNU Lesser General Public License v2.1** which you can view here:
https://github.com/processing/p5.js/blob/master/license.txt

The rest of the program which is written by me (Joran de Boer AKA RanDByyp) uses the **MIT License**:

Copyright 2020 Joran de Boer AKA RanDByyp

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Contact

https://twitter.com/RandbYyp

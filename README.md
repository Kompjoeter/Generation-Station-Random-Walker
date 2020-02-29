# Generation Station (Random Walker)

# Description
A tiny library of functions to generate paths with the Random Walker technique coupled with the p5.js library
and a canvas to draw the generated paths onto.

The scripts in the 'drawing-scripts' folder are examples of how you can use the Walker.js library (+ the p5.js library) to create a variety of ways to draw generative-art onto the canvas. Which are then initalized and called in sketch.js.

This project was made to experiment with the Random Walker technique and have its results be visible on screen. In the future I might add different techniques (For example: flow-fields, perlin-noise) to the Generation Station which then also can be used to create a variety of generative-art.

Some of the code in the examples (The files in the 'drawing-scripts' folder) is simply copied/pasted from eachother with few changes. I chose deliberately to do this so that it is clear what each drawing-script needs to function. 

# Table of Contents
- **index.html:** Sets up all relevant scripts and allows for the drawing of a canvas.
- **main.css:** Styles the html minimally (Not essential).
- **Walker.js:** The library containing all 'Random-Walker functionality'
- **Drawing-Scripts:** (Here I put the samples I made with the Walker.js library)
    - **Drunk.js** (A unique way of using 'Random Walker(s)' to draw onto a canvas)
    - **Metro.js** (A unique way of using 'Random Walker(s)' to draw onto a canvas)
    - **Snake.js** (A unique way of using 'Random Walker(s)' to draw onto a canvas)
    
# Installation
1. Download all the project files in this repository.
2. Download the p5.js library (https://p5js.org/download/) and add it to the root-folder (Same folder as index.html). The p5.js library is already referenced in the index.html file.

# Usage
If you have no experience with p5.js I advice you to take a look at their website (https://p5js.org/get-started/) (https://p5js.org/reference/). 

I hope the project is commented clearly. If you have any confusion about the project feel free to send me a message.

If you want to make a new drawing-script, add it to the 'drawing-scripts' folder and reference it in the index.html (Make sure you get the order of referencing right).

In order to create your own ways of generating art, the only files you need to edit are sketch.js, your own drawing-script, and the referencing in index.html.

To start out you could try calling any of the pre-made 'drawing-scripts' and changing a few parameters.
When calling a 'drawing-script' draw function, make sure to either call DrawingScriptName.drawStatic or DrawingScriptName.drawAnimate.

When you get a feel for how the project works, try making your own 'drawing-script'!

(If this information is not relevant to you, do as you please. Make sure to check the p5.js library's license when you decide to alter its contents or/and publish your own projects/versions-of-this-project using the p5.js library.)

# Contribution
If you have made any 'drawings-scripts' yourself, feel free to add them to the ' drawings-scripts' folder through a pull request.

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

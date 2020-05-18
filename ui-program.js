function setLogic()
{
    cellSize = Number(document.getElementById('cellsize').value);
    cellSizeRandomize = document.getElementById('cellsize-randomize').checked;
    drawingStyle = document.querySelector("input[name='drawing-style']:checked").value;
    drawingAnimated = document.getElementById('drawing-animated').checked;
    walkerAmount = Number(document.getElementById('walker-amount').value);

    hue = document.getElementById('hue').value;
    hueRandomize = document.getElementById('hue-randomize').checked;
    saturation = document.getElementById('saturation').value;
    saturationRandomize = document.getElementById('saturation-randomize').checked;
    brightness = document.getElementById('brightness').value;
    brightnessRandomize = document.getElementById('brightness-randomize').checked;

    stepsMultiplier = Number(document.getElementById('steps').value);

    console.log(hue);
    console.log(saturation);
    console.log(brightness);
}

function setDrawingStyle(trigger)
{
    drawingStyle = trigger.value;
    initializeDrawMethod();
}

function setDrawAnimate(trigger)
{
    drawingAnimated = trigger.checked;
    console.log(drawingAnimated);
    initializeDrawMethod();
}

function setWalkerAmount(trigger)
{
    walkerAmount = Number(trigger.value);
    initializeDrawMethod();
}

function setCellSize(trigger)
{
    cellSize = Number(trigger.value);
    initializeDrawMethod();
}

function setCellSizeRandomize(trigger)
{
    cellSizeRandomize = trigger.checked;
    initializeDrawMethod();
}

function setHue(trigger)
{
    hue = trigger.value;
    initializeDrawMethod();
}

function setHueRandomize(trigger)
{
    hueRandomize = trigger.checked;
    initializeDrawMethod();
}

function setSaturation(trigger)
{   
    saturation = trigger.value;
    initializeDrawMethod();
}

function setSaturationRandomize(trigger)
{
    saturationRandomize = trigger.checked;
    initializeDrawMethod();
}

function setBrightness(trigger)
{
    brightness = trigger.value;
    initializeDrawMethod();
}

function setBrightnessRandomize(trigger)
{
    brightnessRandomize = trigger.checked;
    initializeDrawMethod();
}

function setSteps(trigger)
{
    stepsMultiplier = Number(trigger.value) *10;
    initializeDrawMethod();
}
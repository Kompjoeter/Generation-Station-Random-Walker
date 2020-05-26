//Set Logic Variables for first run and addEventListeners.
function initializeLogic()
{
    let inputCellSize = document.getElementById('cellsize');
    cellSize = Number(inputCellSize.value);
    inputCellSize.addEventListener('change',function()
    {
        cellSize = Number(inputCellSize.value);
        initializeGenerator();
    });

    let inputCellSizeRandomize = document.getElementById('cellsize-randomize');
    cellSizeRandomize = inputCellSizeRandomize.checked;
    inputCellSizeRandomize.addEventListener('change',function()
    {
        cellSizeRandomize = inputCellSizeRandomize.checked;
        initializeGenerator();
    });

    let checkedInputDrawingStyle = document.querySelector("input[name='drawing-style']:checked");
    drawingStyle = checkedInputDrawingStyle.value;
    let inputDrawingStyle = document.getElementsByName('drawing-style');

    for(let i = 0; i < inputDrawingStyle.length; i++)
    {
        inputDrawingStyle[i].addEventListener('change',function()
        {
            drawingStyle = inputDrawingStyle[i].value;
            initializeGenerator();
        });
    }
    
    let inputDrawingAnimated = document.getElementById('drawing-animated');
    drawingAnimated = inputDrawingAnimated.checked;
    inputDrawingAnimated.addEventListener('change',function()
    {
        drawingAnimated = inputDrawingAnimated.checked;
        initializeGenerator();
    });

    let checkedInputDirectionsAmount = document.querySelector("input[name='directions-amount']:checked");
    directionsAmount = Number(checkedInputDirectionsAmount.value);
    let inputDirectionsAmount = document.getElementsByName('directions-amount');
    for(let i = 0; i < inputDirectionsAmount.length; i++)
    {
        inputDirectionsAmount[i].addEventListener('change',function()
        {
            directionsAmount = Number(inputDirectionsAmount[i].value);
            initializeGenerator();
        });
    }

    let inputDiagonalOnly = document.getElementById('diagonal-only');
    diagonalOnly = inputDiagonalOnly.checked;
    inputDiagonalOnly.addEventListener('change',function()
    {
        diagonalOnly = inputDiagonalOnly.checked;
        initializeGenerator();
    });

    let inputWalkerAmount = document.getElementById('walker-amount')
    walkerAmount = Number(inputWalkerAmount.value);
    inputWalkerAmount.addEventListener('change',function()
    {
        walkerAmount = Number(inputWalkerAmount.value);
        initializeGenerator();
    });

    let inputHue = document.getElementById('hue');
    hue = Number(inputHue.value);
    inputHue.addEventListener('change',function()
    {
        hue = Number(inputHue.value);
        initializeGenerator();
    });

    let inputHueRandomize = document.getElementById('hue-randomize');
    hueRandomize = inputHueRandomize.checked;
    inputHueRandomize.addEventListener('change',function()
    {
        hueRandomize = inputHueRandomize.checked;
        initializeGenerator();
    });

    let inputSaturation = document.getElementById('saturation');
    saturation = Number(inputSaturation.value);
    inputSaturation.addEventListener('change',function()
    {
        saturation = Number(inputSaturation.value);
        initializeGenerator();
    });

    let inputSaturationRandomize = document.getElementById('saturation-randomize');
    saturationRandomize = inputSaturationRandomize.checked;
    inputSaturationRandomize.addEventListener('change',function()
    {
        saturationRandomize = inputSaturationRandomize.checked;
        initializeGenerator();
    });

    let inputBrightness = document.getElementById('brightness');
    brightness = Number(inputBrightness.value);
    inputBrightness.addEventListener('change',function()
    {
        brightness = Number(inputBrightness.value);
        initializeGenerator();
    });

    let inputBrightnessRandomize = document.getElementById('brightness-randomize');
    brightnessRandomize = inputBrightnessRandomize.checked;
    inputBrightnessRandomize.addEventListener('change',function()
    {
        brightnessRandomize = inputBrightnessRandomize.checked;
        initializeGenerator();
    });

    let inputStepsRange = document.getElementById('steps');
    stepsRange = Number(inputStepsRange.value);
    inputStepsRange.addEventListener('change',function()
    {
        stepsRange = Number(inputStepsRange.value);
        initializeGenerator();
    });
}
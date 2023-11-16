const array = [];

function getEllipseValue(button) {
    const geoName = button.parentNode.children[1].innerText;

    const geoFirstInputString = button.parentNode.children[3].value;
    const geoFirstInput = parseFloat(geoFirstInputString)

    const geoSecondInputString = button.parentNode.children[5].value;
    const geoSecondInput = parseFloat(geoSecondInputString);


    const geoMath = 3.14;

    const result = geoMath * geoFirstInput * geoSecondInput;
    const resultFixed = result.toFixed(2)
    const finalResult = parseFloat(resultFixed)
    const obj = {
        geoName: geoName,
        result: finalResult
    }

    button.parentNode.children[3].value = '';
    button.parentNode.children[5].value = '';

    if (isNaN(geoFirstInput, geoSecondInput)) {
        alert('This is Not a Number')
        return
    }

    else if (geoFirstInput < 0 || geoSecondInput < 0) {
        alert('Negative number Not Acceptable');
        return
    }

    else {
        array.push(obj);
        getArrayFromObj(array)

    }

}

function getMoreCalculateBtn(button) {
    const geoName = button.parentNode.children[1].innerText;

    const geoFirstInputString = button.parentNode.children[3].value;
    const geoFirstInput = parseFloat(geoFirstInputString)

    const geoSecondInputString = button.parentNode.children[5].value;
    const geoSecondInput = parseFloat(geoSecondInputString);


    const geoMathString = button.parentNode.children[2].children[0].innerText;
    const geoMath = parseFloat(geoMathString)

    const result = geoMath * geoFirstInput * geoSecondInput;

    const obj = {
        geoName: geoName,
        result: result
    }

    button.parentNode.children[3].value = '';
    button.parentNode.children[5].value = '';

    if (isNaN(geoFirstInput, geoSecondInput)) {
        alert('This is Not a Number')
        return
    }

    else if (geoFirstInput < 0 || geoSecondInput < 0) {
        alert('Negative number Not Acceptable');
        return
    }

    else {
        array.push(obj);
        getArrayFromObj(array)
        return
    }
}


function getCalculateBtn(button) {

    const geoName = button.parentNode.children[1].innerText;

    const geoFirstInputString = button.parentNode.children[3].value;
    const geoFirstInput = parseFloat(geoFirstInputString);

    const geoSecondInputString = button.parentNode.children[5].value;
    const geoSecondInput = parseFloat(geoSecondInputString);


    const result = geoFirstInput * geoSecondInput;

    const obj = {
        geoName: geoName,
        result: result
    }

    button.parentNode.children[3].value = '';
    button.parentNode.children[5].value = '';

    if (isNaN(geoFirstInput, geoSecondInput)) {
        alert('This is Not a Number')
        return
    }

    else if (geoFirstInput < 0 || geoSecondInput < 0) {
        alert('Negative number Not Acceptable');
        return
    }
    else {
        array.push(obj);
        getArrayFromObj(array)
    }


}


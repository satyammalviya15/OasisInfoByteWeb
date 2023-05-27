function convertTemperature() {
    var inputTemp = parseFloat(document.getElementById("inputTemp").value);
    var selectFrom = document.getElementById("selectFrom").value;
    var selectTo = document.getElementById("selectTo").value;
    var result = document.getElementById("result");

    var convertedTemp;

    if (selectFrom === "celsius") {
        if (selectTo === "fahrenheit") {
            convertedTemp = (inputTemp * 9/5) + 32;
        } else if (selectTo === "kelvin") {
            convertedTemp = inputTemp + 273.15;
        }
    } else if (selectFrom === "fahrenheit") {
        if (selectTo === "celsius") {
            convertedTemp = (inputTemp - 32) * 5/9;
        } else if (selectTo === "kelvin") {
            convertedTemp = (inputTemp + 459.67) * 5/9;
        }
    } else if (selectFrom === "kelvin") {
        if (selectTo === "celsius") {
            convertedTemp = inputTemp - 273.15;
        } else if (selectTo== "fahrenheit") {
            convertedTemp = (inputTemp * 9/5) - 459.67;
        }
    }

    if (isNaN(convertedTemp)) {
        result.innerHTML = "Please select valid units.";
    } else {
        result.innerHTML = inputTemp + " " + selectFrom + " is equal to " + convertedTemp.toFixed(2) + " " + selectTo + ".";
    }
}
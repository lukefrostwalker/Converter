const inputData = document.querySelector("#input");
const selectFrom = document.querySelector("#from");
const selectTo = document.querySelector("#to");
const outputData = document.querySelector("#output");

selectFrom.addEventListener('change', conversion);
selectTo.addEventListener('change', conversion);
inputData.addEventListener('input', conversion);

function conversion() {
    if (
        (selectFrom.value === "nm") && (selectTo.value === "nm") ||
        (selectFrom.value === "µm") && (selectTo.value === "µm") ||
        (selectFrom.value === "mm") && (selectTo.value === "mm") ||
        (selectFrom.value === "cm") && (selectTo.value === "cm") ||
        (selectFrom.value === "m") && (selectTo.value === "m") ||
        (selectFrom.value === "km") && (selectTo.value === "km") ||
        (selectFrom.value === "mi") && (selectTo.value === "mi") ||
        (selectFrom.value === "yd") && (selectTo.value === "yd") ||
        (selectFrom.value === "ft") && (selectTo.value === "ft") ||
        (selectFrom.value === "in") && (selectTo.value === "in")
    ) {
        outputData.value = inputData.value;
    }
    else if ((selectFrom.value === "nm") && (selectTo.value === "µm")) {outputData.value = inputData.value / 1000;}
    else if ((selectFrom.value === "nm") && (selectTo.value === "mm")) {outputData.value = inputData.value / 1000000;}
    else if ((selectFrom.value === "nm") && (selectTo.value === "cm")) {outputData.value = inputData.value / 10000000;}
    else if ((selectFrom.value === "nm") && (selectTo.value === "m")) {outputData.value = inputData.value / 1000000000;}
    else if ((selectFrom.value === "nm") && (selectTo.value === "km")) {outputData.value = inputData.value / 1000000000000;}
    else if ((selectFrom.value === "nm") && (selectTo.value === "mi")) {outputData.value = inputData.value / 1609000000000;}
    else if ((selectFrom.value === "nm") && (selectTo.value === "yd")) {outputData.value = inputData.value / 914400000;}
    else if ((selectFrom.value === "nm") && (selectTo.value === "ft")) {outputData.value = inputData.value / 304800000;}
    else if ((selectFrom.value === "nm") && (selectTo.value === "in")) {outputData.value = inputData.value / 25400000;}

    else if ((selectFrom.value === "µm") && (selectTo.value === "nm")) {outputData.value = inputData.value * 1000;}
    else if ((selectFrom.value === "µm") && (selectTo.value === "mm")) {outputData.value = inputData.value / 1000;}
    else if ((selectFrom.value === "µm") && (selectTo.value === "cm")) {outputData.value = inputData.value / 10000;}
    else if ((selectFrom.value === "µm") && (selectTo.value === "m")) {outputData.value = inputData.value / 1000000;}
    else if ((selectFrom.value === "µm") && (selectTo.value === "km")) {outputData.value = inputData.value / 1000000000;}
    else if ((selectFrom.value === "µm") && (selectTo.value === "mi")) {outputData.value = inputData.value / 1609000000;}
    else if ((selectFrom.value === "µm") && (selectTo.value === "yd")) {outputData.value = inputData.value / 914400;}
    else if ((selectFrom.value === "µm") && (selectTo.value === "ft")) {outputData.value = inputData.value / 304800;}
    else if ((selectFrom.value === "µm") && (selectTo.value === "in")) {outputData.value = inputData.value / 25400;}

    else if ((selectFrom.value === "mm") && (selectTo.value === "nm")) {outputData.value = inputData.value * 1000000;}
    else if ((selectFrom.value === "mm") && (selectTo.value === "µm")) {outputData.value = inputData.value * 1000;}
    else if ((selectFrom.value === "mm") && (selectTo.value === "cm")) {outputData.value = inputData.value / 10;}
    else if ((selectFrom.value === "mm") && (selectTo.value === "m")) {outputData.value = inputData.value / 1000;}
    else if ((selectFrom.value === "mm") && (selectTo.value === "km")) {outputData.value = inputData.value / 1000000;}
    else if ((selectFrom.value === "mm") && (selectTo.value === "mi")) {outputData.value = inputData.value / 1609000;}
    else if ((selectFrom.value === "mm") && (selectTo.value === "yd")) {outputData.value = inputData.value / 914.4;}
    else if ((selectFrom.value === "mm") && (selectTo.value === "ft")) {outputData.value = inputData.value / 304.8;}
    else if ((selectFrom.value === "mm") && (selectTo.value === "in")) {outputData.value = inputData.value / 25.4;}

    else if ((selectFrom.value === "cm") && (selectTo.value === "nm")) {outputData.value = inputData.value * 10000000;}
    else if ((selectFrom.value === "cm") && (selectTo.value === "µm")) {outputData.value = inputData.value * 10000;}
    else if ((selectFrom.value === "cm") && (selectTo.value === "mm")) {outputData.value = inputData.value * 10;}
    else if ((selectFrom.value === "cm") && (selectTo.value === "m")) {outputData.value = inputData.value / 100;}
    else if ((selectFrom.value === "cm") && (selectTo.value === "km")) {outputData.value = inputData.value / 100000;}
    else if ((selectFrom.value === "cm") && (selectTo.value === "mi")) {outputData.value = inputData.value / 160900;}
    else if ((selectFrom.value === "cm") && (selectTo.value === "yd")) {outputData.value = inputData.value / 91.44;}
    else if ((selectFrom.value === "cm") && (selectTo.value === "ft")) {outputData.value = inputData.value / 30.48;}
    else if ((selectFrom.value === "cm") && (selectTo.value === "in")) {outputData.value = inputData.value / 2.54;}

    else if ((selectFrom.value === "m") && (selectTo.value === "nm")) {outputData.value = inputData.value * 1000000000;}
    else if ((selectFrom.value === "m") && (selectTo.value === "µm")) {outputData.value = inputData.value * 1000000;}
    else if ((selectFrom.value === "m") && (selectTo.value === "mm")) {outputData.value = inputData.value * 1000;}
    else if ((selectFrom.value === "m") && (selectTo.value === "cm")) {outputData.value = inputData.value * 100;}
    else if ((selectFrom.value === "m") && (selectTo.value === "km")) {outputData.value = inputData.value / 1000;}
    else if ((selectFrom.value === "m") && (selectTo.value === "mi")) {outputData.value = inputData.value / 1609;}
    else if ((selectFrom.value === "m") && (selectTo.value === "yd")) {outputData.value = inputData.value * 1.094;}
    else if ((selectFrom.value === "m") && (selectTo.value === "ft")) {outputData.value = inputData.value * 3.281;}
    else if ((selectFrom.value === "m") && (selectTo.value === "in")) {outputData.value = inputData.value * 39.37;}

    else if ((selectFrom.value === "km") && (selectTo.value === "nm")) {outputData.value = inputData.value * 1000000000000;}
    else if ((selectFrom.value === "km") && (selectTo.value === "µm")) {outputData.value = inputData.value * 1e+9;}
    else if ((selectFrom.value === "km") && (selectTo.value === "mm")) {outputData.value = inputData.value * 1e+6;}
    else if ((selectFrom.value === "km") && (selectTo.value === "cm")) {outputData.value = inputData.value * 100000;}
    else if ((selectFrom.value === "km") && (selectTo.value === "m")) {outputData.value = inputData.value * 1000;}
    else if ((selectFrom.value === "km") && (selectTo.value === "mi")) {outputData.value = inputData.value / 1.609;}
    else if ((selectFrom.value === "km") && (selectTo.value === "yd")) {outputData.value = inputData.value * 1094;}
    else if ((selectFrom.value === "km") && (selectTo.value === "ft")) {outputData.value = inputData.value * 3281;}
    else if ((selectFrom.value === "km") && (selectTo.value === "in")) {outputData.value = inputData.value * 39370;}

    else if ((selectFrom.value === "mi") && (selectTo.value === "nm")) {outputData.value = inputData.value * 1609000000000;}
    else if ((selectFrom.value === "mi") && (selectTo.value === "µm")) {outputData.value = inputData.value * 1609000000;}
    else if ((selectFrom.value === "mi") && (selectTo.value === "mm")) {outputData.value = inputData.value * 1609000;}
    else if ((selectFrom.value === "mi") && (selectTo.value === "cm")) {outputData.value = inputData.value * 160900;}
    else if ((selectFrom.value === "mi") && (selectTo.value === "m")) {outputData.value = inputData.value * 1609;}
    else if ((selectFrom.value === "mi") && (selectTo.value === "km")) {outputData.value = inputData.value * 1.609;}
    else if ((selectFrom.value === "mi") && (selectTo.value === "yd")) {outputData.value = inputData.value * 1760;}
    else if ((selectFrom.value === "mi") && (selectTo.value === "ft")) {outputData.value = inputData.value * 5280;}
    else if ((selectFrom.value === "mi") && (selectTo.value === "in")) {outputData.value = inputData.value * 63360;}

    else if ((selectFrom.value === "yd") && (selectTo.value === "nm")) {outputData.value = inputData.value * 914400000;}
    else if ((selectFrom.value === "yd") && (selectTo.value === "µm")) {outputData.value = inputData.value * 914400;}
    else if ((selectFrom.value === "yd") && (selectTo.value === "mm")) {outputData.value = inputData.value * 914.4;}
    else if ((selectFrom.value === "yd") && (selectTo.value === "cm")) {outputData.value = inputData.value * 91.44;}
    else if ((selectFrom.value === "yd") && (selectTo.value === "m")) {outputData.value = inputData.value / 1.094;}
    else if ((selectFrom.value === "yd") && (selectTo.value === "km")) {outputData.value = inputData.value / 1094;}
    else if ((selectFrom.value === "yd") && (selectTo.value === "mi")) {outputData.value = inputData.value / 1760;}
    else if ((selectFrom.value === "yd") && (selectTo.value === "ft")) {outputData.value = inputData.value * 3;}
    else if ((selectFrom.value === "yd") && (selectTo.value === "in")) {outputData.value = inputData.value * 36;}

    else if ((selectFrom.value === "ft") && (selectTo.value === "nm")) {outputData.value = inputData.value * 3.048e+8;}
    else if ((selectFrom.value === "ft") && (selectTo.value === "µm")) {outputData.value = inputData.value * 304800;}
    else if ((selectFrom.value === "ft") && (selectTo.value === "mm")) {outputData.value = inputData.value * 304.8;}
    else if ((selectFrom.value === "ft") && (selectTo.value === "cm")) {outputData.value = inputData.value * 30.48;}
    else if ((selectFrom.value === "ft") && (selectTo.value === "m")) {outputData.value = inputData.value / 3.281;}
    else if ((selectFrom.value === "ft") && (selectTo.value === "km")) {outputData.value = inputData.value / 3281;}
    else if ((selectFrom.value === "ft") && (selectTo.value === "mi")) {outputData.value = inputData.value / 5280;}
    else if ((selectFrom.value === "ft") && (selectTo.value === "yd")) {outputData.value = inputData.value / 3;}
    else if ((selectFrom.value === "ft") && (selectTo.value === "in")) {outputData.value = inputData.value * 12;}

    else if ((selectFrom.value === "in") && (selectTo.value === "nm")) {outputData.value = inputData.value * 2.54e+7;}
    else if ((selectFrom.value === "in") && (selectTo.value === "µm")) {outputData.value = inputData.value * 25400;}
    else if ((selectFrom.value === "in") && (selectTo.value === "mm")) {outputData.value = inputData.value * 25.4;}
    else if ((selectFrom.value === "in") && (selectTo.value === "cm")) {outputData.value = inputData.value * 2.54;}
    else if ((selectFrom.value === "in") && (selectTo.value === "m")) {outputData.value = inputData.value / 39.37;}
    else if ((selectFrom.value === "in") && (selectTo.value === "km")) {outputData.value = inputData.value / 39370;}
    else if ((selectFrom.value === "in") && (selectTo.value === "mi")) {outputData.value = inputData.value / 63360;}
    else if ((selectFrom.value === "in") && (selectTo.value === "yd")) {outputData.value = inputData.value / 36;}
    else if ((selectFrom.value === "in") && (selectTo.value === "ft")) {outputData.value = inputData.value / 12;}

    let toUnit = document.getElementById("to").value;
    document.getElementById("output-label").innerHTML = toUnit;
}
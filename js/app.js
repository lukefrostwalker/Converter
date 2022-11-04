const inputData = document.querySelector("#input");
const selectFrom = document.querySelector("#from");
const selectTo = document.querySelector("#to");
const outputData = document.querySelector("#output");

function conversion() {
    if (
        (selectFrom.value === "nanometer") && (selectTo.value === "nanometer") ||
        (selectFrom.value === "micrometer") && (selectTo.value === "micrometer") ||
        (selectFrom.value === "millimeter") && (selectTo.value === "millimeter") ||
        (selectFrom.value === "centimeter") && (selectTo.value === "centimeter") ||
        (selectFrom.value === "meter") && (selectTo.value === "meter") ||
        (selectFrom.value === "kilometer") && (selectTo.value === "kilometer") ||
        (selectFrom.value === "mile") && (selectTo.value === "mile") ||
        (selectFrom.value === "yard") && (selectTo.value === "yard") ||
        (selectFrom.value === "foot") && (selectTo.value === "foot") ||
        (selectFrom.value === "inch") && (selectTo.value === "inch")
    ) {
        outputData.value = inputData.value;
    }
    else if ((selectFrom.value === "nanometer") && (selectTo.value === "micrometer")) {outputData.value = inputData.value / 1000;}
    else if ((selectFrom.value === "nanometer") && (selectTo.value === "millimeter")) {outputData.value = inputData.value / 1000000;}
    else if ((selectFrom.value === "nanometer") && (selectTo.value === "centimeter")) {outputData.value = inputData.value / 10000000;}
    else if ((selectFrom.value === "nanometer") && (selectTo.value === "meter")) {outputData.value = inputData.value / 1000000000;}
    else if ((selectFrom.value === "nanometer") && (selectTo.value === "kilometer")) {outputData.value = inputData.value / 1000000000000;}
    else if ((selectFrom.value === "nanometer") && (selectTo.value === "mile")) {outputData.value = inputData.value / 1609000000000;}
    else if ((selectFrom.value === "nanometer") && (selectTo.value === "yard")) {outputData.value = inputData.value / 914400000;}
    else if ((selectFrom.value === "nanometer") && (selectTo.value === "foot")) {outputData.value = inputData.value / 304800000;}
    else if ((selectFrom.value === "nanometer") && (selectTo.value === "inch")) {outputData.value = inputData.value / 25400000;}

    else if ((selectFrom.value === "micrometer") && (selectTo.value === "nanometer")) {outputData.value = inputData.value * 1000;}
    else if ((selectFrom.value === "micrometer") && (selectTo.value === "millimeter")) {outputData.value = inputData.value / 1000;}
    else if ((selectFrom.value === "micrometer") && (selectTo.value === "centimeter")) {outputData.value = inputData.value / 10000;}
    else if ((selectFrom.value === "micrometer") && (selectTo.value === "meter")) {outputData.value = inputData.value / 1000000;}
    else if ((selectFrom.value === "micrometer") && (selectTo.value === "kilometer")) {outputData.value = inputData.value / 1000000000;}
    else if ((selectFrom.value === "micrometer") && (selectTo.value === "mile")) {outputData.value = inputData.value / 1609000000;}
    else if ((selectFrom.value === "micrometer") && (selectTo.value === "yard")) {outputData.value = inputData.value / 914400;}
    else if ((selectFrom.value === "micrometer") && (selectTo.value === "foot")) {outputData.value = inputData.value / 304800;}
    else if ((selectFrom.value === "micrometer") && (selectTo.value === "inch")) {outputData.value = inputData.value / 25400;}

    else if ((selectFrom.value === "millimeter") && (selectTo.value === "nanometer")) {outputData.value = inputData.value * 1000000;}
    else if ((selectFrom.value === "millimeter") && (selectTo.value === "micrometer")) {outputData.value = inputData.value * 1000;}
    else if ((selectFrom.value === "millimeter") && (selectTo.value === "centimeter")) {outputData.value = inputData.value / 10;}
    else if ((selectFrom.value === "millimeter") && (selectTo.value === "meter")) {outputData.value = inputData.value / 1000;}
    else if ((selectFrom.value === "millimeter") && (selectTo.value === "kilometer")) {outputData.value = inputData.value / 1000000;}
    else if ((selectFrom.value === "millimeter") && (selectTo.value === "mile")) {outputData.value = inputData.value / 1609000;}
    else if ((selectFrom.value === "millimeter") && (selectTo.value === "yard")) {outputData.value = inputData.value / 914.4;}
    else if ((selectFrom.value === "millimeter") && (selectTo.value === "foot")) {outputData.value = inputData.value / 304.8;}
    else if ((selectFrom.value === "millimeter") && (selectTo.value === "inch")) {outputData.value = inputData.value / 25.4;}

    else if ((selectFrom.value === "centimeter") && (selectTo.value === "nanometer")) {outputData.value = inputData.value * 10000000;}
    else if ((selectFrom.value === "centimeter") && (selectTo.value === "micrometer")) {outputData.value = inputData.value * 10000;}
    else if ((selectFrom.value === "centimeter") && (selectTo.value === "millimeter")) {outputData.value = inputData.value * 10;}
    else if ((selectFrom.value === "centimeter") && (selectTo.value === "meter")) {outputData.value = inputData.value / 100;}
    else if ((selectFrom.value === "centimeter") && (selectTo.value === "kilometer")) {outputData.value = inputData.value / 100000;}
    else if ((selectFrom.value === "centimeter") && (selectTo.value === "mile")) {outputData.value = inputData.value / 160900;}
    else if ((selectFrom.value === "centimeter") && (selectTo.value === "yard")) {outputData.value = inputData.value / 91.44;}
    else if ((selectFrom.value === "centimeter") && (selectTo.value === "foot")) {outputData.value = inputData.value / 30.48;}
    else if ((selectFrom.value === "centimeter") && (selectTo.value === "inch")) {outputData.value = inputData.value / 2.54;}

    else if ((selectFrom.value === "meter") && (selectTo.value === "nanometer")) {outputData.value = inputData.value * 1000000000;}
    else if ((selectFrom.value === "meter") && (selectTo.value === "micrometer")) {outputData.value = inputData.value * 1000000;}
    else if ((selectFrom.value === "meter") && (selectTo.value === "millimeter")) {outputData.value = inputData.value * 1000;}
    else if ((selectFrom.value === "meter") && (selectTo.value === "centimeter")) {outputData.value = inputData.value * 100;}
    else if ((selectFrom.value === "meter") && (selectTo.value === "kilometer")) {outputData.value = inputData.value / 1000;}
    else if ((selectFrom.value === "meter") && (selectTo.value === "mile")) {outputData.value = inputData.value / 1609;}
    else if ((selectFrom.value === "meter") && (selectTo.value === "yard")) {outputData.value = inputData.value * 1.094;}
    else if ((selectFrom.value === "meter") && (selectTo.value === "foot")) {outputData.value = inputData.value * 3.281;}
    else if ((selectFrom.value === "meter") && (selectTo.value === "inch")) {outputData.value = inputData.value * 39.37;}

    else if ((selectFrom.value === "kilometer") && (selectTo.value === "nanometer")) {outputData.value = inputData.value * 1000000000000;}
    else if ((selectFrom.value === "kilometer") && (selectTo.value === "micrometer")) {outputData.value = inputData.value * 1e+9;}
    else if ((selectFrom.value === "kilometer") && (selectTo.value === "millimeter")) {outputData.value = inputData.value * 1e+6;}
    else if ((selectFrom.value === "kilometer") && (selectTo.value === "centimeter")) {outputData.value = inputData.value * 100000;}
    else if ((selectFrom.value === "kilometer") && (selectTo.value === "meter")) {outputData.value = inputData.value * 1000;}
    else if ((selectFrom.value === "kilometer") && (selectTo.value === "mile")) {outputData.value = inputData.value / 1.609;}
    else if ((selectFrom.value === "kilometer") && (selectTo.value === "yard")) {outputData.value = inputData.value * 1094;}
    else if ((selectFrom.value === "kilometer") && (selectTo.value === "foot")) {outputData.value = inputData.value * 3281;}
    else if ((selectFrom.value === "kilometer") && (selectTo.value === "inch")) {outputData.value = inputData.value * 39370;}

    else if ((selectFrom.value === "mile") && (selectTo.value === "nanometer")) {outputData.value = inputData.value * 1609000000000;}
    else if ((selectFrom.value === "mile") && (selectTo.value === "micrometer")) {outputData.value = inputData.value * 1609000000;}
    else if ((selectFrom.value === "mile") && (selectTo.value === "millimeter")) {outputData.value = inputData.value * 1609000;}
    else if ((selectFrom.value === "mile") && (selectTo.value === "centimeter")) {outputData.value = inputData.value * 160900;}
    else if ((selectFrom.value === "mile") && (selectTo.value === "meter")) {outputData.value = inputData.value * 1609;}
    else if ((selectFrom.value === "mile") && (selectTo.value === "kilometer")) {outputData.value = inputData.value * 1.609;}
    else if ((selectFrom.value === "mile") && (selectTo.value === "yard")) {outputData.value = inputData.value * 1760;}
    else if ((selectFrom.value === "mile") && (selectTo.value === "foot")) {outputData.value = inputData.value * 5280;}
    else if ((selectFrom.value === "mile") && (selectTo.value === "inch")) {outputData.value = inputData.value * 63360;}

    else if ((selectFrom.value === "yard") && (selectTo.value === "nanometer")) {outputData.value = inputData.value * 914400000;}
    else if ((selectFrom.value === "yard") && (selectTo.value === "micrometer")) {outputData.value = inputData.value * 914400;}
    else if ((selectFrom.value === "yard") && (selectTo.value === "millimeter")) {outputData.value = inputData.value * 914.4;}
    else if ((selectFrom.value === "yard") && (selectTo.value === "centimeter")) {outputData.value = inputData.value * 91.44;}
    else if ((selectFrom.value === "yard") && (selectTo.value === "meter")) {outputData.value = inputData.value / 1.094;}
    else if ((selectFrom.value === "yard") && (selectTo.value === "kilometer")) {outputData.value = inputData.value / 1094;}
    else if ((selectFrom.value === "yard") && (selectTo.value === "mile")) {outputData.value = inputData.value / 1760;}
    else if ((selectFrom.value === "yard") && (selectTo.value === "foot")) {outputData.value = inputData.value * 3;}
    else if ((selectFrom.value === "yard") && (selectTo.value === "inch")) {outputData.value = inputData.value * 36;}

    else if ((selectFrom.value === "foot") && (selectTo.value === "nanometer")) {outputData.value = inputData.value * 3.048e+8;}
    else if ((selectFrom.value === "foot") && (selectTo.value === "micrometer")) {outputData.value = inputData.value * 304800;}
    else if ((selectFrom.value === "foot") && (selectTo.value === "millimeter")) {outputData.value = inputData.value * 304.8;}
    else if ((selectFrom.value === "foot") && (selectTo.value === "centimeter")) {outputData.value = inputData.value * 30.48;}
    else if ((selectFrom.value === "foot") && (selectTo.value === "meter")) {outputData.value = inputData.value / 3.281;}
    else if ((selectFrom.value === "foot") && (selectTo.value === "kilometer")) {outputData.value = inputData.value / 3281;}
    else if ((selectFrom.value === "foot") && (selectTo.value === "mile")) {outputData.value = inputData.value / 5280;}
    else if ((selectFrom.value === "foot") && (selectTo.value === "yard")) {outputData.value = inputData.value / 3;}
    else if ((selectFrom.value === "foot") && (selectTo.value === "inch")) {outputData.value = inputData.value * 12;}

    else if ((selectFrom.value === "inch") && (selectTo.value === "nanometer")) {outputData.value = inputData.value * 2.54e+7;}
    else if ((selectFrom.value === "inch") && (selectTo.value === "micrometer")) {outputData.value = inputData.value * 25400;}
    else if ((selectFrom.value === "inch") && (selectTo.value === "millimeter")) {outputData.value = inputData.value * 25.4;}
    else if ((selectFrom.value === "inch") && (selectTo.value === "centimeter")) {outputData.value = inputData.value * 2.54;}
    else if ((selectFrom.value === "inch") && (selectTo.value === "meter")) {outputData.value = inputData.value / 39.37;}
    else if ((selectFrom.value === "inch") && (selectTo.value === "kilometer")) {outputData.value = inputData.value / 39370;}
    else if ((selectFrom.value === "inch") && (selectTo.value === "mile")) {outputData.value = inputData.value / 63360;}
    else if ((selectFrom.value === "inch") && (selectTo.value === "yard")) {outputData.value = inputData.value / 36;}
    else if ((selectFrom.value === "inch") && (selectTo.value === "foot")) {outputData.value = inputData.value / 12;}
}

selectFrom.addEventListener('change', conversion);
selectTo.addEventListener('change', conversion);
inputData.addEventListener('input', conversion);

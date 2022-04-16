function methodUno(inpStr) {
    let res = "";

    for (let i = inpStr.length - 1; i >= 0; i--) {
        res += inpStr[i];
    }

    return res;
}

function methodDue(inpStr) {
    let res = "";
    while (inpStr.length > 0) {
        res += inpStr[inpStr.length - 1];
        inpStr = inpStr.substring(0, inpStr.length - 1);
    }

    return res;
}

function methodTre(inpStr) {
    const arrInpStr = inpStr.split('');
    let res = "";

    while (arrInpStr.length > 0) {
        res += arrInpStr.pop();
    }

    return res;
}

function methodQuattro(inpStr) {
    let temp;
    const arrInpStr = inpStr.split('');

    for (let i = 0; i < Math.floor(arrInpStr.length / 2); i++) {
        temp = arrInpStr[i];
        arrInpStr[i] = arrInpStr[arrInpStr.length - i - 1];
        arrInpStr[arrInpStr.length - i - 1] = temp;
    }

    return arrInpStr.join('');
}

function methodCinque(inpStr) {
    return inpStr.split('').reverse().join('');
}

function methodSei(inpStr) {
    if (inpStr.length === 1) {
        return inpStr;
    }

    return inpStr[inpStr.length - 1] + methodSei(inpStr.substring(0, inpStr.length - 1))
}

function methodSette(inpStr) {
    if (inpStr.length === 1) {
        return inpStr;
    }

    return inpStr[inpStr.length - 1] + methodSei(inpStr.substring(0, inpStr.length - 1))
}

function methodOtto(inpStr) {
    if (inpStr.length === 1) {
        return inpStr;
    }

    return methodOtto(inpStr.substring(1)) + inpStr[0];
}

console.log(methodUno("hello, world, i hate camel case"));
console.log(methodDue("hello, world, i hate camel case"));
console.log(methodTre("hello, world, i hate camel case"));
console.log(methodQuattro("hello, world, i hate camel case"));
console.log(methodCinque("hello, world, i hate camel case"));
console.log(methodSei("hello, world, i hate camel case"));
console.log(methodSette("hello, world, i hate camel case"));



function add(i) {

    if (i == 1) {
        return 1;
    }

    return i + add(i - 1);

}

console.log(add(5));
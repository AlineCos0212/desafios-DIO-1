let totalItems = gets(),
    items = [],
    pares = [],
    impares = [];

for (let i = 0; i < totalItems; i++) {
    items.push(parseInt(gets()));
    
    if (items[i] % 2 == 0) pares.push(items[i]);
    else impares.push(items[i]);
}

pares = ordenaArray(pares);
impares = ordenaArray(impares);

for (item of pares) {
    console.log(item);
}

for (item of impares.reverse()) {
    console.log(item);
}

function ordenaArray(array) {
    array = array.sort(function (a, b) {
        return a - b;
    })

    return array;
}
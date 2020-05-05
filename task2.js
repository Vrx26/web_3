// Реализуйте функцию sum

function sum() {
    var result = 0;
    for (i in this){
        result += this[i];
    }
    return result;
}

console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));

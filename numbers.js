function generateArray(start, end){
    let array = [];
    for (let i=start; i <= end; i++){
        array.push(i);
    }
    return array;
}
console.log(generateArray(4,7))
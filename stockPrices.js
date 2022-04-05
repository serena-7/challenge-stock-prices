function best(arr){
    differences = [];
    for(let i = 1; i < arr.length; i++){
        for(let j = 0; j < i; j++){
            differences.push(arr[i]-arr[j]);
        }
    }
    // console.log(differences)
    return Math.max.apply(null, differences);
}

console.log(best([15, 10, 20, 22, 1, 9]));
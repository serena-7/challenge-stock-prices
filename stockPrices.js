function best(arr){
    let difference = 0;
    let big = 0;
    let small = 0;
    for(let i = 1; i < arr.length; i++){
        for(let j = 0; j < i; j++){
            if(arr[i]-arr[j] > difference){
                difference = arr[i] - arr[j];
                big = arr[i];
                small = arr[j];
            }
        }
    }
    // console.log(differences)
    console.log(`${difference} - buy at $${small}, sell at $${big}`);
}

best([15, 10, 20, 22, 1, 9]);
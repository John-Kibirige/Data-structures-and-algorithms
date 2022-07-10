// https://www.hackerrank.com/challenges/icecream-parlor/problem

function icecreamParlor(m, arr) {
    let i = 0;
    while(i < arr.length) {
        let pairValue = m - arr[i];
        for(let j = 0; j<arr.length; j++){
            let remPair = arr[j];
            if(pairValue === remPair && j !== i) {
                return [i+1, j+1];
            }
        }
        i++
    }
   return [0, 0]
}

// runs at log(n^2); 

 
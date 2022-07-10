// https://www.hackerrank.com/challenges/sherlock-and-array/problem?isFullScreen=true

// this is like my naive solution
function balancedSums(arr) {
    /*
        loop through from the start to the value just before the current element
        loop through from the next value to the end 
        get sum before
        get sum after
        compare these
    */

    let leftSum = 0;
    let len = arr.length;

    for(let i = 0; i<len; i++) {
        if((i - 1) >= 0) {
            leftSum += arr[i-1]
        }
        let rightSum = 0;
        for(let j = i+1; j<len; j++){
            rightSum += arr[j];
        }

        if(leftSum === rightSum) {
            return 'YES'
        }
    }

    return 'NO'

}

// code not optimal

/* 
    Explanation(using math logic) - let's denote a middle integer with y and both
    right and left side as x because there sum is same. Now the equation will look like ->
    1) x + y + x = sum of array
    2) 2x + y = sum
    3) 2x = sum - y
*/

function balancedSums(arr) {
    let sumOfArray = arr.reduce((acc, curr) => acc += curr);
    let leftSum = 0;
    let len = arr.length;

    for(let i = 0; i<len; i++) {
        if((i - 1) >= 0) {
            leftSum += arr[i-1]
        }
        let currentElement = arr[i];
        if(2*leftSum === sumOfArray - currentElement) {
            return 'YES'
        }
    }

    return 'NO'
}
// https://www.hackerrank.com/challenges/missing-numbers/problem?isFullScreen=true

function missingNumbers(arr, brr) {
    const memoBrr = {};
    const memoArr = {};

    brr.forEach(number => {
        if(!(number in memoBrr)) memoBrr[number] = 1;
        else memoBrr[number]++;
    });

    arr.forEach(num => {
        if(!(num in memoArr)) memoArr[num] = 1;
        else memoArr[num]++;
    })

    let set = new Set();

    for(let i = 0; i<brr.length; i++) {
        let el = brr[i];
        if(!memoArr[el]) set.add(el);
        if((memoBrr[el] - memoArr[el]) > 0 ) set.add(el)
    }

    let arraySet = Array.from(set);
    arraySet = arraySet.sort((a,b) => a - b);
    return arraySet;
}
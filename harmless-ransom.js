'use strict'
//O(1)
function logAll(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

// logAll([1, 2, 3, 4, 5])
// logAll([1, 2, 3, 4, 5, 6])
// logAll([1, 2, 3, 4, 5, 6, 7])

//O(n) 9

const addAndLog = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i] + arr[j])
        }
    }
}

 console.log(addAndLog(['A','B','C']))

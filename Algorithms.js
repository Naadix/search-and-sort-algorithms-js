//Function factorial iterative

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}
// console.log(factorial(5));
// console.log(factorial(4));
// console.log(factorial(1));
// console.log(factorial(0));
// console.log(factorial(-5)); 


// --------------------------------------------

//Function factorial recursive

function factRec(n) {
    if (n < 2) {
        return 1;
    } else {
        return factRec(n - 1) * n
    }
}
// console.log(factRec(5));
// console.log(factRec(4));
// console.log(factRec(1));
// console.log(factRec(0));
// console.log(factRec(-5));

// --------------------------------------------


//function prime number
function prime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
// console.log(prime(5));
// console.log(prime(2));
// console.log(prime(7));
// console.log(prime(10));


// -------------------------------------------- Linear Search Algorithms


function linarSearch(numbers, n) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == n) {
            return i;
        }
    }
    return -1;
}
// console.log(linarSearch([2,4,3,1,5],3));
// console.log(linarSearch([2,4,3,1,5],5));
// console.log(linarSearch([2,4,3,1,5],2));
// console.log(linarSearch([2,4,3,1,5],4));
// console.log(linarSearch([2,4,3,1,5],1));
// console.log(linarSearch([2,4,3,1,5],11));

// -------------------------------------------- Binary Search Algorithm



function binarySearch(numbers, n) {
    let lefIdx = 0;
    let rightIdx = numbers.length - 1;
    while (lefIdx <= rightIdx) {
        let midIdx = Math.floor((rightIdx + lefIdx) / 2);
        if (numbers[midIdx] === n) return midIdx;
        if (n > numbers[midIdx]) {
            lefIdx = midIdx + 1;
        } else {
            rightIdx = midIdx - 1;
        }
    }
}
// console.log(binarySearch([1,2,3,4,5,6,7,8],6));
// console.log(binarySearch([1,2,3,4,5,6,7,8],8));
// console.log(binarySearch([1,2,3,4,5,6,7,8],1));

// -------------------------------------------- Bubble Sort Algorithm 

function bubbleSorting(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}
// bubbleSorting([2,1,4,5,4,8,3]);

// -------------------------------------------- Selction Sort Algorithm

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    console.log(arr)
}
// selectionSort([22,12,10,4,2,15,1,4,23,17]);


// -------------------------------------------- Insertion Sort Algorithm 


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let insertNumber = arr[i];
        let j = i - 1;
        while (j > -1 && arr[j] > insertNumber) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = insertNumber;
    }
    console.log(arr);
}
// insertionSort([5,4,2,7,6]);

// -------------------------------------------- Merge Sort Algorithm 

const numbers = [55, 10, 7, 1, 8];
function mergeSort(arr) {
    if (arr.length < 2) return arr;
    else {
        let mid = Math.floor(arr.length / 2);
        const leftArray = arr.slice(0, mid);
        const rightArray = arr.slice(mid);
        return merge(mergeSort(leftArray), mergeSort(rightArray));
    }

}
function merge(leftArray, rightArray) {
    const arraySorted = [];
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            arraySorted.push(leftArray.shift());
        } else {
            arraySorted.push(rightArray.shift());
        }
    }
    return [...arraySorted, ...leftArray, ...rightArray] // add element left or right at arraysorted 
}
// console.log(mergeSort(numbers));

// -------------------------------------------- Quich Sort Algorithm 

function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        let pivot = arr[arr.length - 1];
        let arrRight = [];
        let arrLift = [];
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > pivot) {
                arrRight.push(arr[i]);
            } else {
                arrLift.push(arr[i]);
            }
        }
        return [...quickSort(arrRight), pivot, ...quickSort(arrLift)]
    }

}
// console.log(quickSort(numbers));
// console.log(twoSum(nums,9));

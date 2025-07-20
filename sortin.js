function bubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j + 1] < arr[j]) { // ascending order
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
//const array = [3, 5, 8, 4, 9];
//const sorted = bubbleSort(array);
//console.log(sorted); 
///selection sort , select the smallest element ,the index of 
//the smallest element and move i to the next
function selection(arr) {
    for (var i = 0; i < arr.length; i++) {
        var minindex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minindex]) {
                minindex = j;
            }
        }
        if (minindex !== i) {
            var temp = arr[i];
            arr[i] = arr[minindex];
            arr[minindex] = temp;
        }
    }
    return arr;
}
//const arr = [3,-2,4,-45,0]
//const select=selection(arr)
//console.log(select)
//insertion sort
// function insertion(arr:number[]):number[]{
//     for(let i = 1; i<arr.length; i++){
//       let index = i;
//       let beforeidx = i-1
//       while(beforeidx >= 0 && arr[beforeidx] > arr[index]){    
//          arr[beforeidx + 1] = arr[beforeidx]
//          beforeidx--
//       }
//       arr[beforeidx + 1] = index;
//     }
//     return arr
// }
// const arr1 = [-6,2,0,1,-65]
// const insert = insertion(arr1)
// console.log(insert)
function insertion(arr) {
    for (var i = 0; i < arr.length; i++) {
        var current = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
var arr1 = [-6, 2, 0, 1, -65];
var insert = insertion(arr1);
console.log(insert);
function insertionSort(arr) {
    // Loop through each element starting from the second one :
    //cos we dont want i and j to begin on same index
    for (var i = 1; i < arr.length; i++) {
        var current = arr[i]; // Pick the current "book"
        var j = i - 1; // Start comparing with previous elements
        // Shift larger elements to the right
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // Move larger element one step ahead
            j--;
        }
        arr[j + 1] = current; // Place current element in the right spot
    }
    return arr;
}
// Test it out
var unsorted = [-64, 34, -25, 0, 12, 22];
console.log(insertionSort(unsorted)); // [12, 22, 25, 34, 64]

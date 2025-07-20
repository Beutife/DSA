function bubbleSort(arr: number[]): number[] {
    // Loop through the array multiple times
    for (let i = 0; i < arr.length - 1; i++) {
        // Inner loop does the actual comparison and swapping
        // arr.length - i - 1 ensures we avoid comparing the sorted part at the end
        for (let j = 0; j < arr.length - i - 1; j++) {
            // Compare adjacent elements and swap if needed
            if (arr[j + 1] < arr[j]) { // Sorting in ascending order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const array = [3, 5, 8, 4, 9];
const sorted = bubbleSort(array);
console.log(sorted); 

///selection sort , select the smallest element ,the index of 
//the smallest element and move i to the next

function selection(arr:number[]):number[]{

    for(let i =0; i < arr.length; i++){
        let minindex = i;
        for(let j = i+1; j<arr.length; j++){
            if(arr[j] < arr[minindex]){
                minindex = j
            }
        }
                if(minindex !== i){
            let temp = arr[i];
            arr[i] = arr[minindex];
            arr[minindex] = temp
        }
    } 
    return arr
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


function insertion(arr:number[]):number[]{
    for(let i = 0; i<arr.length;i++){
        let current = arr[i]
        let j = i - 1
        while(j>=0 && arr[j]> current){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1]= current;
    }
    return arr
}

const arr1 = [-6,2,0,1,-65]
const insert = insertion(arr1)
console.log(insert)



function insertionSort(arr: number[]): number[] {
  // Loop through each element starting from the second one :
  // cos we dont want i and j to begin on same index so we can compare
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; // Pick the current "book"  (array of i = 34)
    let j = i - 1; //  (1-1: j = 0)
    
    // Shifting larger elements to the right
    // this loop works when both condition are satisfied 
    // here j = 0 && array of j = -64 (for this, condition wont run cos 
    // arr[j] is not greater than current(34)), first loop runs again
    // i = 2, array of i = -25, j= 1, arr[j] = 34(while condition met) 
    while (j >= 0 && arr[j] > current) {
      //now we move 34 to the space of -25,
      // Move larger element one step ahead [-64, space, 34, ...]
      arr[j + 1] = arr[j]; 

      j--; // j decreases till it gets to -1 and then condition fails
    }
    // Place current element in the right spot[-64, -25, 34, 0,...]starts from first loop
    arr[j + 1] = current; 
  }
  return arr; 
}
// Test it out
const unsorted = [-64, 34, -25, 0, 12, 22];
console.log(insertionSort(unsorted)); // [12, 22, 25, 34, 64]

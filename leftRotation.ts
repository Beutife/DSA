class LeftRotation{
    rotateArray:number[];

    constructor(rotateArray:number[]){
        this.rotateArray = rotateArray;
    }

    rotateLeft(d:number){
        const result: number[] = [];
        let n = this.rotateArray.length

        for(let i = 0; i < n; i++){
            const lastNo = (i+d)%n;
            result.push(this.rotateArray[lastNo])
        }

        return result;
    }
}

const myArray = new LeftRotation([1, 2, 3, 4, 5]);
console.log(myArray.rotateLeft(2));
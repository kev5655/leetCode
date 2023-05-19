// Bad Time O(n2) Space O(i)
function twoSum(nums: number[], target: number): number[] {
    let result: number[] = [];
    nums.forEach((n1, i1) => {
        nums.forEach((n2, i2) => {
            if (i1 == i2) return;
            if (n1 + n2 === target) result = [i1, i2];
        });
    });

    return result;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3,2,4], 6));

function twoSum1(nums: number[], target: number): number[] {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target) return [i, j]
        }
    }
    return [0,0];
}

console.log(twoSum1([2, 7, 11, 15], 9));
console.log(twoSum1([3,2,4], 6));

// Time O(n) Space O(n) With HashMap
function twoSum2(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for(let i = 0; i < nums.length; i++){
        const tobe = target - nums[i];
        const found = map.get(tobe)
        if(found !== undefined){
            return [i, found];
        }
        map.set(nums[i], i);

    }
    return [0,0]
}

console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([3,2,4], 6));

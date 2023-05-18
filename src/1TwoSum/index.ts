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
console.log(twoSum([2, 7, 11, 15], 9));

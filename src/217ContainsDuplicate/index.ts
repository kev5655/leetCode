// Bad
function containsDuplicate(nums: number[]): boolean {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j) continue;
            if (nums[i] === nums[j]) return true;
        }
    }
    return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));

function containsDuplicate1(nums: number[]): boolean {
    const unique = new Set(nums);
    return unique.size !== nums.length;
}

console.log(containsDuplicate1([1, 2, 3, 1]));
console.log(containsDuplicate1([1, 2, 3, 4]));

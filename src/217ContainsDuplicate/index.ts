// Time O(n2) Space O(i)
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

// Time O(n) Space O(n)
function containsDuplicate1(nums: number[]): boolean {
    const sorted = nums.sort();
    for(let i = 1; i < sorted.length; i++){
        if(sorted[i-1] === sorted[i]) return true;
    }
    return false
}


// Time O(n) Space O(n)
function containsDuplicate2(nums: number[]): boolean {
    const unique = new Set(nums);
    return unique.size !== nums.length;
}

console.log(containsDuplicate2([1, 2, 3, 1]));
console.log(containsDuplicate2([1, 2, 3, 4]));

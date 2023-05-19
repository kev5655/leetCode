// Time O(s+t) Space maybe O(s+t) with HashMap
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const sMap = s.split('').reduce((store, curr) => mapCounter(store, curr), new Map<string, number>());
    const tMap = t.split('').reduce((store, curr) => mapCounter(store, curr), new Map<string, number>());

    let allSame = true;
    console.log(sMap);
    console.log(tMap);

    sMap.forEach((value, key) => {
        const found = tMap.get(key);
        if (!found) allSame = false;
        if (found !== value) allSame = false;
    });

    return allSame;
}

const mapCounter = (store: Map<string, number>, curr: string) => {
    const found = store.get(curr);

    if (found) {
        store.set(curr, found + 1);
    } else {
        store.set(curr, 1);
    }

    return store;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('aacc', 'ccac'));


// Time O(nlogn) Space O(i) (it depends on the build in sort algo) With Sort
function isAnagram1(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const sSorted = s.split('').sort().join()
    const tSorted = t.split('').sort().join()

    return sSorted === tSorted

}

console.log(isAnagram1('anagram', 'nagaram'));
console.log(isAnagram1('rat', 'car'));
console.log(isAnagram1('aacc', 'ccac'));

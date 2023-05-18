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

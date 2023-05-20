function groupAnagrams(strs: string[]): string[][] {
    const mapList = strs.reduce((store, curr) => {
        const map: { [key: string]: number } = curr.split('').reduce((store, curr) => {
            let found = store[curr];
            store[curr] = found ? found + 1 : 1;

            return store;
        }, {} as { [key: string]: number });
        store.push(map);

        return store;
    }, new Array<{ [key: string]: number }>());
    console.log(mapList);

    const refLinks: { [key: number]: number[] } = {};

    for (let i = 0; i < mapList.length; i++) {
        for (let j = i + 1; j < mapList.length; j++) {
            const savedIndex = Object.values(refLinks).flatMap(x => x);
            if (savedIndex.find(x => x === i) !== undefined) continue;
            let isSame = mapComparer(mapList[i], mapList[j]);

            if (isSame) {
                refLinks[i] = refLinks[i] ? [...refLinks[i], j] : [j];
            }
        }
    }

    console.log('🚀 ~ file: index.ts:28 ~ groupAnagrams ~ refLinks:', refLinks);

    return [[]];
}

const mapComparer = (map1: { [key: string]: number }, map2: { [key: string]: number }): boolean => {
    if (Object.keys(map1).length !== Object.keys(map2).length) return false;
    let allSame = true;

    Object.entries(map1).forEach(([value, key]) => {
        const found = map2[value];
        if (!found || found !== key) allSame = false;
    });

    return allSame;
};

const buildStringFromMap = (map: { [key: string]: number }): string => {
    return Object.keys(map).join('');
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

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

    let refLinks: (number | undefined)[][] = [];

    for (let i = 0; i < mapList.length; i++) {
        let wasTrue = false;
        for (let j = i + 1; j < mapList.length; j++) {
            let isSame = mapComparer(mapList[i], mapList[j]);

            if (isSame) {
                wasTrue = true;
                refLinks[i] = refLinks[i] === undefined ? [i, j] : [...refLinks[i], j];
                // console.log('🚀 ~ file: index.ts:25 ~ groupAnagrams ~ refLinks:', i, refLinks);
            }
        }
    }
    for (let i = 0; i < refLinks.length - 1; i++) {
        const first = refLinks[i];
        const second = refLinks[i + 1];
        for (let j = i; j < refLinks[i].length; j++) {
            if (second.find(x => first[j])) {
                refLinks[i + 1] = [undefined];
                i++;
                break;
            }
        }
    }
    console.log('🚀 ~ file: index.ts:28 ~ groupAnagrams ~ refLinks:', refLinks);

    let refLinksNotUndefined: number[][] = refLinks.filter(function (element) {
        return element.find(x => x !== undefined) !== undefined;
    }) as number[][];
    console.log('🚀 ~ file: index.ts:28 ~ groupAnagrams ~ refLinks:', refLinksNotUndefined);

    const allIndexes: number[] = Array.from(Array(strs.length).keys());

    let notUsedIndexes: number[] | number[][] = allIndexes.filter(
        x => refLinksNotUndefined.flatMap(x => x).find(y => y === x) === undefined,
    );
    notUsedIndexes = notUsedIndexes.map(x => [x]);
    console.log('🚀 ~ file: index.ts:58 ~ groupAnagrams ~ notUsedIndexes:', notUsedIndexes);
    refLinksNotUndefined = [...refLinksNotUndefined, ...notUsedIndexes];
    console.log('🚀 ~ file: index.ts:61 ~ groupAnagrams ~ refLinksNotUndefined:', refLinksNotUndefined);

    const result: string[][] = [];

    for (let i = 0; i < refLinksNotUndefined.length; i++) {
        for (let j = 0; j < refLinksNotUndefined[i].length; j++) {
            if (result[i] === undefined) {
                result[i] = [''];
            }
            result[i][j] = strs[refLinksNotUndefined[i][j]];
        }
    }

    return result;
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

console.log(groupAnagrams(['hhhhu', 'tttti', 'tttit', 'hhhuh', 'hhuhh', 'tittt']));

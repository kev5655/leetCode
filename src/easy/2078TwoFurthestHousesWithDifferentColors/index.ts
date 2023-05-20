function maxDistance(colors: number[]): number {
    let maxDistance = 0;

    for (let i = 0; i < colors.length; i++) {
        let counter = 0;
        for (let j = i + 1; j < colors.length; j++) {
            counter++;

            if (colors[i] !== colors[j] && counter > maxDistance) {
                maxDistance = counter;
            }
        }
        counter = 0;
    }

    return maxDistance;
}

console.log(maxDistance([1, 1, 1, 6, 1, 1, 1]));
console.log(maxDistance([1, 8, 3, 8, 3]));
console.log(maxDistance([0, 1]));

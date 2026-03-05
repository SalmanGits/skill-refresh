const findDuplicates = (arr: number[]): number[] => {
    const dup = []
    const set = new Set()
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) {
            dup.push(arr[i])
        }
        else {
            set.add(arr[i])
        }
    }
    return dup
}

console.log(findDuplicates([1, 1, 2, 3, 4, 5, 5, 8]))
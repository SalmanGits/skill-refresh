const twoSum = (arr: number[], target: number): number[] | -1 => {
    const map: { [key: number]: number } = {}
    for (let i = 0; i < arr.length; i++) {
        const diff = target - arr[i]
        if (map[diff] !== undefined) {
            return [map[diff], i]
        }
        map[arr[i]] = i
    }

    return -1
}


console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4, 1], 6))
console.log(twoSum([3, 2, 5, 9], 6))
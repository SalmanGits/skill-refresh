const twoSum = (arr: number[], target: number): number[] => {
    const complement: { [key: number]: number } = {};

    for (let i = 0; i < arr.length; i++) {
        const diff = target - arr[i];
        if (complement[diff] !== undefined) {
            return [arr[i], diff];
        }
        complement[arr[i]] = i;
    }

    return [];
}

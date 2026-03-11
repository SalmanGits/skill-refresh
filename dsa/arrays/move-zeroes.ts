const moveZeroes = (nums: number[]) => {
    let write = 0

    for (let read = 0; read < nums.length; read++) {
        if (nums[read] !== 0) {
            [nums[write], nums[read]] = [nums[read], nums[write]]
            write++
        }
    }
    return nums

}

let nums = [0, 1, 0, 3, 12]

console.log(moveZeroes(nums))

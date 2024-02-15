const binarySearch = require("../src/algos/binarySearch")

describe("binarySearch", () => {
    test("it returns the index of a value in a sorted array", () => {
        const arr = [43, 76, 100, 400, 500, 600, 900]

        const index = binarySearch(arr, 900)
        

        expect(index).toBe(6)
    })
})
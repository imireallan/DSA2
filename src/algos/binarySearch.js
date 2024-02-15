module.exports = function binarySearch(arr, val) {

    let left = 0
    let right = arr.length - 1
    let middle

    while(left <= right) {
        middle = Math.floor((left + right) / 2)
        let middleValue = arr[middle]
        if(middleValue === val) return middle
        if(middleValue < val) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return -1
}
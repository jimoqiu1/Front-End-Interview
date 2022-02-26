
function heapSort(arr) {
  let len = arr.length
  if(len < 2) return arr
  buildHeap(arr, len)
  for(let i = len - 1; i > 0; i--) {
    swap(arr, 0, i)
    len--    // 最后一个已经排好序，长度减一
    heapify(arr, 0, len)
  }
  return arr
}

function buildHeap(arr, len) {
  for(let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, i, len)
  }
}

function heapify(arr, i, len) {
  let left = 2 * i + 1, right = 2 * i + 2, largest = i
  if(left < len && arr[left] > arr[largest]) {
    largest = left
  }
  if(right < len && arr[right] > arr[largest]) {
    largest = right
  }
  if(largest !== i) {
    swap(arr, i, largest)
    heapify(arr, largest, len)
  }
}

function swap(arr, i , j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

let arr = [3,6,5,2,7,8,4,2]
let res = heapSort(arr)
console.log(res)
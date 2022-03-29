var findAverage = function(nums) {
  // Code here
  let nums1 = nums.reduce((a, b) => a +b)
  return nums1/ nums.length
}

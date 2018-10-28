function sumOfOther(arr){
    let sum = 0;
    const result = [];
    for (let i = 0, len = arr.length; i < len; i++) sum += arr[i];
    for (let i = 0, len = arr.length; i < len; i++) result.push(sum - arr[i]);
    return result;
}
module.exports = sumOfOther;
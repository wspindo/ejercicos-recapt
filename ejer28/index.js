const nums = [6, 13, 1, 15, 5];
let mayoresA10 = [];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 10) {
        mayoresA10.push(nums[i]);
    }
}
alert(`Elementos mayores a 10: ${mayoresA10.join(", ")}`);

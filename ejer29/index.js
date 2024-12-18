const nums = [6, 13, 1, 15, 5];
let indicesImpares = [];
for (let i = 0; i < nums.length; i++) {
    if (i % 2 !== 0) {
        indicesImpares.push(nums[i]);
    }
}
alert(`Elementos en índices impares: ${indicesImpares.join(", ")}`);

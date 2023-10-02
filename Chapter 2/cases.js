const fact = (n) => (n > 1) ? n * fact(n - 1) : 1;
const combination = (n, r) => fact(n) / (fact(n - r) * fact(r));
const permutation = (n, r) => fact(n) / fact(n - r);
const multiCombination = (n, r) => combination(n + r - 1, r);
const multiPermutation = (n, r) => (r >= 1) ? n * multiPermutation(n, r - 1) : 1;

module.exports = {
    combination,
    permutation,
    multiCombination,
    multiPermutation,
};
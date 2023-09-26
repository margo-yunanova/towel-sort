// You should implement your task here.

module.exports = function towelSort(matrix) {
    return matrix === undefined
        ? []
        : matrix
              .map((item, index) => (index % 2 === 0 ? item : item.reverse()))
              .flat();
};

function findDepth(arr) {
    return Array.isArray(arr) ?
        1 + Math.max(...arr.map(findDepth))
        : 0;
}

export default  findDepth;
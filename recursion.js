function recursion(binaryTree) {
    let layer = 0;
    const result = [];
    (function treeWalk(node) {
      if (node.left) {
        layer += 1;
        treeWalk(node.left);
        layer -= 1;
      }
      if (node.right) {
        layer += 1;
        treeWalk(node.right);
        layer -= 1;
      }
      if (!result[layer]) {
        result[layer] = [];
      }
      result[layer].push(node.value);
    }(binaryTree));
    return result;
  }
  module.exports = recursion;
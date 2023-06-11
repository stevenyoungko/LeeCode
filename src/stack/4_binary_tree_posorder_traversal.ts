function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  const result = [];
  const stack = [root];
  while (stack.length) {
    const node = stack.pop()!;
    result.push(node.val);
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
  return result.reverse();
}

function postorderTraversal2(root: TreeNode | null): number[] {
  const res: number[] = [];
  const helper = (node: TreeNode | null) => {
    if (!node) {
      return;
    }
    node.left && helper(node.left);
    node.right && helper(node.right);
    res.push(node.val);
  };
  helper(root);
  return res;
}

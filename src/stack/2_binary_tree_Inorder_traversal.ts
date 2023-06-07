class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function inorderTraversal(root: TreeNode | null): number[] {
  let stack = [];
  let res = [];
  let current: TreeNode | null = root;
  while (current || stack.length !== 0) {
    // push all left nodes to the stack
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop()!;
    res.push(current.val);
    current = current.right;
  }
  return res;
}

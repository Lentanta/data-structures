import { BinarySearchTree } from "./BinarySearchTree.js";

const bst = new BinarySearchTree();
bst.insert(6);
bst.insert(3);
bst.insert(7);
bst.insert(2)
bst.insert(5)
bst.insert(4)
bst.insert(2)

console.log(bst)

const bst2 = new BinarySearchTree();
bst2.insertRecursive(3)
bst2.insertRecursive(2)
bst2.insertRecursive(1)
bst2.insertRecursive(5)

console.log(bst2)
console.log(bst2.find(1))
console.log(bst2.find(7))


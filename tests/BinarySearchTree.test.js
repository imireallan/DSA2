const BinarySearchTree = require("../src/BinarySearchTree")

describe.only("BinarySearchTree", () => {
    describe("insert", () => {
        test("it can insert a node to the tree", () => {
            const tree = new BinarySearchTree()

            tree.insert(10)
            tree.insert(15)
            tree.insert(5)
            tree.insert(22)
            tree.insert(6)
            tree.insert(6)


            expect(tree.root.value).toBe(10)
            expect(tree.root.right.value).toBe(15)
            expect(tree.root.left.value).toBe(5)
            expect(tree.root.right.right.value).toBe(22)
            expect(tree.root.left.right.value).toBe(6)

        })
    })
    describe("contains", () => {
        test("it can search if a node exists in the tree", () => {
            const tree = new BinarySearchTree()

            tree.insert(10)
            tree.insert(15)
            tree.insert(5)

            const result1 = tree.contains(10)
            const result2 = tree.contains(55)


            expect(result1).toBeTruthy()
            expect(result2).toBeFalsy()

        })
    })
})
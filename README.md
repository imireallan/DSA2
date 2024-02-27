### STACKS

- Abstract data structure. Just a concept.
- A **LIFO** data structure.
- The last element added to the stack will be the first element removed from the stack.

##### Usage

- Managing function invocations
- Undo/Redo
- Routing (the history object is treated like a stack)

##### BIG O of Stacks

- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(N)

---

### QUEUES

- Abstract data structure. Just a concept.
- A **FIFO** data structure.
- The first element added to the queue will be the first element removed from the queue.

##### Usage

- Background tasks
- Uploading resources
- Printing / Task processing

##### BIG O of Queues

- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(N)

---

### TREES

- A data structure that consists of nodes in a parent / child relationship.

##### Terminlogies

- **Root** - Top node of a tree.
- **Child** - A node directly connected to another node when moving away from the root.
- **Parent** - The converse notion of a child.
- **Siblings** - A group of nodes with the same parent.
- **Leaf** - A node with no child.
- **Edge** - The connection between one node and another.

##### Usage

- HTML DOM
- Network Routing
- Abstract Syntax Tree (AST)
- AI
- Folders in OS
- Computer FileSystem
- JSON

##### Kinds of Trees

- Trees
  - Each node can have any number of children
- Binary Trees
  - Each node can have at most have 2 children
- Binary Search Trees
    - Special case of a binary tree
    - Every parent node has at most 2 children
    - Every node to the left of a parent node is always less than the parent
    - Every node to the right of a parent node is always greater than the parent
    - Sorted in a particular way
    - Used to store data that can be compared / data that is sortable


    ##### BIG O of BST

- Insertion - O(log n)
- Searching - O(log n)

---

### TREE TRAVERSAL

- A data structure that consists of nodes in a parent / child relationship.
- Are non-linear data structures that contain a root and child nodes

##### Two main approaches

- **Breadth-first Search** - working across the tree/visiting nodes on the same level before moving down
- **Depth-first Search** - working down the tree before visiting sibling nodes
  - **PreOrder** - follows the root-left-right policy where
    - the root node of the subtree is visited first
    - then the left subtree is traversed
    - at last, the right subtree is traversed
    - can be used to "export" a tree structure so that it is easily recontructed
  - **PostOrder** - follows left-right-root policy such that for each node
    - the left subtree is traversed first
    - then the right subtree is traversed
    - finally the root node of the tree is traversed
  - **InOrder** - follows the left-root-right pattern, such that
    - the left subtree is traversed first
    - then the root node of that subtree is traversed
    - finally, the right subtree is traversed
    - used commonly in BST's, we get all nodes in the tree in their underlying order (lowest to largest)


##### BFS vs DFS
- DFS has fewer nodes to keep track of
- BFS uses a queue and if there are alot of nodes it will increase space complexity
- Time complaxity is the same

---

### BINARY HEAP
- Type of a heap which is a type of a tree
- Very similar to a binary search tree, but with some different rules.
- In a **MaxBinaryHeap**, parent nodes are always larger than child node.
- In a **MinBinaryHeap**, parent nodes are always smaller than child nodes.

##### Max Binary Heap
- Each parent has at most 2 child nodes.
- The value of each parent node is always greater than its child nodes.
- In a max Binary Heap the parent is greater than the children, but there are no guarentees between sibling nodes.
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

##### Usage

- Binary Heaps are used to implement Priority Queues which are very commonly used data structures.
- Used with graph traversal algorithms.

#### Priority Queue
- A data structure where each element has a priority.
- Elements with higher priorities are served before elements with lower priorities.
- They are separate from a heap, are just an abstract concept.


##### BIG O of Binary Heaps

- Insertion - O(log N)
- Removal - O(log N)
- Searching - O(N)

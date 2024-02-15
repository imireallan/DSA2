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

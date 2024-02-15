const Queue = require("../src/Queue")

describe.only("Queue", () => {
    describe("enqueue", () => {
        test("it adds a node in the queue", () => {
            const queue = new Queue()

            queue.enqueue(100)
            queue.enqueue(200)

            expect(queue.size).toBe(2)
            expect(queue.first.value).toBe(100)
            expect(queue.last.value).toBe(200)

        })
    })
    describe("dequeue", () => {
        test("it remove a node in the queue", () => {
            const queue = new Queue()

            queue.enqueue(100)
            queue.enqueue(200)

            const val = queue.dequeue()

            expect(queue.size).toBe(1)
            expect(val).toBe(100)
            expect(queue.first.value).toBe(200)

        })
    })
})
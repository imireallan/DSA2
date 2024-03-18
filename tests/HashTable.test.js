const HashTable = require("../src/HashTable");
describe("HashTable", () => {
  describe("Get", () => {
    test("it retrives a value from the hash table given a key", () => {
      let hashTable = new HashTable(6);
      hashTable.set("hello", "world");
      hashTable.set("color", "red");
      hashTable.set("age", 1);
      hashTable.set("sex", "male");
      hashTable.set("name", "allan");

      let value = hashTable.get("name");
      let value2 = hashTable.get("allan");

      expect(value).toBe("allan");
      expect(value2).toBeUndefined();
    });
  });
  describe("Keys", () => {
    test("it retrives all the keys from the hash table", () => {
      let hashTable = new HashTable(6);
      hashTable.set("hello", "world");
      hashTable.set("color", "red");
      hashTable.set("age", 1);
      hashTable.set("sex", "male");
      hashTable.set("name", "allan");

      let value = hashTable.keys();

      expect(value).toEqual(["sex", "age", "color", "name", "hello"]);
    });
  });
  describe("Values", () => {
    test("it retrives all the values from the hash table", () => {
      let hashTable = new HashTable(6);
      hashTable.set("hello", "world");
      hashTable.set("color", "red");
      hashTable.set("age", 1);
      hashTable.set("sex", "male");
      hashTable.set("name", "allan");
      hashTable.set("test", "allan");
      hashTable.set("test1", "allan");
      hashTable.set("test2", "allan");

      let value = hashTable.values();

      expect(value).toEqual([ 'male', 'allan', 1, 'red', 'world' ]);
    });
  });
});

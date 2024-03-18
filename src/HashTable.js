class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  //   TODO: Handle duplicate keys
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    let valueArray = this.keyMap[index];

    if (!valueArray.length) return;

    let value = valueArray.find((val) => val[0] === key);

    return value ? value[1] : undefined;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          let value = this.keyMap[i][j];
          keys.push(value[0]);
        }
      }
    }
    return keys;
  }
  values() {
    let valueArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          let value = this.keyMap[i][j];
          valueArray.push(value[1]);
        }
      }
    }
    let set = new Set(valueArray);
    return [...set];
  }
}

module.exports = HashTable;

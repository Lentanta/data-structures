const hashFunction = (value, hashLength) => {
  const UTF80_OFF_SET = 96;
  const PRIME_NUMBER = 31;
  const MAX_LENGTH = 100;

  const stringLength = Math.min(value.length, MAX_LENGTH);

  let result = 0;
  for (let i = 0; i < stringLength; i++) {
    const char = value[i];
    const numberValue = char.charCodeAt(0) - UTF80_OFF_SET;

    result = (result * PRIME_NUMBER + numberValue) % hashLength;
  }

  return result;
};

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    return hashFunction(key, this.keyMap.length);
  }

  set(key, value) {
    // Step 1: Hash the key
    const index = Math.abs(this._hash(key));

    // Step 1.5: If the key is empty then create an empty array
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    };

    // Step 2: Push the value key and value into the array at hash key
    // The array[0] is key and array[1] is value
    this.keyMap[index].push([key, value])
    return true;
  }

  get(key) {
    const hashIndex = Math.abs(this._hash(key));

    // If not found
    if (!this.keyMap[hashIndex]) {
      return undefined;
    }

    // find the value with key
    for (let i = 0; i < this.keyMap[hashIndex].length; i++) {
      if (this.keyMap[hashIndex][i][0] === key) {
        return this.keyMap[hashIndex][i][1];
      }
    }
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      const valueArray = this.keyMap[i];
      if (!valueArray) continue;

      for (let j = 0; j < valueArray.length; j++) {
        const valuePair = valueArray[j];
        if (keys.includes(valuePair[0])) continue;

        keys.push(valuePair[0])
      }
    };

    return keys;

  }

  // Get all the values in HashTable
  values() {
    let values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      const valueArray = this.keyMap[i];
      if (!valueArray) continue;

      for (let j = 0; j < valueArray.length; j++) {
        const valuePair = valueArray[j];
        if (values.includes(valuePair[1])) continue;

        values.push(valuePair[1])
      }
    };

    return values
  };

}

const hashTable = new HashTable(3);
hashTable.set("A12", "Fuck mgm")
hashTable.set("A24", "Fuck mgm x2")
console.log(hashTable.values())
console.log(hashTable.keys())

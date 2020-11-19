class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let hash = this._hash(key);
        if (!this.keyMap[hash]) this.keyMap[hash] = [];
        this.keyMap[hash].push([key, value]);
        return this;
    }

    get(key) {
        let hash = this._hash(key);
        if (this.keyMap[hash]) {
            for (let pair of this.keyMap[hash]) {
                if (pair[0] === key) return pair[1];
            }
        }
        return undefined;
    }


}

function flatten(items, keyValue) {
    let flatSet = new Set();
    
    items.forEach(item => {
      if (Array.isArray(item)) {
        flatSet.push(...flatten(item));
      } else {
        flatSet.push(item);
      }
    });
  
    return flatSet;
  }


let dict = new HashTable;
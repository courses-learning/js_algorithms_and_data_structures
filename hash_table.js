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

    keys() {
        return this.flatten(0);
    }

    values() {
        return this.flatten(1);
    }

    flatten(flag) {
        // filter out blank entries in array
        let filtered = this.keyMap.filter(entry => entry !== undefined);
        // merge/flatten the filtered array
        let merged = [].concat.apply([], filtered);
        // get unique values via set and return as array - for flag 0=keys, 1=values
        return Array.from(new Set(merged.map(x => x[flag])));
    }

}



let dict = new HashTable;

dict.set('snowy', 'cat')
dict.set('jake', 'dog')
dict.set('beth', 'dog')
dict.set('beth', 'lizard')

class HashTable {
  constructor(size) {
    // Create the object where you're going to store the values.
    this.values = {};
    this.numberOfValues = 0;
    this.size = size;
  }

  add(key, value) {
    // First, find the hash.
    const hash = this.calculateHash(key);
    if(!this.values.hasOwnProperty(hash)) {
      // If the values doesn't have the hash value,
      // add it to the values object, and set it equal
      // to an empty object.
      this.values[hash] = {};
    }
    if(!this.values[hash].hasOwnProperty(key)) {
      // If the hash doesn't have the key
      // increment the number of values as we add a new value.
      this.numberOfValues++;
    }
    // Set the hash's key value equal to the new value.
    this.values[hash][key] = value;
  }

  remove(key) {
    // First, find the hash.
    const hash = this.calculateHash(key);
    if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
      // If the values have the hash, and the hash's value has a key, then delete.
      delete this.values[hash][key];
      // We just deleted an item, so decrement the number of values by one.
      this.numberOfValues--;
    }
  }

  calculateHash(key) {
    return key.toString().length % this.size;
  }

  search(key) {
    // First, find the hash.
    const hash = this.calculateHash(key);
    if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
      // If the values have the hash, and the hash's value has a key, then return that value.
      return this.values[hash][key];
    } else {
      return null;
    }
  }

  length() {
    return this.numberOfValues;
  }

  print() {
    let string = '';
    for(const value in this.values) {
      for(const key in this.values[value]) {
        string += `${this.values[value][key]} `;
      }
    }
    console.log(string.trim());
  }
}
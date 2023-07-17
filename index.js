// Define myEach
function myEach(collection, callback) {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  
  // Define myMap
  function myMap(collection, callback) {
    const result = [];
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        result.push(callback(collection[key]));
      }
    }
    return result;
  }

  function myReduce(collection, callback, acc) {
    let startIdx = 0;
    const keys = Object.keys(collection);
  
    if (acc === undefined) {
      acc = collection[keys[0]];
      startIdx = 1;
    }
  
    for (let i = startIdx; i < keys.length; i++) {
      const key = keys[i];
      acc = callback(acc, collection[key], collection);
    }
  
    return acc;
  }
  
  
  
  // Define myFind
  function myFind(collection, predicate) {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        if (predicate(collection[key])) {
          return collection[key];
        }
      }
    }
    return undefined;
  }
  
  // Define myFilter
  function myFilter(collection, predicate) {
    const result = [];
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        if (predicate(collection[key])) {
          result.push(collection[key]);
        }
      }
    }
    return result;
  }
  
  // Define mySize
  function mySize(collection) {
    let count = 0;
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  }
  
  // Define myFirst
  function myFirst(collection, n) {
    if (n === undefined) {
      return collection[0];
    }
    return collection.slice(0, n);
  }
  
  // Define myLast
  function myLast(collection, n) {
    if (n === undefined) {
      return collection[collection.length - 1];
    }
    return collection.slice(-n);
  }
  
  // Define myKeys
  function myKeys(object) {
    const keys = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
  
  // Define myValues
  function myValues(object) {
    const values = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        values.push(object[key]);
      }
    }
    return values;
  }
  
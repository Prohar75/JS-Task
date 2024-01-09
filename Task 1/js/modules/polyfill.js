export default class Polyfill{
  constructor(array) {
    this.array = array;
  }

  customFilter(callback, thisArg) {
    if (this.array == null) {
      throw new TypeError('ArrayPolyfill.customFilter called on null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const array = Object(this.array);
    const len = array.length >>> 0;
    const result = [];

    for (let i = 0; i < len; i++) {
      if (i in array) {
        const element = array[i];

        if (callback.call(thisArg, element, i, array)) {
          result.push(element);
        }
      }
    }

    return result;
  }

  customMap(callback, thisArg) {
    if (this.array == null) {
      throw new TypeError('ArrayPolyfill.customMap called on null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const array = Object(this.array);
    const len = array.length >>> 0;
    const result = new Array(len);

    for (let i = 0; i < len; i++) {
      if (i in array) {
        result[i] = callback.call(thisArg, array[i], i, array);
      }
    }

    return result;
  }

  customReduce(callback, initialValue) {
    if (this.array == null) {
      throw new TypeError('ArrayPolyfill.customReduce called on null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const array = Object(this.array);
    const len = array.length >>> 0;
    let accumulator = initialValue;

    for (let i = 0; i < len; i++) {
      if (i in array) {
        accumulator = callback.call(undefined, accumulator, array[i], i, array);
      }
    }

    return accumulator;
  }
}
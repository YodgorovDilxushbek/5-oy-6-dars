// 1- misol
// function section(arr1, arr2) {
//     const result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr2.includes(arr1[i])) {
//             result.push(arr1[i]);
//         }
//     }
//     return result;
// }
// console.log(section([1, 2, 3, 4, 5], [2, 4, 6])); 


// 2- misol
// function multiply(arr, arg) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i] * arg);
//     }
//     return result;
// }
// console.log(multiply([1, 2, 3, 4], 2)); 

// 3- misol
// function numbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// console.log(numbers([-10, 20, -30, 40, -50])); 

// 4- misol
// function number(arr) {
//     const result = [];
//     let Count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             Count++;
//         } else {
//             result.push(arr[i]);
//         }
//     }
//     for (let i = 0; i < Count; i++) {
//         result.push(0);
//     }
//     return result;
// }
// console.log(number([1, 0, 2, 0, 3, 4])); 



// 6- misol
// function array(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             result.push(...array(arr[i]));
//         } else {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(array([1, [2, [3, [4, 5]]]]));

// 7- misol
// function arrays(arr1, arr2) {
//     const result = [...arr1];
//     for (let i = 0; i < arr2.length; i++) {
//         if (!result.includes(arr2[i])) {
//             result.push(arr2[i]);
//         }
//     }
//     return result;
// }
// console.log(arrays([10, 20, 30], [20, 30, 40])); 

// 8- misol
// function numbers(arr) {
//     const toq = [];
//     const juft = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             juft.push(arr[i]);
//         } else {
//             toq.push(arr[i]);
//         }
//     }
//     return { toq, juft };
// }
// console.log(numbers([10, 21, 32, 43, 54])); 

// 9- misol
// function value(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(value([3, 5, 7, 9], 5)); 

// 10- misol
// function minMax(arr) {
//     let min = arr[0];
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return { min, max };
// }
// console.log(minMax([7, 3, 5, 9, 2])); 

// OBYEKTLAR

// 11- misol: Obyektni tartiblang
// function object(obj) {
//     const keys = Object.keys(obj).sort();
//     const obj1 = {};
//     for (let i = 0; i < keys.length; i++) {
//         obj1[keys[i]] = obj[keys[i]];
//     }
//     return obj1;
// }
// console.log(object({ z: 1, y: 2, x: 3 })); 

// 12- misol
// function values(obj) {
//     const keys = [];
//     const values1 = [];
//     for (const key in obj) {
//         keys.push(key);
//         values1.push(obj[key]);
//     }
//     return { keys, values1 };
// }
// console.log(values({ a: 10, b: 20, c: 30 })); 

// 13- misol
// function objects(obj1, obj2) {
//     const result = { ...obj1 };
//     for (const key in obj2) {
//         result[key] = obj2[key];
//     }
//     return result;
// }
// console.log(objects({ x: 5 }, { y: 10, x: 15 })); 

// 14- misol
// function values(obj) {
//     let sum = 0;
//     for (const key in obj) {
//         sum += obj[key];
//     }
//     return sum;
// }
// console.log(values({ m: 5, n: 10, o: 15 })); 

// 15- misol
// function renameKey(obj, oldKey, newKey) {
//     if (obj.hasOwnProperty(oldKey)) {
//         obj[newKey] = obj[oldKey];
//         delete obj[oldKey];
//     }
//     return obj;
// }
// console.log(renameKey({ id: 1, name: 'Alice' }, 'id', 'user')); 

// 16- misol
// function delete1(obj, delete2) {
//     const newObj = { ...obj };
//     delete newObj[delete2];
//     return newObj;
// }
// console.log(delete1({ a: 5, b: 10, c: 15 }, 'b'));

// 17- misol
// function groupByKey(arr, key) {
//     const group = {};
//     for (let i = 0; i < arr.length; i++) {
//         const value = arr[i][key];
//         if (!group[value]) {
//             group[value] = [];
//         }
//         group[value].push(arr[i]);
//     }
//     return group;
// }
// console.log(groupByKey([{ age: 25 }, { age: 30 }, { age: 25 }], 'age'));

// 18-misol
// function arrays(obj) {
//     let result = [];
//     for (let key in obj) {
//         for (let i = 0; i < obj[key].length; i++) {
//             result.push(obj[key][i]);
//         }
//     }
//     return result;
// }
// console.log(arrays({a: [1, 2], b: [3, 4]})); 


// 20-misol
// function depth1(obj) {
//     let depth = 1;
//     for (let key in obj) {
//         if (typeof obj[key] === 'object' && obj[key] !== null) {
//             depth = Math.max(depth, depth1(obj[key]) + 1);
//         }
//     }
//     return depth;
// }
// console.log(depth1({a: {b: {c: {}}}})); 


// string


// 22-misol
// function words1(sentence) {
//     let words = sentence.split(' ');
//     let reversed = '';
//     for (let i = words.length - 1; i >= 0; i--) {
//         reversed += words[i] + (i > 0 ? ' ' : '');
//     }
//     return reversed;
// }
// console.log(words1("hello world")); 

// 23-misol
// function word(sentence) {
//     let words = sentence.split(' ');
//     let length = '';
//     for (let word of words) {
//         if (word.length > length.length) {
//             length = word;
//         }
//     }
//     return length;
// }
// console.log(word("menga kod yozish juda yoqadi")); 

function character(str, char) {
    let result = '';
    for (let c of str) {
        result += c;
        if (c === char) {
            result += char; 
        }
    }
    return result;
}
console.log(character("banana", "a")); 

function removeDigits(str) {
    let result = '';
    for (let c of str) {
        if (!/\d/.test(c)) {
            result += c; // raqam bo'lmasa, qo'shish
        }
    }
    return result;
}
console.log(removeDigits("I have 2 apples and 3 bananas")); // "I have  apples and  bananas"

function largestOfFour(arr) {
  var largestNums = []; // ініціалізуємо масив, в якому зберігатимемо найбільші числа

  arr.map(function(subArr) {
    var largestNum = Math.max.apply(null, subArr); // знаходимо найбільше число у підмасиві
    largestNums.push(largestNum); // додаємо його до масиву з найбільшими числами
  });

  return largestNums; // повертаємо масив з найбільшими числами
}

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
// повертає [9, 35, 97, 1000000]

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
// повертає [25, 48, 21, -3]


function bouncer(arr) {
  var filteredArr = arr.filter(function(val) {
    return Boolean(val);
  });
  return filteredArr;
}

console.log(bouncer([7, "ate", "", false, 9])); // [7, "ate", 9]
console.log(bouncer(["a", "b", "c"])); // ["a", "b", "c"]
console.log(bouncer([false, null, 0, NaN, undefined, ""])); // []
console.log(bouncer([null, NaN, 1, 2, undefined])); // [1, 2]

function frankenSplice(arr1, arr2, n) {
  // Створюємо копію другого масиву
  let newArr = arr2.slice();
  // Вставляємо кожен елемент першого масиву в новий масив
  for (let i = 0; i < arr1.length; i++) {
    newArr.splice(n + i, 0, arr1[i]);
  }
  // Повертаємо новий масив
  return newArr;
}

// Приклади виклику функції
console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // [4, 1, 2, 3, 5]
console.log(frankenSplice([1, 2], ["a", "b"], 1)); // ["a", 1, 2, "b"]
console.log(frankenSplice([1, 2, 3, 4], [], 0)); // [1, 2, 3, 4]
function getIndexToIns(arr, num) {
  // Сортуємо масив arr
  arr.sort(function(a, b) {
    return a - b;
  });

  // Шукаємо індекс, за яким потрібно вставити число num
  var index = 0;
  while (num > arr[index]) {
    index++;
  }

  return index;
}

function getIndexToIns(arr, num) {
  // Відсортуємо масив у порядку зростання
  arr.sort(function(a, b) {
    return a - b;
  });

  // Знайдемо відповідний індекс
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }

  // Якщо індекс не знайдено, то num має бути вставлений в кінець масиву
  return arr.length;
}

// Приклади використання
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // 2
console.log(getIndexToIns([3, 10, 5], 3)); // 0
console.log(getIndexToIns([5, 3, 20, 3], 5)); // 2

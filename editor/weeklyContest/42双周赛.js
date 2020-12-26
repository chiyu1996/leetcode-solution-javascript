//1
var countStudents = function(students, sandwiches) {
  for (const shape of sandwiches) {
    let n = students.length;
    while (students[0] !== shape && n > 0) {
      students.push(students.shift());
      n--;
    }
    if (n === 0) {
      break;
    }
    if (students[0] === shape) {
      students.shift();
    }
  }
  return students.length;
};
//2
var averageWaitingTime = function(customers) {
  // customers.sort((a, b) => {
  //   if (a[0] !== b[0]) {
  //     return a[0] - b[0];
  //   } else {
  //     return a[1] - b[1];
  //   }
  // });
  let last = 0;
  let total = 0;
  const n = customers.length;
  for (const [order, cost] of customers) {
    const end = (order < last ? last : order) + cost;
    total += end - order;
    last = end;
  }
  return total / n;
};
//3
var maximumBinaryString = function(binary) {
  const n = binary.length;
  let last = binary.indexOf('0');
  binary = binary.split('');
  if (last !== -1) {
    for (let i = last + 1; i < n; i++) {
      if (binary[i] === '0') {
        binary[last] = '1';
        if (last === i + 1) {
          binary[i] = '0';
          last = i;
        } else {
          last++;
          binary[last] = '0';
          binary[i] = '1';
        }
      }
    }
  }
  return binary.join('');
};

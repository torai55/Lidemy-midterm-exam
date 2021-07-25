// 請把解題函式寫在這個裡面
function solve(arr) {
  const result = [];
  const order = [];
  for (let i = 0; i < arr.length; i++) {
    let resIndex = arr[i].id;
    if (result[resIndex] === undefined) {
      result[resIndex] = arr[i].value;
      order.push(arr[i].id);
      // console.log(result[resIndex]);
      continue;
    }

    if (typeof result[resIndex] === 'number') {
      result[resIndex] = [result[resIndex], arr[i].value];
    } else {
      result[resIndex].push(arr[i].value);
    }
  }

  const output = [];
  for (let i = 0; i < order.length; i++) {
    let resIndex = order[i];
    output.push({ id: order[i], value: result[resIndex] });
  }
  return output;
}

// 事先為你準備好的測驗正確性的函式，如果你很確定不會改壞的話，可以改動
function test() {
  let isCorrect = true;
  for (let i = 0; i < testCases.length; i++) {
    const result = solve(testCases[i].input);
    if (!deepEqual(testCases[i].output, result)) {
      isCorrect = false;
      console.log('Wrong Answer!');
      console.log('預期答案：');
      console.log(JSON.stringify(testCases[i].output));
      console.log('你的答案：');
      console.log(JSON.stringify(result));
      break;
    }
  }
  if (isCorrect) {
    console.log('過關！');
  }

  function deepEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  }
}

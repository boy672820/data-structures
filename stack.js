const fs = require('fs');

const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function main() {
  const commandCount = Number(n);

  if (Number.isNaN(commandCount) || commandCount < 1 || commandCount > 10000) {
    return;
  }

  const stack = [];

  const useCommand = (method, value) => {
    if ('push' === method) {
      const number = Number(value);

      stack.push(number);

      return null;
    }

    if ('pop' === method) {
      const pop = stack.pop();
      return pop || -1;
    }

    if ('size' === method) {
      const size = stack.length;
      return size;
    }

    if ('empty' === method) {
      const empty = stack.length ? 0 : 1;
      return empty;
    }

    if ('top' === method) {
      const top = stack[stack.length - 1];
      return top || -1;
    }

    return null;
  };

  const last = arr.length - 1;
  let resJoin = '';

  for (let i = 0; i <= last; i += 1) {
    const [command, value] = arr[i].split(' ');

    const res = useCommand(command, value);

    if (res || Number.isInteger(res)) resJoin += res + ' ';
  }

  console.log(resJoin);
}

main();
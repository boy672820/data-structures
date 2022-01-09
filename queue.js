const fs = require('fs');

const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function main() {
  const commandCount = Number(n);

  if (Number.isNaN(commandCount) || commandCount < 1 || commandCount > 10000) {
    return;
  }

  const queue = [];

  const useCommand = (method, value) => {
    if ('push' === method) {
      const number = Number(value);

      queue.push(number);

      return null;
    }

    if ('pop' === method) {
      const pop = queue.splice(0, 1);
      return pop[0] || -1;
    }

    if ('size' === method) {
      const size = queue.length;
      return size;
    }

    if ('empty' === method) {
      const empty = queue.length ? 0 : 1;
      return empty;
    }

    if ('front' === method) {
      return queue[0] || -1;
    }

    if ('back' === method) {
      return queue[queue.length - 1] || -1;
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
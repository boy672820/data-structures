const fs = require('fs');

const [firstCommand, ...commands] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function main() {
  const commandCount = Number(firstCommand);

  if (Number.isNaN(commandCount) || commandCount < 1 || commandCount > 10000) {
    return;
  }

  const deque = [];

  const useCommand = (method, value) => {
    switch (method) {
      case 'push_front':
        deque.unshift(value);
        return null;

      case 'push_back':
        deque.push(value);
        return null;

      case 'pop_front':
        const popFront = deque.shift();
        return popFront || -1;

      case 'pop_back':
        const popBack = deque.pop();
        return popBack || -1;

      case 'size':
        const size = deque.length;
        return size;

      case 'empty':
        return deque.length ? 0 : 1;

      case 'front':
        return deque[0] || -1;

      case 'back':
        return deque[deque.length - 1] || -1;

      default:
        return null;
    }
  };

  const last = commands.length - 1;
  let join = '';

  for (let i = 0; i <= last; i += 1) {
    const [command, value] = commands[i].split(' ');

    const res = useCommand(command, value);

    if (res || Number.isInteger(res)) join += res + ' ';
  }

  console.log(join);
}

main();

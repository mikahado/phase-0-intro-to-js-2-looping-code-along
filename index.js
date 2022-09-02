

function writeCards(names, event) {
    const messages = []
    for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return messages
}

function countDown(n) {
    let count = 11;
        while (count > 0) {
        console.log(--count);
        }
}

console.log(countDown)

const text = document.querySelector('.text-challange');
const btnSend = document.querySelector('.btn-send');

const transformData = function () {
  variable = text.value;
  const variables = variable.split('\n');

  const result = [];

  for (const [index, v] of variables.entries()) {
    const [left, right] = v.split('_');
    const rightLower = right.toLowerCase();
    const fullText = left + rightLower[0].toUpperCase() + rightLower.slice(1);
    const output = `${fullText.padEnd(20)}${'*'.repeat(index + 1)}`;
    console.log(output);
  }
};

btnSend.addEventListener('click', transformData);

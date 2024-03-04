export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const taskAnother = true;
    const task2Another = false;
  }

  return [task, task2];
}

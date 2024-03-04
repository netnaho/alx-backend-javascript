export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    let taskAnother = false;
    let task2Another = true;

    taskAnother = task2Another;
    task2Another = !taskAnother;
  }

  return [task, task2];
}

document.addEventListener('DOMContentLoaded', () => {
  const taskList = document.getElementById('tasks');
  const taskInput = document.getElementById('newTaskDescription');
  const submitButton = document.querySelector('input[type="submit"]');

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const taskText = taskInput.value;
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);
    taskInput.value = '';
  });
});

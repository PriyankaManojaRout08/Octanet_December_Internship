function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const tasksContainer = document.getElementById('tasks-container');
  
      const taskElement = document.createElement('div');
      taskElement.className = 'task';
  
      const taskTextElement = document.createElement('span');
      taskTextElement.innerText = taskText;
  
      const deleteTaskElement = document.createElement('span');
      deleteTaskElement.className = 'delete-task';
      deleteTaskElement.innerText = 'Delete';
      deleteTaskElement.onclick = function () {
        tasksContainer.removeChild(taskElement);
      };
  
      taskElement.appendChild(taskTextElement);
      taskElement.appendChild(deleteTaskElement);
  
      tasksContainer.appendChild(taskElement);
  
      // Clear the input field
      taskInput.value = '';
    }
  }  
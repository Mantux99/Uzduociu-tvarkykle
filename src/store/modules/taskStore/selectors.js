export const getTasks = ({ tasks }) => tasks;

export const getUserTasks = ({ tasks }, userId) =>
  userId === '' || userId === null
    ? tasks
    : tasks.filter(task => task.userId === userId);


import { Task } from '../modules/task/task.model';

export const updateExpiredTasks = async () => {
  try {
    // Fetch all tasks from the database
    const tasks = await Task.find();
    
    for (const task of tasks) {
        const currentTime = new Date();
        const taskDeadline = new Date(task.deadline);

        // Check if the task's deadline has passed
        if (currentTime > taskDeadline) {
          // Update the task status to 'timeout'
          task.status = 'timeout';
          await task.save(); // Save the updated task back to the database
        }
        else if (currentTime < taskDeadline) {
            // Update the task status to 'active'
            task.status = 'to-do'
            await task.save(); // Save the updated task back to the database
        }
      }

  } catch (error) {
    console.error('Error updating expired tasks:', error);
  }
};

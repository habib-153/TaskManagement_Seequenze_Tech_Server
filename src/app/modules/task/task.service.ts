import QueryBuilder from '../../builder/QueryBuilder';
import { TTask } from './task.interface';
import { Task } from './task.model';

const getAllTasksFromDB = async (query: Record<string, unknown>) => {
  const searchableFields = ['title'];

  const products = new QueryBuilder(Task.find(), query)
    .search(searchableFields)
    .filter();

  const result = await products.modelQuery;

  return result;
};

const getSingleTaskFromDB = async (id: string) => {
  const result = await Task.findById(id);
  return result;
};

const createTaskIntoDB = async (payload: TTask) => {
  try {
    // Check if the task deadline has expired
    const currentTime = new Date();
    const taskDeadline = new Date(payload.deadline);

    if (currentTime > taskDeadline) {
      payload.status = 'timeout'; // Update status to 'timeout'
    } else {
      payload.status = 'to-do';
    }

    const result = await Task.create(payload);
    return result;
  } catch (error) {
    throw { statusCode: 500, message: 'Error creating task' };
  }
};

const updateTaskIntoDB = async (id: string, payload: TTask) => {
  const result = await Task.findByIdAndUpdate(
    id,
    { $set: payload },
    { new: true },
  );
  return result;
};

const deleteTaskFromDB = async (id: string) => {
  const result = await Task.findByIdAndDelete(id);
  return result;
};

export const TaskService = {
  getAllTasksFromDB,
  getSingleTaskFromDB,
  createTaskIntoDB,
  updateTaskIntoDB,
  deleteTaskFromDB,
};

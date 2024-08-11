import QueryBuilder from '../../builder/QueryBuilder';
import { TTask } from './task.interface';
import { Task } from './task.model';

const getAllTasksFromDB = async (query: Record<string, unknown>) => {
  let result;
  //console.log(query)
  if (query) {
    const searchableFields = ['status'];

    const products = new QueryBuilder(Task.find(), query)
      .search(searchableFields)
      .filter()
      .sort()
      .paginate()
      .fields();

    result = await products.modelQuery;
  } else {
    result = await Task.find();
  }
  return result;
};

const getSingleTaskFromDB = async (id: string) => {
  const result = await Task.findById(id);
  return result;
};

const createTaskIntoDB = async (payload: TTask) => {
  const result = await Task.create(payload);
  return result;
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

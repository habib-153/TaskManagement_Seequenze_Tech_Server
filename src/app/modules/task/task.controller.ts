import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { TaskService } from './task.service';

const createTask = catchAsync(async (req: Request, res: Response) => {
  const result = await TaskService.createTaskIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task Created Successfully',
    data: result,
  });
});

const getAllTask = catchAsync(async (req: Request, res: Response) => {
  const query = req.query;
  const result = await TaskService.getAllTasksFromDB(query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Task Retrieved Successfully',
    data: result,
  });
});

const getSingleTask = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await TaskService.getSingleTaskFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task Retrieved Successfully',
    data: result,
  });
});

const updateTask = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await TaskService.updateTaskIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task Updated Successfully',
    data: result,
  });
});

const deleteTask = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await TaskService.deleteTaskFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task Deleted Successfully',
    data: result,
  });
});

export const TaskController = {
  getAllTask,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { TaskController } from './task.controller';
import { createTaskValidationSchema } from './task.validation';

const router = express.Router();

router.get('/', TaskController.getAllTask);
router.get('/:id', TaskController.getSingleTask);

router.post(
  '/',
  validateRequest(createTaskValidationSchema),
  TaskController.createTask,
);

router.put('/:id', TaskController.updateTask);
router.delete('/:id', TaskController.deleteTask);

export const TaskRoutes = router;

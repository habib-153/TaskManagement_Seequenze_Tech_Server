import { z } from 'zod';
import { STATUS } from './task.constant';

export const createTaskValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }).min(3).max(100),
    description: z
      .string({ required_error: 'Description is required' })
      .min(3)
      .max(1000),
    status: z.enum([...STATUS] as [string, ...string[]], {
      required_error: 'Status is required',
    }),
    deadline: z.string({ required_error: 'Deadline is required' }),
    priority: z.string(),
    assignedTo: z.string().optional(),
  }),
});

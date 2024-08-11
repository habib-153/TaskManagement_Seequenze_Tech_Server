import { model, Schema } from "mongoose";
import { TTask } from "./task.interface";

export const taskSchema = new Schema<TTask>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    deadline: { type: Date, required: true },
    assignedTo: { type: String },
})

export const Task = model<TTask>('Task', taskSchema)
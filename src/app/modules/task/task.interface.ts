import { TStatus } from "./task.constant";

export type TTask = {
    _id: string;
    title: string;
    description: string;
    status: TStatus;
    deadline: Date;
    assignedTo?: string;
}
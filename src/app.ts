import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';
import { CronJob } from 'cron';
import { updateExpiredTasks } from './app/utils/updateExpiredTasks';

const app: Application = express();
//const port = 3000

app.use(express.json());
app.use(cors());
//  application routes
app.use('/', router)

app.get('/', (req: Request, res: Response) => {
  //const a = 10;
  res.send("Hello !!");
});

// use cron job to update expired tasks status to 'timeout'
const job = new CronJob('*/1 * * * *', function() {
  //console.log('You will see this message every second');
  updateExpiredTasks();
}, null, true);

// Start the cron job
job.start();


app.use(globalErrorHandler)
app.use(notFound)

export default app;

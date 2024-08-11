import { Router } from 'express';
import { TaskRoutes } from '../modules/task/task.route';
import { TwitchRoutes } from '../modules/twitch/twitch.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/tasks',
    route: TaskRoutes,
  },
  {
    path: '/streaming',
    route: TwitchRoutes,
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

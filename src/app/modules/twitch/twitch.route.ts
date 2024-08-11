import express from 'express';
import { getStreamingData } from './twitch.controller';

const router = express.Router()

router.get('/', getStreamingData);

export const TwitchRoutes = router;
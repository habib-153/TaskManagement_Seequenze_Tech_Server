import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { fetchTwitchStreams } from './twitch.service';
import { Request, Response } from 'express';

export const getStreamingData = async (req: Request, res: Response) => {
  try {
    const streams = await fetchTwitchStreams();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Streams Retrieved Successfully',
      data: streams,
    });
  } catch (error) {
    res.status(500).json({ message: 'something went wrong' });
  }
};

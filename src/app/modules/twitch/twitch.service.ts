import axios from 'axios';
import config from '../../config';

export const fetchTwitchStreams = async () => {
  try {
    const response = await axios.get(config.twitch_api_url as string, {
      headers: {
        'Client-ID': config.twitch_client_id,
        Authorization: `Bearer ${config.twitch_access_token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching Twitch streams');
  }
};

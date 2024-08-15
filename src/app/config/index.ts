import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  twitch_client_id: process.env.TWITCH_CLIENT_ID,
  twitch_access_token: process.env.TWITCH_ACCESS_TOKEN,
  twitch_api_url: process.env.TWITCH_API_URL,
};

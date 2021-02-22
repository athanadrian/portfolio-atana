export default async (req, res) => {
  const headers = {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify({
    client_id: process.env.STRAVA_CLIENT_ID,
    client_secret: process.env.STRAVA_SECRET,
    refresh_token: process.env.STRAVA_REFRESH_TOKEN,
    grant_type: 'refresh_token',
  });

  const reauthorizeResponse = await fetch(
    'https://www.strava.com/oauth/token',
    {
      method: 'post',
      headers: headers,
      body: body,
    }
  );

  const reauthorizeJson = await reauthorizeResponse.json();

  const url =
    'https://www.strava.com/api/v3/athletes/40209185/stats?access_token=' +
    reauthorizeJson.access_token;

  const response = await fetch(url);
  const json = await response.json();
  const { count, distance } = json.all_run_totals;
  const movingTime = json.all_run_totals.moving_time;
  return res.status(200).json({
    count,
    distance,
    movingTime,
  });
};

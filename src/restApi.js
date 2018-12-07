async function restApi() {
  const apiBaseUrl = 'https://api.coinmarketcap.com';
  const header = { 'Content-type': 'application/json' };

  const response = await fetch(apiBaseUrl + '/v1/ticker/?limit=15', {
    headers: header,
    method: 'GET',
  });

  if (response.status === 200) {
    const responseJson = await response.json();

    return responseJson;
  }
  return null;
}

export default restApi;

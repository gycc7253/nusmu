// const newRoomEndpoint =
//   `${window.location.origin}/api/rooms`;

/**
 * Create a short-lived room for demo purposes.
 *
 * It uses the redirect proxy as specified in netlify.toml`
 * This will work locally if you following the Netlify specific instructions
 * in README.md
 *
 * See https://docs.daily.co/reference#create-room for more information on how
 * to use the Daily REST API to create rooms and what options are available. 
 */
export async function createRoom() {

//   const exp = Math.round(Date.now() / 1000) + 60 * 30;
//   const options = {
//     properties: {
//       exp: exp,
//     },
//   };
//   let response = await fetch(newRoomEndpoint, {
//     method: "POST",
//     body: JSON.stringify(options),
//     mode: 'cors',
//   }),
//     room = await response.json();
//   return room;

  // Comment out the above and uncomment the below, using your own URL
  // return { url: "https://nuovonatura.daily.co/dev-Test" };

  //API Key: 399d95e0af8c6f9035e42b774a0cb5ed85cdc04f26c34347df1b8e8560c5c271

const fetch = require('node-fetch');

const url = "https://api.daily.co/v1/rooms";
const options = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer 399d95e0af8c6f9035e42b774a0cb5ed85cdc04f26c34347df1b8e8560c5c271'
    },
};

let response = await fetch(url, options), room = await response.json();
return room;

}

export async function goToRoom() {
  return { url: "https://nuovonatura.daily.co/dev-Test" };
}

export async function getList() {
  const fetch = require('node-fetch');

  const url = "https://api.daily.co/v1/rooms";
  const options = {
    method: 'GET', 
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer 399d95e0af8c6f9035e42b774a0cb5ed85cdc04f26c34347df1b8e8560c5c271'
    }
  }

  let response = await fetch(url, options), result = await response.json();
  return result;
}
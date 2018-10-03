
export async function GET(url) {
  return new Promise((resolve, reject) => {
    fetch(url,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'GET',
      })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        resolve(json);
      })
      .catch((e) => {
        reject(e);
      });
  });
}
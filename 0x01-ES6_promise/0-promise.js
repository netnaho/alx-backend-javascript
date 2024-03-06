export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const result = true;
    if (result) {
      resolve('api fetched');
    } else {
      reject(new Error('fetch failed'));
    }
  });
}

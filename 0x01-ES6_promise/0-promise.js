export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const responseData = {
        message: 'Response from API',
      };
      resolve(responseData);
    }, 2000);
  });
}

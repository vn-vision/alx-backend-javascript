export default function getResponseFromAPInew() {
  return new Promise((resolve, reject) => {
    const success = true; // simulating success or failure
    if (success) {
      resolve();
    } else {
      reject();
    }
  });
}

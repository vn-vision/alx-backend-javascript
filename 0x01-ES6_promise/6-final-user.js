import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const sUPromise = signUpUser(firstName, lastName);
  const uPPromise = uploadPhoto(fileName);

  return Promise.allSettled([sUPromise, uPPromise])
    .then((responses) => responses.map((response) => {
      if (response.status !== 'fulfilled') {
        return {
          status: response.status,
          value: `${response.reason}`,
        };
      }
      return {
        status: response.status,
        value: response.value,
      };
    }));
}

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, LastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, LastName), uploadPhoto(fileName)])
    .then((values) => {
      for (const value of values) {
        if (value.status === 'rejected') {
          value.value = `Error: ${value.reason.message}`;
          delete value.reason;
        }
      }
      return ({
        status: 200,
        value: values,
      });
    });
}

export default function signUpUser(firstName, LastName) {
  return new Promise((resolve) => {
    resolve(
      {
        firstName,
        LastName,
      },
    );
  });
}

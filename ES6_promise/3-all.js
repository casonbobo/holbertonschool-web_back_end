import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((response) => {
      console.log(`${response[0].body} ${response[1].firstName} ${response[2].lastName}`,);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

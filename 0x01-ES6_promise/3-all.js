import { uploadPhoto, createUser } from '../utils';

const user = createUser();
const photo = uploadPhoto();

export default function handleProfileSignup() {
  return Promise.all([photo, user])
    .then((res) => {
      console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

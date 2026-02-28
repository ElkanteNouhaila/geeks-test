import { faker } from '@faker-js/faker';

const users = [];

function addFakeUser() {
  const user = {
    name: faker.person.fullName(),
    street: faker.location.street(),
    country: faker.location.country()
  };
  users.push(user);
}

for (let i = 0; i < 5; i++) {
  addFakeUser();
}

console.log(users);
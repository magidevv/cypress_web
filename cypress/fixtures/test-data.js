const { faker } = require("@faker-js/faker");

const randomUsername = faker.internet.userName();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();

const randomBadUsername = faker.string.numeric(5);
const randomBadEmail = faker.person.lastName() + "@" + faker.internet.domainSuffix();
const randomBadPassword = faker.string.numeric(5);

module.exports = {
  randomUsername,
  randomEmail,
  randomPassword,
  randomBadUsername,
  randomBadEmail,
  randomBadPassword
};
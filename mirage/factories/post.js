import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title: faker.lorem.sentence,
  body: faker.lorem.paragraph,
  thumbnail: faker.random.image
});

const faker = require('faker')
const { chain, range, random, keyBy, uniqueId } = require('lodash')

const USER_COUNT = 100
const POSTS_PER_USER = { min: 2, max: 35 }
const COMMENTS_PER_POST = { min: 5, max: 100 }

module.exports = () => {
  const users = range(0, USER_COUNT).map(() => ({
    id: uniqueId('user_'),
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    photo:
      'https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png'
  }))
  const usersById = keyBy(users, 'id')

  const posts = chain(users)
    .map(user => {
      const postCount = random(POSTS_PER_USER.min, POSTS_PER_USER.max)
      return range(0, postCount).map(() => ({
        id: uniqueId('post_'),
        userId: user.id,
        title: faker.random.words(2),
        body: faker.lorem.sentences(10),
        photo: 'https://wallpapercave.com/wp/7q2uZus.jpg'
      }))
    })
    .flatten()
    .shuffle()
    .value()

  const comments = chain(posts)
    .map(post => {
      const commentCount = random(COMMENTS_PER_POST.min, POSTS_PER_USER.max)
      return range(0, commentCount).map(() => ({
        id: uniqueId('comment_'),
        postId: post.id,
        user: usersById[post.userId],
        content: faker.lorem.sentences(1),
        createdAt: faker.date.past()
      }))
    })
    .flatten()
    .shuffle()
    .value()

  return { users, posts, comments }
}

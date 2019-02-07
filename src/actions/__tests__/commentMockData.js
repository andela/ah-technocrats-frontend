const commentMockData = {
  comments: [
    {
      id: 7,
      author: {
        username: 'Jason',
        email: 'jason@gmail.com',
        last_login: '2019-01-29 12:02:30.654166+00:00',
        country: '',
        website: '',
        phone: '',
        bio: '',
        created_at: '2019-01-24T10:00:56.513407Z',
        avatar: 'https://libertv.com/wp-content/uploads/2018/03/user-avatar-placeholder-1.png',
        notifications_enabled: true,
      },
      body: 'another comment about this',
      created_at: '2019-01-29T11:10:39.892843+00:00',
      last_update: '2019-01-29T11:10:39.892916+00:00',
      likes: {
        count: 0,
      },
      dislikes: {
        count: 0,
      },
    },
    {
      id: 6,
      author: {
        username: 'Jason',
        email: 'jason@gmail.com',
        last_login: '2019-01-29 12:02:30.654166+00:00',
        country: '',
        website: '',
        phone: '',
        bio: '',
        created_at: '2019-01-24T10:00:56.513407Z',
        avatar: 'https://libertv.com/wp-content/uploads/2018/03/user-avatar-placeholder-1.png',
        notifications_enabled: true,
      },
      body: 'Article one Body',
      created_at: '2019-01-29T11:04:17.751372+00:00',
      last_update: '2019-01-29T11:04:17.751420+00:00',
      likes: {
        count: 0,
      },
      dislikes: {
        count: 0,
      },
    },
  ],
  highlights: [],
  commentsCount: 2,
};

export default commentMockData;

test('This is here to make Jest ignore this file', () => {
  expect(1).toEqual(1);
});

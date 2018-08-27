const avatar1 = {
  size: 'sm',
  rounded: true,
  user: {
    firstName: 'donald',
    lastName: 'draper',
    image: 'assets/avatar/avatar2.png'
  }
};

const avatar2 = Object.assign({}, avatar1, {
  user: {
    firstName: 'joan',
    lastName: 'holloway',
    image: 'assets/avatar/avatar3.jpg'
  }
});

export const timelineEvents = [
  {
    id: 'timeline-evt1',
    avatar: avatar1,
    date: 'Sept. 30',
    time: 'Last Month',
    title: 'The Gypsy and The Hobo',
    content: 'An old flame and potential client re-enters Roger Sterling\'s life; Joan\'s husband searches for a new job; and Don finally comes clean to Betty about his true identity.'
  },
  {
    id: 'timeline-evt2',
    avatar: avatar2,
    date: 'Jan. 30',
    time: '2 Days Ago',
    title: 'The Chrysanthemum and the Sword',
    content: 'Don and Pete try to land a new Japanese client, but Roger\'s racist attitude may hand the lucrative account to a rival; Don has to read deeply and think quickly to salvage things.'
  },
  {
    id: 'timeline-evt3',
    avatar: avatar1,
    date: 'Aug. 3',
    time: 'Yesterday',
    title: 'Guy Walks Into An Advertising Agency',
    content: 'The new British bosses want the staff to come in to meet their dashing new blade Guy MacKendrick; Joan tenders her resignation only to find that she has been too rash.'
  },
  {
    id: 'timeline-evt4',
    avatar: avatar2,
    date: 'Aug. 3',
    time: '20 Minutes Ago',
    title: 'The Other Woman',
    content: 'Peter asks Joan to make an unspeakable sacrifice to help secure the Jaguar account, Peggy prepares to make a drastic move in response to Don\'s treatment, and Megan\'s acting career begins to create tension with her and Don.'
  }
];

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image:
      'https://www.expatica.com/app/uploads/sites/10/2014/05/best-place-to-live-in-uk.jpg',
    address: 'BLAADADAD',
    description: 'vddccdc',
  },
  {
    id: 'm2',
    title: 'Two Meetup',
    image:
      'https://images.movehub.com/wp-content/uploads/2017/09/14131021/Cambridge-2.jpg',
    address: 'BLAADADAdsdsdD',
    description: 'vddccdsdsdc',
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;

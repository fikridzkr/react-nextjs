import Head from 'next/head';
import { MongoClient } from 'mongodb';
import URL from '../config/db.config';
import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from 'react';

function HomePage(props) {
  // csr concept
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);
  return (
    <Fragment>
      <Head>
        <title>Fikri Dzakir - Learn NextJs</title>
        <meta name="description" content="Learn Anything About React Nextjs" />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}
// ssr concept
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// ssg concept
export async function getStaticProps() {
  const client = await MongoClient.connect(URL, { useUnifiedTopology: true });
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;

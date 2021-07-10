import MeetupDetail from '../../components/meetups/MeetupDetail';

export default function MeetupDetails() {
  return (
    <MeetupDetail
      image="dsdsd"
      title="sdsdsd"
      address="dsdsdsdsd"
      description="dsddssd"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image: 'dsdsdsd',
        id: meetupId,
        title: 'sasas',
        address: 'loremdsds',
        description: 'adsjdnidiudhewifewy',
      },
    },
  };
}

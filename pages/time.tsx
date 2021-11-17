function time(props: any) {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toUTCString();

  return (
    <div>
      <div>{dynamicDateString} (dynamic)</div>
      <div>{props.staticDateString} (static with delay)</div>
    </div>
  );
}

export async function getStaticProps() {
  const staticDate = new Date();
  const staticDateString = staticDate.toUTCString();

  await delay(5000);
  return {
    props: {
      staticDateString,
    },
    revalidate: 1,
  };
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default time;

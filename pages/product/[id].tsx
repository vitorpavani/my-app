
function Product(props: any){
  return <div>Product ID: {props.id}</div>;
}

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export default Product;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context: { params: { id: any; }; }) {
  const { id } = context.params;

  await delay(5000);

  return {
    props: {
      id: id,
    },
  };
}
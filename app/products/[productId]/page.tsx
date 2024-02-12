import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${params.productId} `);
    }, 1000);
  });
  return {
    title: `Product ${title}`,
  };
};

type Props = {
  params: { productId: String };
};

export default function ProductList({ params }: Props) {
  return (
    <>
      <h1>Details about product {params.productId}</h1>
    </>
  );
}

"user client";
import { notFound } from "next/navigation";

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

export default function ReviewDetail({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  /*   const rand = getRandomInt(2);
  if (rand === 1) {
    throw new Error("Error loading review");
  } */
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}

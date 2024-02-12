const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /*   const rand = getRandomInt(2);
  if (rand === 1) {
    throw new Error("Error loading product");
  } */
  return (
    <>
      {children}
      <h2>features products</h2>
    </>
  );
}

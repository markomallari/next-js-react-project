"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing your order");
    router.push("/");
    //replace
    //forward
    //back
  };
  return (
    <>
      <div>Order Product</div>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}

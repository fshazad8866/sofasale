import { useRouter } from "next/router";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <p>{router.query.slug}</p>
    </div>
  );
};

export default Page;

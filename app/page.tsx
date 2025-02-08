import React from "react";
import Link from "next/link";

function Page() {
  return (
    <div className=" bg-slate-600 h-svh w-svw flex items-center justify-center">
      <Link href="/about">
      <button className=" bg-slate-900 px-20 py-8 rounded-xl font-poppins text-xl font-medium hover:bg-opacity-70">
        Open page
      </button>
      </Link>
      
    </div>
  );
}

export default Page;

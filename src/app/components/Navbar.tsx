import React from "react";
import Link from "next/link";

import { BookOpenCheck } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar bg-neutral-100 border-b">
      <div className="container ">
        <div className="flex-1">
          <Link href="/">
            <BookOpenCheck color="blue" />
          </Link>
        </div>
        <div className="flex-none border rounded-2xl">
          <Link href="/create" className="btn btn-ghost">
            Create Post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

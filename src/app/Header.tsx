import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between">
      <div className="flex justify-center items-center">
        <Image src="/TODO_APP.png" alt="" width={120} height={60} />
      </div>
      <nav className="flex justify-between gap-3">
        <Link
          href="/"
          className="px-4 py-2 bg-white rounded-md hover:bg-gray-200 transition-all duration-200"
        >
          ホーム
        </Link>
        <Link
          href="/createtodo"
          className="px-4 py-2 bg-white rounded-md hover:bg-gray-200 transition-all duration-200"
        >
          新規投稿
        </Link>
        <Link
          href="/"
          className="px-4 py-2 bg-white rounded-md hover:bg-gray-200 transition-all duration-200"
        >
          参考リンク
        </Link>
      </nav>
    </header>
  );
};

export default Header;

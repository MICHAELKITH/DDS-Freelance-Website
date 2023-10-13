import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
function HomeBanner() {
  const router = useRouter();
  const [image, setImage] = useState(1);
  const [searchData, setSearchData] = useState("");
  useEffect(() => {
    const interval = setInterval(
      () => setImage(image >= 6 ? 1 : image + 1),
      10000
    );
    return () => clearInterval(interval);
  }, [image]);

  return (
    <div className="h-[680px] relative bg-cover sm:none">
    <div className="absolute top-0 right-0 w-[110vw] h-full transition-opacity z-0 bg-black">
      {/* <Image
        alt="hero"
        src="/music.jpeg"
        fill
        className={`${
          image === 1 ? "opacity-100" : "opacity-0"
        } transition-all duration-1000`}
      />
      <Image
        alt="hero"
        src="/music.jpeg"
        fill
        className={`${
          image === 2 ? "opacity-100" : "opacity-0"
        } transition-all duration-1000`}
      />
      <Image
        alt="hero"
        src="/Tech.jpeg"
        fill
        className={`${
          image === 3 ? "opacity-100" : "opacity-0"
        } transition-all duration-1000`}
      />
      <Image
        alt="hero"
        src="/Design.jpeg"
        fill
        className={`${
          image === 4 ? "opacity-100" : "opacity-0"
        } transition-all duration-1000`}
      />
      <Image
        alt="hero"
        src="/Design.jpeg"
        fill
        className={`${
          image === 5 ? "opacity-100" : "opacity-0"
        } transition-all duration-1000`}
      />
      <Image
        alt="hero"
        src="/DDS PRINT LOGO.png"
        fill
        className={`${
          image === 6 ? "opacity-100" : "opacity-0"
        } transition-all duration-1000`}
      /> */}
    </div>
    <div className="z-10 relative w-[650px] flex justify-center flex-col h-full gap-5 ml-20">
      <h1 className="text-white text-5xl leading-snug">
        Freelance&nbsp;
        <i>Embarking</i>
        <br />
        Spiritual Entrepreneurship 
      </h1>
      <div className="flex align-middle">
        <div className="relative">
          <IoSearchOutline className="absolute text-gray-500 text-2xl flex align-middle h-full left-2" />
          <input
            type="text"
            className="h-14 w-[450px] pl-10 rounded-md rounded-r-none"
            placeholder={`Design Logo"`}
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
        </div>
        <button
          className="bg-[#d0c13e] text-white px-12 text-lg font-semibold rounded-r-md"
          onClick={() => router.push(`/search?q=${searchData}`)}
        >
          Search
        </button>
      </div>
      <div className="text-white flex gap-4">
        Popular: 
        <ul className="flex gap-5">
          <li
            className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300	cursor-pointer"
            onClick={() => router.push("/search?q=website design")}
          >
            Website Design
          </li>
          <li
            className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300	cursor-pointer"
            onClick={() => router.push("/search?q=wordpress")}
          >
            Music
          </li>
          <li
            className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300	cursor-pointer"
            onClick={() => router.push("/search?q=logo design")}
          >
            Logo Design
          </li>
          <li
            className="text-sm py-1 px-3 border rounded-full hover:bg-white hover:text-black transition-all duration-300	cursor-pointer"
            onClick={() => router.push("/search?q=ai services")}
          >
            SPSS
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
}

export default HomeBanner;

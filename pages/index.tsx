import React from "react";
import { BsTwitter } from "react-icons/bs";

import { CircularProgressBar } from "@/components/circular.progress.bar";

export default function Home() {
  const [postData, setPostData] = React.useState({
    maxLength: 160,
    currentLength: 0,
    body: "",
  });

  return (
    <div className="sm:max-w-xl mx-2 sm:mx-auto my-8 font-poppins">
      <h1 className="font-bold text-center text-lg sm:text-2xl">
        Character Counter For Tweet in Twitter <br />
        (with TypeScript, Tailwind CSS and SVG)
      </h1>

      <div className="mt-8 relative">
        <textarea
          className="w-full h-48 p-3 ring-2 rounded focus:outline-none resize-none"
          placeholder="Type your tweet here..."
          value={postData.body}
          onChange={(e) =>
            setPostData((prev) => ({
              ...prev,
              body: e.target.value,
              currentLength: e.target.value.length,
            }))
          }
        ></textarea>

        <div className="w-8 h-8 absolute bottom-2 right-0.5">
          <CircularProgressBar
            counterClassName="text-xs font-semibold"
            currentLength={postData.currentLength}
            maxLength={postData.maxLength}
            strokeWidth={8}
          />
        </div>
      </div>

      <div className="mt-4 text-center">
        <a
          href="https://twitter.com/mhm13dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-white hover:bg-blue-500 px-2 py-1 transition font-semibold hover:rounded border-b border-current inline-flex items-center gap-x-1"
        >
          <BsTwitter className="w-4 h-4" /> mhm13dev
        </a>
      </div>
    </div>
  );
}

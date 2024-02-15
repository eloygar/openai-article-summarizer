import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-14 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/eloygar", "_blank")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="dark_to_light_blue_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries. 
        <br/><strong>Note : not all URLs may contain an article.</strong>
        <br/><strong>Example : https://github.com/eloygar</strong>
      </h2>
    </header>
  );
};

export default Hero;

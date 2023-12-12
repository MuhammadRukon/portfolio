import Html from "../../assets/html.png";
import Css from "../../assets/css.png";
import Bootstrap from "../../assets/bootstrap.png";
import Tailwind from "../../assets/tailwind.png";
import React from "../../assets/react.png";
import Mongodb from "../../assets/mongoleaf.png";
import Firebase from "../../assets/firebase.png";
import Express from "../../assets/express-js.png";
import Js from "../../assets/js.png";
import JWT from "../../assets/jwt.png";
import Figma from "../../assets/figma.png";
const Skills = () => {
  return (
    <div id="skills">
      <h2 className="mt-44 lg:mt-72 font-bold text-center text-3xl lg:text-5xl font-robotoCondensed">
        Skills
      </h2>
      <h2 className="mt-10 font-semibold text-center text-xl lg:text-3xl font-robotoCondensed">
        Proficient in:
      </h2>
      {/*  */}
      <div className="flex flex-wrap gap-5 lg:gap-8 justify-center mt-8">
        <div className="bg-slate-900 flex justify-center hover:scale-125 transition-all w-14 h-14 items-center rounded-xl">
          <img className="w-12 p-1" src={React} alt="" />
        </div>
        <div className="bg-slate-900 flex justify-center hover:scale-125 transition-all w-14 h-14 items-center rounded-xl">
          <img className="w-12 p-1" src={Tailwind} alt="" />
        </div>
        <div className="bg-slate-900 flex justify-center hover:scale-125 transition-all w-14 h-14 items-center rounded-xl">
          <img className="w-12 p-1" src={Firebase} alt="" />
        </div>
        <div className="bg-slate-900 flex justify-center hover:scale-125 transition-all w-14 h-14 items-center rounded-xl">
          <img className="w-14 p-1" src={Html} alt="" />
        </div>
        <div className="bg-slate-900 flex justify-center hover:scale-125 transition-all w-14 h-14 items-center rounded-xl">
          <img className="w-10 p-1" src={Css} alt="" />
        </div>
      </div>
      {/*  */}
      <h2 className="mt-10 font-semibold text-center text-xl lg:text-3xl font-robotoCondensed">
        Good understanding in:
      </h2>
      {/*  */}
      <div className="flex flex-wrap gap-5 lg:gap-8 justify-center mt-8">
        <div className="bg-slate-900 flex justify-center hover:scale-125 transition-all w-14 h-14 items-center rounded-xl">
          <img className="w-11 p-px" src={Js} alt="" />
        </div>
        <div className="bg-slate-900 flex justify-center hover:scale-125 transition-all w-14 h-14 items-center rounded-xl">
          <img className="w-11 p-1" src={JWT} alt="" />
        </div>
        <div className="bg-slate-900 flex justify-center hover:scale-125 transition-all w-14 h-14 items-center rounded-xl">
          <img className="w-12 bg rounded-lg" src={Express} alt="" />
        </div>
        <div className="bg-slate-900 flex justify-center hover:scale-125 transition-all w-14 h-14 items-center rounded-xl">
          <img className="w-12 p-1" src={Mongodb} alt="" />
        </div>
      </div>
      <h2 className="mt-10 font-semibold text-center text-xl lg:text-3xl font-robotoCondensed">
        other skills:
      </h2>
      {/*  */}
      <div className="flex gap-5 lg:gap-8 justify-center mt-8">
        <div className="bg-slate-900 flex justify-center hover:scale-125 transition-all w-14 h-14 items-center rounded-xl">
          <img className="w-11 p-1" src={Bootstrap} alt="" />
        </div>
        <div className="bg-slate-900 flex justify-center hover:scale-125 transition-all w-14 h-14 items-center rounded-xl">
          <img className="w-14 p-px" src={Figma} alt="" />
        </div>
        <div className="bg-slate-900 flex justify-center text-xs p-1 text-center font-robotoCondensed font-bold hover:scale-125 transition-all w-14 h-14 items-center rounded-xl">
          <p>
            Typing <span className="text-sm font-extrabold">70+</span> wpm
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

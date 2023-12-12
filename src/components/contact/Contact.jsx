import React from "react";
import { SiGithub } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import Gmail from "../../assets/gmail.png";
import Linkedin from "../../assets/linkedin.png";
import Map from "../../assets/map.png";
import Fiver from "../../assets/fiver.png";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <div id="contact">
      <h2 className="font-bold text-center mt-20 mb-6 lg:mb-14 text-3xl lg:text-5xl font-robotoCondensed">
        Contact
      </h2>
      {/*  */}
      <div>
        <div className="flex flex-col lg:flex-row items-center pb-10">
          <div className="flex-1 w-full lg:w-1/2 rounded-lg">
            <form
              onSubmit={handleSubmit}
              className="card-body px-7 lg:px-10  mt-7"
            >
              <div className="flex flex-col md:flex-row w-full gap-4">
                <div className="form-control  lg:w-20 flex-1">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="first name"
                    className="input md:rounded-r-none md:rounded-b-none input-bordered focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control lg:w-20 flex-1">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="last name"
                    className="input md:rounded-l-none md:rounded-b-none  input-bordered focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered md:rounded-none focus:outline-none"
                  required
                />
              </div>
              <span className="label-text">Message</span>
              <textarea
                className="textarea h-[200px] rounded-none rounded-b-lg textarea-bordered resize-none focus:outline-none"
                placeholder="Write here..."
              ></textarea>
              <div className="form-control mt-6">
                <button className="btn text-lg  bg-primary hover:bg-primary text-white">
                  Mail
                </button>
              </div>
            </form>
          </div>
          <div className="divider my-10 lg:divider-horizontal">OR</div>
          <div className="flex-1">
            <div className="lg:ml-20 space-y-5  lg:space-y-10">
              <div className="flex items-center gap-3">
                <div className="bg-slate-900 animate-bounce flex justify-center hover:scale-125 transition-all w-12 h-12 items-center rounded-xl">
                  <img src={Gmail} className="p-1" alt="" />
                </div>
                <p className="text-lg xl:text-2xl">
                  muhammad.rukon242@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-slate-900 animate-bounce flex justify-center hover:scale-125 transition-all w-12 h-12 items-center rounded-xl">
                  <FaPhoneAlt size={24} />
                </div>
                <p className="text-lg xl:text-2xl">+8801815780053</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/muhammadrukon/"
                  target="#"
                  className="bg-slate-900 animate-bounce flex justify-center hover:scale-125 transition-all w-12 h-12 items-center rounded-xl"
                >
                  <img src={Linkedin} className="p-[7px]" alt="" />
                </a>
                <a
                  className="text-lg xl:text-2xl underline font-robotoCondensed"
                  href="https://www.linkedin.com/in/muhammadrukon/"
                  target="#"
                >
                  Linkedin
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/MuhammadRukon"
                  target="#"
                  className="bg-slate-900 animate-bounce flex justify-center hover:scale-125 transition-all w-12 h-12 items-center rounded-xl"
                >
                  <SiGithub size={35} />
                </a>
                <a
                  className="text-lg xl:text-2xl underline font-robotoCondensed"
                  href="https://github.com/MuhammadRukon"
                  target="#"
                >
                  Github
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.fiverr.com/mrrukon?public_mode=true"
                  target="#"
                  className="bg-slate-900 animate-bounce flex justify-center hover:scale-125 transition-all w-12 h-12 items-center rounded-xl"
                >
                  <img src={Fiver} className="p-[7px]" alt="" />
                </a>
                <a
                  className="text-lg xl:text-2xl underline font-robotoCondensed"
                  href="https://www.fiverr.com/mrrukon?public_mode=true"
                  target="#"
                >
                  Fiverr
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-slate-900 animate-bounce flex justify-center hover:scale-125 transition-all w-12 h-12 items-center rounded-xl">
                  <img src={Map} className="p-[10px]" alt="" />
                </div>
                <p className="text-lg xl:text-2xl">
                  Hazaribagh, Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Contact;

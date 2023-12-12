import BannerImg from "../../assets/cover.com.png";
import Container from "../container/Container";
import { Typewriter } from "react-simple-typewriter";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const words = [
  "Frontend Developer",
  "React Js Developer",
  "Front End Engineer",
];
const Banner = () => {
  return (
    <Container>
      <div className="mt-5 sm:mt-10">
        <div className="bg-[rgb(0,0,0,0.4)] text-white lg:max-w-[50%] px-6  pt-20 lg:pt-44">
          <h1 className="text-4xl lg:text-5xl">
            <span className="font-extrabold">Muhammad</span>{" "}
            <span className="font-robotoCondensed">Sheikh Rukon</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl font-bold mt-4">
            I'm a&nbsp;
            <span className="bg-gradient-to-r bg-clip-text text-transparent  from-blue-400 to-blue-700">
              <Typewriter
                loop
                words={words}
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </h2>
          <p className="mt-10 font-robotoCondensed leading-7 mb-10">
            I am a React developer who is also specialized in Express.js,
            MongoDB (Mongoose), and Firebase. I am currently studying computer
            science and engineering at Daffodil Institute of IT, striving to
            become a full-stack web developer.
          </p>
          <div className="flex gap-4 items-center">
            <a href="https://www.linkedin.com/in/muhammadrukon/" target="#">
              <FaLinkedin size={40} color="#0077B5" />
            </a>
            <div className="divider lg:divider-horizontal"></div>
            <a href="https://github.com/MuhammadRukon" target="#">
              <FaGithub size={40} color="gray" />
            </a>
            <div className="flex items-center gap-4 ml-10">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              >
                <FaChevronLeft size={24} />
              </motion.div>
              <p className="font-robotoCondensed">Have a look</p>
            </div>
          </div>
          <div className="absolute top-[85vh]">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
              <p>view more</p>
              <FaChevronDown size={24} />
            </motion.div>
          </div>
        </div>
        <div className="absolute right-0 -z-10 top-20 sm:top-5 lg:top-20">
          <img src={BannerImg} className="w-full" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Banner;

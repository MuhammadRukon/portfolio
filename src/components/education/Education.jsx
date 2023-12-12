import { useLottie } from "lottie-react";
import education from "../../assets/study.json";
const Education = () => {
  const options = {
    animationData: education,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div id="education">
      <h2 className="font-bold text-center mt-20 mb-6 lg:mb-14 text-3xl lg:text-5xl font-robotoCondensed">
        Education
      </h2>
      <div className="px-3 flex justify-between flex-col lg:flex-row items-center">
        <div className="flex-1 ml-5">
          <div className="space-y-2 mt-10">
            <h2 className="text-2xl font-bold">Daffodil Institute of IT</h2>
            <p>
              <span className="font-bold">BSc</span> in Computer science and
              engineering (3rd year)
            </p>
            <p>Anticipated Graduation: 2025</p>
          </div>
          <div className="space-y-2 mt-10">
            <h2 className="text-2xl font-bold">
              Bangladesh International School and College
            </h2>
            <p>
              <span className="font-bold">HSC</span> - Science
            </p>
            <p>2016-18</p>
          </div>
          <div className="space-y-2 mt-10">
            <h2 className="text-2xl font-bold">Holy Flower Model College</h2>
            <p>
              <span className="font-bold">HSC</span> - Science
            </p>
            <p>2018-2019</p>
          </div>
        </div>
        <div className="flex-1 p-5">{View}</div>
      </div>
    </div>
  );
};

export default Education;

import { FaStar } from "react-icons/fa";
import { useLottie } from "lottie-react";
import achievement from "../../assets/achievement.json";
const Achivement = () => {
  const options = {
    animationData: achievement,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div id="achievements">
      <h2 className="font-bold text-center mt-20 text-3xl lg:text-5xl font-robotoCondensed">
        Achivement
      </h2>
      <div className="flex flex-col-reverse items-center lg:flex-row justify-between px-4">
        <div className="p-10 lg:w-1/3">{View}</div>
        <div className="flex-1 lg:pr-32 ">
          <div className="space-y-2 mt-10 text-center lg:text-right">
            <h2 className="text-2xl font-bold">Fiverr</h2>
            <p className="flex justify-center lg:justify-end gap-1 items-center">
              <span className="font-bold">5</span>
              <FaStar color="yellow" /> rated seller.
            </p>
            <p>
              Project: <span className="font-bold">Frete</span>{" "}
              <a
                className="text-blue-700 underline ml-4"
                href="https://frete-a8155.web.app/"
              >
                demo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achivement;

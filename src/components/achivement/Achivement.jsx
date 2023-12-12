import { FaStar } from "react-icons/fa";
const Achivement = () => {
  return (
    <div>
      <h2 className="font-bold text-right text-3xl lg:text-5xl font-robotoCondensed">
        Achivement
      </h2>
      <div className="space-y-2 mt-10 text-right">
        <h2 className="text-2xl font-bold">Fiverr</h2>
        <p className="flex justify-end gap-1 items-center">
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
  );
};

export default Achivement;

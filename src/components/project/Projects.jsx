import CozyCover from "../../assets/cozyLife.jpg";
import SaveLifeCover from "../../assets/savelifeCover.png";
import SnackieCover from "../../assets/snackie.png";
const Projects = () => {
  return (
    <div id="projects">
      <h2 className="mt-20 font-bold text-center text-3xl lg:text-5xl font-robotoCondensed">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-5 2xl:px-0">
        <div className="card hover:scale-110 transition-all  glass">
          <figure>
            <img src={SaveLifeCover} alt="project" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">SaveLife</h2>
            <p>A MERN based Blood donation website</p>
            <div className="card-actions justify-start mt-5">
              <a
                href="https://savelife-6b7c9.web.app"
                target="#"
                className="btn border-1 border-white btn-primary"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/MuhammadRukon/SaveLife-client"
                target="#"
                className="btn border-1 border-white btn-primary"
              >
                client
              </a>
              <a
                href="https://github.com/MuhammadRukon/SaveLife-Server"
                target="#"
                className="btn border-1 border-white btn-primary"
              >
                server
              </a>
            </div>
          </div>
        </div>
        <div className="card hover:scale-110 transition-all glass">
          <figure>
            <img src={CozyCover} alt="project" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">CozySuite</h2>
            <p>A MERN based room booking website</p>
            <div className="card-actions justify-start mt-5">
              <a
                href="https://cozysuite-15955.web.app/"
                target="#"
                className="btn border-1 border-white btn-primary"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/MuhammadRukon/CozySuite-client"
                target="#"
                className="btn border-1 border-white btn-primary"
              >
                client
              </a>
              <a
                href="https://github.com/MuhammadRukon/CozySuite-Server"
                target="#"
                className="btn border-1 border-white btn-primary"
              >
                server
              </a>
            </div>
          </div>
        </div>
        <div className="card hover:scale-110 transition-all glass">
          <figure>
            <img src={SnackieCover} alt="project" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Snackie</h2>
            <p>A MERN based shop website</p>
            <div className="card-actions justify-start mt-5">
              <a
                href="https://brand-shop-48c61.web.app/"
                target="#"
                className="btn border-1 border-white btn-primary"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/MuhammadRukon/snackie-client"
                target="#"
                className="btn border-1 border-white btn-primary"
              >
                client
              </a>
              <a
                href="https://github.com/MuhammadRukon/snackie-server"
                target="#"
                className="btn border-1 border-white btn-primary"
              >
                server
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

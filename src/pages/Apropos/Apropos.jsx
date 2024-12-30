<<<<<<< HEAD
import Banner from "../../composants/Banner/Banner";
import imgApropos from "../../images/imgApropos.png";
import Collapse from "../../composants/Collapse/Collapse";
import CollapseData from "../../donnees/collapseData.json";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Apropos() {
  return (
    <div className="apropos">
      <Banner image={imgApropos} title="image" />
      <div className="collapse">
        {CollapseData.map((item) => (
          <Collapse key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default Apropos;
=======
import Banner from "../../composants/Banner/Banner";
import imgApropos from "../../images/imgApropos.png";
import Collapse from "../../composants/Collapse/Collapse";
import CollapseData from "../../donnees/collapseData.json";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Apropos() {
  return (
    <div className="apropos">
      <Banner image={imgApropos} title="image" />
      <div className="collapse">
        {CollapseData.map((item) => (
          <Collapse key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default Apropos;
>>>>>>> 0618f01408ec03809c450b68336ce8eccee9970c

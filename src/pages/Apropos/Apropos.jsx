import Banner from "../../composants/Banner/Banner";
import imgApropos from "../../images/imgApropos.png";
import Collapse from "../../composants/Collapse/Collapse";
import CollapseData from "../../donnees/collapseData.json";

function Apropos() {
  return (
    <div className="apropos">
      <Banner image={imgApropos} title="image" />
      <div className="collapse">
        <div className="collapse-barre">
        <i class="fa-solid fa-chevron-up"></i>
          <div className="collapse-titre">
          {CollapseData.map((item) => (
            <Collapse key={item.id} title={item.title} content={item.content} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apropos;

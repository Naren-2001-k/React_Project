      
import ITsection from "./ITsection";
import "./Sub_ITsection.css";
import Image1 from "../image/web-programming.png";
import Image2 from "../image/secure.png";
import Image3 from "../image/services.svg";
function Sub_ITsection() {
    return (
        <div className="Sub_ITsection">
      <ITsection
        image={Image1}
        heading="Web Development"
        content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
            />
            <div className="middleimg">
                <img src={Image3} alt="" className="center"/>
                </div>
      <ITsection
        image={Image2}
        heading="Server Security"
        content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
      />
        </div>
    );
}
export default Sub_ITsection;
import React from "react";
import "./Main.css";
import namecard from "../img/namecard.png";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div class="canvas">
        {/*<!-- 상원 -->*/}
        <svg class="c01">
          <circle cx="70" cy="70" r="57.5" />
        </svg>
        {/*<!-- 상원라인 -->*/}
        <div class="c01_line01"></div>
        <div class="c01_line02"></div>
        <div class="c01_line03"></div>
        <div class="c01_line04"></div>

        {/*<!-- 삼각형 -->*/}
        <svg class="tri">
          <polygon points="145,25 268,238 22,238" />
        </svg>
        <div class="black"></div>
        <svg class="tri02">
          <polygon points="145,25 268,238 22,238" />
        </svg>

        {/*<!-- 사각형 -->*/}
        <div class="rect">
          <span class="line01"></span>
          <span class="line02"></span>
          <span class="line03"></span>
          <span class="line03_1"></span>
          <span class="line04"></span>
        </div>

        {/*<!-- 하원 -->*/}
        <svg class="c02">
          <circle cx="70" cy="70" r="57.5" />
        </svg>
        {/*<!-- 하원 라인 -->*/}
        <div class="c02_line01"></div>
        <div class="c02_line02"></div>
        <div class="c02_line03"></div>
        <div class="c02_line04"></div>

        {/*<!-- ㅇ -->*/}
        <svg class="c03">
          <circle cx="55" cy="55" r="40" />
        </svg>
        {/*<!-- 다른색 -->*/}
        <svg class="c04">
          <circle cx="55" cy="55" r="40" />
        </svg>
        {/*<!-- ㅗ -->*/}
        <div class="first_letter">
          <span class="line01"></span>
          <span class="line02"></span>
        </div>

        {/*<!-- ㅈ -->*/}
        <div class="second_letter01"></div>
        {/*<!-- ㅣ -->*/}
        <div class="second_letter02"></div>
        {/*<!-- ㅇ -->*/}
        <svg class="c05">
          <circle cx="42.5" cy="42.5" r="30" />
        </svg>

        {/*<!-- ㅇ -->*/}
        <svg class="c06">
          <circle cx="42.5" cy="42.5" r="30" />
        </svg>
        {/*<!-- - -->*/}
        <div class="third_letter01"></div>
        {/*<!-- ㅣ -->*/}
        <div class="third_letter02"></div>

        {/*<!-- - -->*/}
        <div class="fourth_letter01"></div>
        {/*<!-- / -->*/}
        <div class="fourth_letter02_wrap">
          <div class="fourth_letter02"></div>
        </div>
        {/*<!-- - -->*/}
        <div class="fourth_letter03"></div>
        {/*<!-- | -->*/}
        <div class="fourth_letter04"></div>
        {/*<!-- | -->*/}
        <div class="fourth_letter05"></div>

        {/*<!-- ㅇ -->*/}
        <svg class="c07">
          <circle cx="42.5" cy="42.5" r="30" />
        </svg>
        {/*<!-- l -->*/}
        <div class="fifth_letter01"></div>
        {/*<!-- ㅁ -->*/}
        <div class="fifth_letter02"></div>
        <div class="fifth_letter04"></div>
        <div class="fifth_letter05"></div>
      </div>
      <img
        class="startbutton"
        src={namecard}
        style={{ width: "100px", height: "60px", marginTop: "30px" }}
        onClick={() => {
          navigate("/start");
        }}
      ></img>
    </div>
  );
};
export default Main;

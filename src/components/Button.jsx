import React, { useContext } from "react";
import "./Button.css";
import { MyContext } from "../App";
const Button = () => {
  const context = useContext(MyContext);
  return (
    <div>
      <button
        onClick={() => {
          setTimeout(() => {
            context.setDisplay("none");
          }, 4000);
          context.setDisplay("block");

          //   console.log(context);
          if (context.theme.color === "white") {
            context.setTheme({ backgroundColor: "white", color: "black" });
          } else {
            context.setTheme({ backgroundColor: "black", color: "white" });
          }
        }}
      >
        {context.theme.color === "white" ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default Button;

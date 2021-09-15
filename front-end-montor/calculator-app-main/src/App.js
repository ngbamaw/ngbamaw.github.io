import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import StyledApp from "./style";

const getValue = (value) => Number(value.replace(",", "."));
const valueToString = (value) => String(value).replace(".", ",");
const getResult = (operation) => {
  switch (operation[1]) {
    case "+":
      return getValue(operation[0]) + getValue(operation[2]);
    case "-":
      return getValue(operation[0]) - getValue(operation[2]);
    case "x":
      return getValue(operation[0]) * getValue(operation[2]);
    case "/":
      return getValue(operation[0]) / getValue(operation[2]);
    default:
  }
};

const explodeOperation = (operation) => {
  const [original, left, operator, right] = /(.*)([-x/+])(.*)/.exec(
    operation.replace(/,/g, ".")
  );
  return [left, operator, right];
};

const theme1 = {
  mainBg: "hsl(222, 26%, 31%)",
  toggleAndKeypadBg: "hsl(223, 31%, 20%)",
  screenBg: "hsl(224, 36%, 15%)",
  headerTextColor: "white",
  keyBg: ["hsl(225, 21%, 49%)", "hsl(6, 63%, 50%)", "hsl(30, 25%, 89%)"],
  shadowColor: ["hsl(224, 28%, 35%)", "hsl(6, 70%, 34%)", "hsl(28, 16%, 65%)"],
  text: ["hsl(221, 14%, 31%)"],
};
const theme2 = {
  mainBg: "hsl(0, 0%, 90%)",
  toggleAndKeypadBg: "hsl(0, 5%, 81%)",
  screenBg: "hsl(0, 0%, 93%)",
  headerTextColor: "hsl(60, 10%, 19%)",
  keyBg: ["hsl(185, 42%, 37%)", "hsl(25, 98%, 40%)", " hsl(45, 7%, 89%)"],
  shadowColor: ["hsl(185, 58%, 25%)", "hsl(25, 99%, 27%)", "hsl(35, 11%, 61%)"],
  text: ["hsl(60, 10%, 19%)", "hsl(0, 0, 100%)"],
};
const theme3 = {
  mainBg: "hsl(268, 75%, 9%)",
  toggleAndKeypadBg: "hsl(268, 71%, 12%)",
  screenBg: "hsl(268, 71%, 12%)",
  headerTextColor: "hsl(52, 100%, 62%)",
  keyBg: ["hsl(281, 89%, 26%)", "hsl(176, 100%, 44%)", "hsl(268, 47%, 21%)"],
  shadowColor: [
    "hsl(285, 91%, 52%)",
    "hsl(177, 92%, 70%)",
    "hsl(290, 70%, 36%)",
  ],
  text: ["hsl(52, 100%, 62%)", "hsl(198, 20%, 13%)", "hsl(0, 0, 100%)"],
};

function App() {
  const [display, setDisplay] = React.useState("0");
  const [number1, setNumber1] = React.useState("0");
  const [number2, setNumber2] = React.useState("");
  const [decimal1, setDecimal1] = React.useState(false);
  const [decimal2, setDecimal2] = React.useState(false);
  const [operator, setOperator] = React.useState("");
  const [theme, setTheme] = React.useState(theme1);

  React.useEffect(() => {
    if (operator === "") setDisplay(number1);
    if (operator !== "" && number2 === "") setDisplay(`${number1}${operator}`);
    if (operator !== "" && number2 !== "")
      setDisplay(`${number1}${operator}${number2}`);
  }, [number1, operator, number2]);

  const setResult = () => {
    const result = valueToString(getResult(explodeOperation(display)));
    setDisplay(result);
    setNumber1(result);
    setNumber2("");
    setOperator("");
  };

  React.useEffect(() => {
    if (number1.includes(",")) setDecimal1(true);
    else setDecimal1(false);
  }, [number1]);

  React.useEffect(() => {
    if (number2.includes(",")) setDecimal2(true);
    else setDecimal2(false);
  }, [number2]);

  const handleToken = (e) => {
    const token = e.target.textContent;
    if (isNaN(+token)) {
      switch (token) {
        case "+":
        case "-":
        case "x":
        case "/":
          if (display !== "0" && !operator) {
            setOperator(token);
          }

          if (operator && !/[-x/+]/.test(display[display.length - 1])) {
            setResult();
            setOperator(token);
          }
          break;
        case "=":
          setResult();
          break;
        case ".":
          if (!/[-x/+]/.test(display[display.length - 1])) {
            if (!decimal1 && !operator) {
              setNumber1(number1 + ",");
            }
            if (operator && !decimal2) {
              setNumber2(number2 + ",");
            }
          }
          break;
        case "RESET":
          setDisplay("0");
          setNumber1("0");
          setNumber2("0");
          setOperator("");
          break;
        case "DEL":
          if (/[-x/+]/.test(display[display.length - 1])) {
            setOperator("");
          }
          if (!operator) {
            setNumber1(number1.slice(0, number1.length - 1) || "0");
          } else {
            setNumber2(number2.slice(0, number2.length - 1));
          }
          break;
        default:
      }
    } else {
      if (!operator) {
        if (token !== "0" || number1 !== "0") setNumber1(number1 + token);
        if (number1 === "0") setNumber1(token);
      } else {
        if (token !== "0" || number2 !== "0") setNumber2(number2 + token);
        if (number2 === "0") setNumber2(token);
      }
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <div className="calculator">
          <div className="header">
            <h2 className="title">calc</h2>
            <div className="theme-container">
              <p className="label">THEME</p>
              <div className="choice-theme">
                <input
                  id="theme-1"
                  type="radio"
                  name="theme"
                  onChange={() => setTheme(theme1)}
                />
                <label htmlFor="theme-1" className="btn-theme">
                  <p>1</p>
                </label>
                <input
                  id="theme-2"
                  type="radio"
                  name="theme"
                  onChange={() => setTheme(theme2)}
                />
                <label htmlFor="theme-2" className="btn-theme">
                  <p>2</p>
                </label>
                <input
                  id="theme-3"
                  type="radio"
                  name="theme"
                  onChange={() => setTheme(theme3)}
                />
                <label htmlFor="theme-3" className="btn-theme">
                  <p>3</p>
                </label>
                <div className="cursor"></div>
              </div>
            </div>
          </div>
          <div className="result-display">{display}</div>
          <div className="keyboard">
            <button className="btn" onClick={handleToken}>
              7
            </button>
            <button className="btn" onClick={handleToken}>
              8
            </button>
            <button className="btn" onClick={handleToken}>
              9
            </button>
            <button className="btn del" onClick={handleToken}>
              DEL
            </button>
            <button className="btn" onClick={handleToken}>
              4
            </button>
            <button className="btn" onClick={handleToken}>
              5
            </button>
            <button className="btn" onClick={handleToken}>
              6
            </button>
            <button className="btn" onClick={handleToken}>
              +
            </button>
            <button className="btn" onClick={handleToken}>
              1
            </button>
            <button className="btn" onClick={handleToken}>
              2
            </button>
            <button className="btn" onClick={handleToken}>
              3
            </button>
            <button className="btn" onClick={handleToken}>
              -
            </button>
            <button className="btn" onClick={handleToken}>
              .
            </button>
            <button className="btn" onClick={handleToken}>
              0
            </button>
            <button className="btn" onClick={handleToken}>
              /
            </button>
            <button className="btn" onClick={handleToken}>
              x
            </button>
            <button className="btn special" onClick={handleToken}>
              RESET
            </button>
            <button className="btn result" onClick={handleToken}>
              =
            </button>
          </div>
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

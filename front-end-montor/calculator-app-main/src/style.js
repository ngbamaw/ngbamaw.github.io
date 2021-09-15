import styled from "styled-components";
const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Spartan", sans-serif;
  font-weight: 700;
  background-color: ${(props) => props.theme.mainBg};
  height: 100vh;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .calculator {
    width: 100%;
    max-width: 400px;
    margin: auto;
  }

  .header {
    color: ${(props) => props.theme.headerTextColor};
    .title {
      font-weight: 700;
      margin-bottom: 12px;
    }
    display: flex;
    #theme-1,
    #theme-2,
    #theme-3 {
      display: none;
    }
    label {
      text-align: center;
      p {
        transform: translateY(calc(-100% - 5px));
      }
    }
    .theme-container {
      display: flex;
      margin-left: auto;
      height: fit-content;
      .label {
        align-self: center;
        margin-right: 24px;
        font-size: 12px;
      }
    }
    .choice-theme {
      width: 75px;
      height: 25px;
      display: flex;
      background-color: ${(props) => props.theme.toggleAndKeypadBg};
      border-radius: 25px;
      position: relative;
      .cursor {
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${(props) => props.theme.keyBg[1]};
        height: 100%;
        width: 25px;
        transition: 0.2s all;
        border-radius: 50%;
        transform: scale(0.7);
      }
      .btn-theme {
        flex: 1;
      }
      #theme-1:checked ~ .cursor {
        left: 0px;
      }
      #theme-2:checked ~ .cursor {
        left: 25px;
      }
      #theme-3:checked ~ .cursor {
        left: 50px;
      }
    }
  }
  .result-display {
    font-size: 36px;
    font-weight: 700;
    color: ${(props) => props.theme.headerTextColor};
    background-color: ${(props) => props.theme.screenBg};
    padding: 24px;
    border-radius: 12px;
    margin-bottom: 12px;
    text-align: right;
  }

  .keyboard {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 50px);
    gap: 18px;
    padding: 12px;
    background-color: ${(props) => props.theme.toggleAndKeypadBg};
    border-radius: 12px;
    font-weight: 700;
    .btn {
      color: ${(props) => props.theme.text[0]};
      border: none;
      background-color: ${(props) => props.theme.keyBg[2]};
      box-shadow: inset 0px -5px 0px 0px ${(props) => props.theme.shadowColor[2]};
      padding: 0 12px;
      font-size: 32px;
      font-weight: 700;
      border-radius: 8px;
      &.special {
        grid-column: 1/3;
        font-size: 14px;
        background-color: ${(props) => props.theme.keyBg[0]};
        color: white;
        box-shadow: inset 0px -5px 0px 0px ${(props) => props.theme.shadowColor[0]};
      }
      &.del {
        font-size: 14px;
        background-color: ${(props) => props.theme.keyBg[0]};
        color: white;
        box-shadow: inset 0px -5px 0px 0px ${(props) => props.theme.shadowColor[0]};
      }
      &.result {
        grid-column: 3/5;
        font-size: 12px;
        background-color: ${(props) => props.theme.keyBg[1]};
        box-shadow: inset 0px -5px 0px 0px ${(props) => props.theme.shadowColor[1]};
        color: black;
      }
    }
  }

  @media all and (max-width: 786px) {
    .calculator {
      width: fit-content;
      margin: auto;
    }
    .keyboard {
      grid-template-columns: repeat(4, 55px);
      grid-template-rows: repeat(5, 55px);
      padding: 18px;
    }
  }
`;

export default StyledApp;

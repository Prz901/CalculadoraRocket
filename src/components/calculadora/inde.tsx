import { useState } from "react";
import { chars } from "./chars";

export function Calculadora() {
  const [operation, setOperation] = useState("");

  const [number, setNumber] = useState(0);
  const [acumulator, setAcumulator] = useState(0);

  const [macete, setMacete] = useState(0);
  const [historyOperation, setHistoryOperation] = useState("0");

  const handleOperation = (text: string) => {
    handleSwitchNumbers(text);
    handleSwitchOperations(text);
  };

  const checkNumber = (text: string) => {
    if (isNaN(parseInt(text))) {
      return true;
    }
    return false;
  };

  const handleSwitchNumbers = (text: string) => {
    const check = checkNumber(text);
    if (!check && macete === 0) {
      setNumber(parseInt(text));
      setMacete(1);
    }
    if (!check && macete > 0) {
      let aux = number.toString() + "" + text;
      setNumber(parseInt(aux));
      setMacete(1);
    }
  };

  const handleSwitchOperations = (text: string) => {
    switch (text) {
      case "CE":
        setNumber(0);
        setAcumulator(0);
        setMacete(0);
        setHistoryOperation("0");
        break;
      case "C":
        setNumber(0);
        setAcumulator(0);
        setMacete(0);
        setHistoryOperation("0");
        break;
      case "%":
        setOperation(text);
        setAcumulator(0);
        setMacete(0);
        break;
      case "÷":
        setOperation(text);
        setAcumulator(number);
        setMacete(0);
        break;
      case "x":
        setOperation(text);
        setAcumulator(number);
        setMacete(0);
        break;
      case "-":
        setOperation(text);
        setAcumulator(number);
        setMacete(0);
        break;
      case "+":
        setOperation(text);
        setAcumulator(number);
        setMacete(0);
        break;
      case "+/-":
        setOperation(text);
        setAcumulator(number);
        setMacete(0);
        break;
      case "=":
        handleResult();
        break;
    }
  };

  const handleResult = () => {
    let operationString = "";
    switch (operation) {
      case "+":
        const sum = number + acumulator;
        operationString = acumulator.toString() + "+" + number.toString();
        setAcumulator(sum);
        setNumber(sum);
        setHistoryOperation(operationString);
        break;
      case "-":
        const minus = acumulator - number;
        operationString = acumulator.toString() + "-" + number.toString();
        setAcumulator(minus);
        setNumber(minus);
        setHistoryOperation(operationString);
        break;
      case "÷":
        const division = acumulator / number;
        operationString = acumulator.toString() + "÷" + number.toString();
        setAcumulator(division);
        setNumber(division);
        setHistoryOperation(operationString);
        break;
      case "x":
        const multiplication = acumulator * number;
        operationString = acumulator.toString() + "*" + number.toString();
        setAcumulator(multiplication);
        setNumber(multiplication);
        setHistoryOperation(operationString);
        break;
    }
  };

  return (
    <div className="h-[566px] w-[356px] bg-[#2D2A37] rounded-[48px] flex flex-col items-center justify-start shadow-xl ">
      <div className="w-[288px] h-[86px] mt-14 flex flex-col items-center justify-between">
        <div className="w-full px-4 text-end">
          <p className="text-[#6B6B6B] text-xl">{historyOperation}</p>
        </div>
        <div className="w-full flex items-center justify-between px-4">
          <p className="text-[#6B6B6B] text-xl">=</p>
          <p className="text-4xl text-[#EBEBEB]">{number}</p>
        </div>
      </div>
      <div className="h-[300px] w-[298px]  mt-4 flex items-center justify-between flex-wrap">
        {chars.map((element, index) => {
          return (
            <div
              className="w-16 h-16 shadow-xl rounded-[99px] flex items-center justify-center my-1"
              style={{
                background: element.background,
                boxShadow:
                  "0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06)",
              }}
              key={index}
            >
              <p
                className={`text-xl text-[#${element.color}] cursor-pointer`}
                onClick={() => handleOperation(element.text)}
              >
                {element.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

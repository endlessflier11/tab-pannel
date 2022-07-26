import "./styles.css";
import { useState } from "react";

const TabNames = ["TOUR", "FEATUERS", "PRICING"];
const initialItemList = [
  ["item1", "item12", "item13"],
  ["item2", "item22", "item23", "item24"],
  ["item3", "item32", "item33"]
];
function TabButton(props) {
  return (
    <button
      className={props.index === props.selected ? "btn active" : "btn"}
      onClick={() => props.handleClick(props.index)}
    >
      props.name
    </button>
  );
}
function ImageTabPanel() {
  const [tabButton, setTabButton] = useState(0);

  const handleClick = (index) => {
    setTabButton(index);
  };
  return (
    <div>
      <div className="header" id="myHeader">
        {TabNames.map((tab, index) => (
          <TabButton
            key={tab}
            index={index}
            name={tab}
            handleClick={handleClick}
            selected={tabButton}
          />
        ))}
      </div>
      <div className="textList">
        {initialItemList[tabButton].map((textItem, index) => (
          <div key={index} className="classItem">
            {textItem}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ImageTabPanel />
    </div>
  );
}

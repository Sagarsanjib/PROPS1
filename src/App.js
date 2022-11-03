

import './App.css';
import DisplayCard from './Components/DisplayCard';

function App() {

  const color_code =[
    {
      color_name: "Pink",
      color_code : "#ff6663",
    },
    {
      color_name: "Grey",
      color_code : "#333333",
    },
    {
      color_name: "Black",
      color_code : "#000000",
    },
    {
      color_name: "Green",
      color_code : "#38bb14",
    },
    {
      color_name: "Red",
      color_code : "#c90b0b",
    },
    {
      color_name: "Orange",
      color_code : "#ff8000",
    },
    {
      color_name: "Yellow",
      color_code : "#fff500",
    },
    {
      color_name: "Light Grey",
      color_code : "#cccccc",
    },
    {
      color_name: "Purple",
      color_code : "#7e41a2",
    },
    {
      color_name: "Brown",
      color_code : "#c14911",
    },
  ];
  
  console.log(color_code);
  return (
    <div style={{paddingLeft:"100px"}}>
    <DisplayCard colors={color_code} />
    </div>
  
  );
}

export default App;

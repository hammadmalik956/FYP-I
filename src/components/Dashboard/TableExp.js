import { React, useState } from "react";

const TableExp = (props) => {
  // getting table column for props
  const column = props.column;

  const [data, setData] = useState([]);
  const [isMinimized, setIsMinimized] = useState(false);
  const [values, setValues] = useState(Array(column.length).fill(""));

  const handleAdd = () => {
    setData([...data, { ...values }]);
    setValues(Array(column.length).fill(""));
    console.log(values)
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleInputChange = (index, event) => {
    const newValues = [...values];
    newValues[index] = event.target.value;
    setValues(newValues);
  };

  return (
    <div className=" m-4 border-blue-500 border-1 bg-white ">
      <div
        className="flex  items-center justify-between bg-blue-500  py-2 px-3 cursor-pointer"
        onClick={handleMinimize}
      >
        <div className="flex items-center text-white mx-2">
          {props.headIcon}
          <div className="font-medium py-2 mx-2">{props.tname}</div>
        </div>
        <div className="text-white">{isMinimized ? "+" : "-"}</div>
      </div>
      <div className="m-4 ">
      {!isMinimized && (
        <table className=" w-full  border border-gray-200 text-smal  ">
          <thead className="bg-gray-900 text-white text-center  ">
            <tr>
              <td className="  px-4 py-2">Sr</td>
              {column.map((item, index) => (
                <td key={index} className=" px-4 py-2">{item}
                  <input 
                    className="mx-2 pl-2 rounded-sm text-black w-[10rem]"
                    type="text"
                    value={values[index]}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
              ))}
              <td className=" px-4 py-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleAdd}
                >
                  Add
                </button>
              </td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}  className={`${index % 2 === 0 ? "bg-gray-200" : "" } text-center  `}>
                <td className="border-r border-gray-200 px-4 py-2">{index + 1}</td>
                {Object.values(item).map((value, index) => (
                  <td key={index} className=" px-4 py-2 border-r border-gray-200   ">
                    {value}
                  </td>
                ))}
                <td className="border-r border-gray-200  px-4 py-2"></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </div>
    </div>
  );
};

export default TableExp;

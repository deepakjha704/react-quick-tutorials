import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App({ matrixSize = 10 }) {
  const [grid, setGrid] = useState([]);
  const [dragStart, setDragStart] = useState([]);
  const [dragEnd, setDragEnd] = useState([]);
  // const [selectedItem, setSelectedItem] = useState([]);

  // prepare grid matrix array
  const prepareMatrix = () => {
    const dummyMatrix = [];
    for (let i = 0; i < matrixSize; i++) {
      for (let j = 0; j < matrixSize; j++) {
        dummyMatrix.push({ item: [i, j], selected: false });
      }
    }
    setGrid(dummyMatrix);
  };

  // prepare the matrix on comp mount in useEffect
  useEffect(() => {
    prepareMatrix();
  }, []);

  // set drag Starting point in to state
  const onDragStart = (item) => {
    setDragStart(item);
  };

  // set drag End point into the state
  const onDragEnd = (item) => {
    setDragEnd(item);
  };

  const calculateDraggedElement = useCallback((dragStart, dragEnd) => {
    if (!(dragStart.length > 0 && dragEnd.length > 0)) return;
    const selectedItems = [];
    const [startRow, startColum] = dragStart;
    const [endRow, endColum] = dragEnd;
    for (let i = startRow; i <= endRow; i++) {
      for (let j = startColum; j <= endColum; j++) {
        selectedItems.push([i, j].join(""));
      }
    }
    if (selectedItems.length < 1) return;
    const updateGrid = grid.map(({ item, selected }, index) => ({
      item,
      selected: selectedItems.includes(item.join("")),
    }));

    setGrid(updateGrid);
  });

  useEffect(() => {
    calculateDraggedElement(dragStart, dragEnd);
  }, [dragStart, dragEnd]);
  // calculate the selected grid objects on any of start end drag point changed

  return (
    <div className="flex flex-col">
      <span>Selectable Grid</span>
      <div className="grid grid-cols-10">
        {grid.map(({ item, selected }, index) => (
          <div
            draggable
            onDrag={() => onDragStart(item)}
            onDragOver={() => onDragEnd(item)}
            className={`h-10 w-10 border flex items-center justify-center ${
              selected && "bg-green-200 text-red-500"
            }`}
            key={index}
          >
            {index}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

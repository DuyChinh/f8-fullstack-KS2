import PointBar from './PointBar/PointBar';
import { useState } from 'react';

const TestGame = () => {
  const [parentValue, setParentValue] = useState(0);

  const handleValueChange = (newValue) => {
    setParentValue(newValue); // Cập nhật giá trị mới trong thành phần cha
  };
  let MAX_TIME = Math.ceil(Math.log2(parentValue));
  if(MAX_TIME === -Infinity) {
    MAX_TIME = 0;
  }
  return (
    <div>
        <h2>
            Còn {MAX_TIME}/{MAX_TIME} lần
        </h2>
      <h3>Bạn cần tìm 1 số từ 1 đến {parentValue}</h3>
      <PointBar onValueChange={handleValueChange} />
    </div>
  );
}

export default TestGame

import { useState } from 'react';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('default');

  const handleChange = (event) => {
    const color = event.target.value;
    setSelectedColor(color);
    applyBackground(color);
  };

  const applyBackground = (color) => {
    if (color !== 'default') {
      document.body.style.backgroundColor = color;
    } else {
      document.body.style.backgroundColor = ''; // Reset to default
    }
  };

  return (
    <select value={selectedColor} onChange={handleChange}>
      <option value="default">Default</option>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="yellow">Yellow</option>
      <option value="green">Green</option>
    </select>
  );
};

export default ColorPicker;

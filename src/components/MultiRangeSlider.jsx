import React, { useState, useCallback } from 'react';
import './MultiRangeSlider.css';

function MultiRangeSlider({ min, max, onChange }) {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  return (
    <div className="relative w-full h-12 flex items-center justify-center">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          onChange([value, maxVal]);
        }}
        className="thumb thumb--left absolute z-10 h-1 w-full pointer-events-none"
        style={{ zIndex: minVal > max - 100 ? '5' : '3' }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          onChange([minVal, value]);
        }}
        className="thumb thumb--right absolute z-10 h-1 w-full pointer-events-none"
      />
      <div className="relative w-full">
        <div className="absolute left-0 right-0 h-[2px] bg-gray-300 rounded-md"></div>
        <div
          className="absolute h-[2px] bg-text rounded-md"
          style={{
            left: `${getPercent(minVal)}%`,
            right: `${100 - getPercent(maxVal)}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default MultiRangeSlider;

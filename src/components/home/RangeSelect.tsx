"use client";
import React, { use, useState } from "react";

function RangeSelect() {
  const [radius, setRadius] = useState(50);

  return (
    <div className="mt-5">
      <h2 className="font-bold px-2">Select radius (m)</h2>
      <input
        type="range"
        className="w-full h-2 bg-gray- rounded-lg appearance-none cursor-pointer"
        min={0}
        max={100}
        step={10}
        onChange={(e) => setRadius(parseInt(e.target.value))}
        defaultValue={radius}
      />
      <label className="px-2 text-gray-500 text-[15px]">{radius} m</label>
    </div>
  );
}

export default RangeSelect;

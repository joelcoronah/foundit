"use client";
import React, { useState } from "react";
import Data from "@/shared/data";

function SelectRating() {
  const [selectedRating, setSelectedRating] = useState<number[]>([]);

  const onSelectRating = (isChecked: boolean, value: number) => {
    if (isChecked) {
      setSelectedRating([...selectedRating, value]);
    } else {
      setSelectedRating(selectedRating?.filter((rating) => rating !== value));
    }
  };

  return (
    <div className="mt-5 px-2">
      <h2 className="font-bold">Select Rating</h2>
      <div>
        {Data.ratingList.map((rating) => (
          <div key={rating.id} className="flex justify-between">
            <label>{rating.icon}</label>
            <input
              type="checkbox"
              onChange={(e) => onSelectRating(e.target.checked, rating.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectRating;

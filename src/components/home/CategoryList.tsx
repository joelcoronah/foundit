"use client";
import React, { useState } from "react";

import data from "../../shared/data";
import Image from "next/image";

function CategoryList() {
  const [categoryList, setCategoryList] = useState(data.CategoryListData);

  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div>
      <h2 className="font-bold">Select a category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categoryList.map((category, index) => (
          <button
            key={category.id}
            className={`flex flex-col justify-center items-center bg-gray-100 p-2 m-2 rounded-lg cursor-pointer grayscale hover:grayscale-0 ${
              selectedCategory == index ? "grayscale-0 border-2" : ""
            } border-blue-400 `}
            onClick={() => setSelectedCategory(index)}
          >
            <Image
              src={category.icon}
              alt={category.name}
              width={40}
              height={40}
            />
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;

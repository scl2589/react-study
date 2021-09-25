// 재사용성이 좋은 코드
import React, { useState } from "react";

export default function NumberSelect({ value, options, label, onChange }) {
  function onChangeOption(e) {
    const value = Number(e.currentTarget.value);
    onChange(value);
  }

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <div>
        <select onChange={onChangeOption} value={value}>
          {options.map((option) => {
            <option key={option} value={option}>
              {option}
            </option>;
          })}
        </select>
        {label}
      </div>
    </div>
  );
}

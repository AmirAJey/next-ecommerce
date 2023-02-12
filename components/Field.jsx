import { passwordCheck } from '@/utils/functions';
import React, { useState } from 'react';

const levels = ['weak', 'normal', 'good', 'strong']
const colors = {
  1: 'red',
  2: 'yellow',
  3: 'blue',
  4: 'green'
}

const Indicator = ({levels, currentLevel, indicatorColor}) => {
  const base = 100 / levels.length
  const width = base * currentLevel
  return (
    <div className="w-full flex items-center gap-3">
      <div className="flex-1 bg-gray-200 rounded overflow-x-hidden">
      <div
      style={{
        width: `${width > 100 ? 100 : width}%`,
        backgroundColor: indicatorColor
      }}
      className="h-2 rounded transition-all duration-500"
      />
      </div>
      <span>{levels[currentLevel - 1]}</span>
    </div>
  )
}

const Field = ({ label, type, error, register }) => {
  const id = label.toLowerCase();
  const [value, setValue] = useState('')
  const level = passwordCheck(value)
  return (
    <div className="">
      <label htmlFor={id}>{label}</label>
      <input
        aria-invalid={Boolean(error).toString()}
        {...{type, id}}
        {...register}
        onChange={e => setValue(e.target.value)}
        className="input mt-2"
      />
      {error && <p className="text-red-500 mt-1">{error.message}</p>}
      {
        type === 'password' && value && <Indicator levels={levels} currentLevel={level} indicatorColor={colors[level]} />
      }
    </div>
  );
};

export default Field;

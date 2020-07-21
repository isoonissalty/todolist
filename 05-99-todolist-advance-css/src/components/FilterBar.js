import React from 'react'

const FilterBar = ({ setFilter }) => {
  return (
    <div>
      <span>filter: </span>
      <button onClick={() => setFilter('done')}>done</button>
      <button onClick={() => setFilter('not done')}>not done</button>
      {
        ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff', '#000000'].map((value, index) => (
          <button key={index} style={{ backgroundColor: value, width: 40, height: 15, margin: 4 }} onClick={() => setFilter(value)}></button>
        ))
      }
      <button onClick={() => setFilter('none')}>clear</button>
    </div>
  )
}

export default FilterBar

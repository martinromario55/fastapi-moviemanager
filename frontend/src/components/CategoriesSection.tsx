import React from 'react'
import MovieSection from './MovieSection'

function CategoriesSection() {
  return (
    <MovieSection title="Categories">
      <div className="grid grid-cols-3 gap-1 h-96 overflow-y-scroll">
        <label htmlFor="">
          <input type="checkbox" /> Category 1
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Category 2
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Category 3
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Category 4
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Category 5
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Category 6
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Category 7
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Category 8
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Category 9
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Category 10
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Category 11
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Category 12
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Category 13
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Category 14
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Category 15
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Category 16
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Category 17
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Category 18
        </label>
      </div>
    </MovieSection>
  )
}

export default CategoriesSection

import React from 'react'
import MovieSection from './MovieSection'

export const MovieList = () => {
  return (
    <MovieSection title="Movie List">
      <select className="w-full h-64" size={10}>
        <option value="">Movie 1</option>
        <option value="">Movie 2</option>
        <option value="">Movie 3</option>
        <option value="">Movie 4</option>
        <option value="">Movie 5</option>
        <option value="">Movie 6</option>
        <option value="">Movie 7</option>
        <option value="">Movie 8</option>
        <option value="">Movie 9</option>
        <option value="">Movie 10</option>
        <option value="">Movie 11</option>
        <option value="">Movie 12</option>
        <option value="">Movie 13</option>
        <option value="">Movie 14</option>
        <option value="">Movie 15</option>
      </select>
    </MovieSection>
  )
}

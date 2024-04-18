import React from 'react'
import MovieSection from './MovieSection'
import ActorSelectorList from './ActorSelectorList'

function ActorsSection() {
  return (
    <MovieSection title="Actors">
      <div className="flex h-96">
        <ActorSelectorList title="Available">
          <select className="border border-green-500 w-full" size={13}>
            <option value="">Actor 1</option>
            <option value="">Actor 2</option>
            <option value="">Actor 3</option>
            <option value="">Actor 4</option>
            <option value="">Actor 5</option>
            <option value="">Actor 6</option>
            <option value="">Actor 7</option>
            <option value="">Actor 8</option>
            <option value="">Actor 9</option>
            <option value="">Actor 10</option>
            <option value="">Actor 11</option>
            <option value="">Actor 12</option>
            <option value="">Actor 13</option>
            <option value="">Actor 14</option>
            <option value="">Actor 15</option>
          </select>
        </ActorSelectorList>

        <ActorSelectorList title="Selected">
          <select className="border border-green-500 w-full" size={13}>
            <option value="">Selected 1</option>
            <option value="">Selected 2</option>
            <option value="">Selected 3</option>
            <option value="">Selected 4</option>
            <option value="">Selected 5</option>
            <option value="">Selected 6</option>
            <option value="">Selected 7</option>
            <option value="">Selected 8</option>
            <option value="">Selected 9</option>
            <option value="">Selected 10</option>
            <option value="">Selected 11</option>
            <option value="">Selected 12</option>
            <option value="">Selected 13</option>
            <option value="">Selected 14</option>
            <option value="">Selected 15</option>
          </select>
        </ActorSelectorList>
      </div>
    </MovieSection>
  )
}

export default ActorsSection

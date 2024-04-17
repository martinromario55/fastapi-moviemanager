import React from 'react'
import { MovieList } from '../components/MovieList'
import MetadataEditor from '../components/MetadataEditor'
import ActorsSection from '../components/ActorsSection'
import CategoriesSection from '../components/CategoriesSection'

function MainPage() {
  return (
    <div>
      <div className="md:flex">
        <div className="m-2 md:w-3/5">
          <MovieList />
        </div>
        <div className="m-2 md:w-2/5">
          <MetadataEditor />
        </div>
      </div>
      <div className="md:flex">
        <div className="m-2 md:w-1/2">
          <ActorsSection />
        </div>
        <div className="m-2 md:w-1/2">
          <CategoriesSection />
        </div>
      </div>
    </div>
  )
}

export default MainPage

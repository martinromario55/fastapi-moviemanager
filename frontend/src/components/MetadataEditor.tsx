import React from 'react'
import MovieSection from './MovieSection'
import MetadataFormRow from './MetadataFormRow'

function MetadataEditor() {
  return (
    <MovieSection title="Metadata Editor">
      <div className="">
        <form action="">
          <fieldset>
            <div className="flex flex-col h-64">
              <div className="">
                <MetadataFormRow title="Name">
                  <input type="text" className="movie-data-input" />
                </MetadataFormRow>

                <MetadataFormRow title="Studio">
                  <select className="w-full py-1 rounded-lg">
                    <option value="">Studio 1</option>
                    <option value="">Studio 2</option>
                    <option value="">Studio 3</option>
                    <option value="">Studio 4</option>
                    <option value="">Studio 5</option>
                  </select>
                </MetadataFormRow>

                <MetadataFormRow title="Series">
                  <select className="w-full py-1 rounded-lg">
                    <option value="">Series 1</option>
                    <option value="">Series 2</option>
                    <option value="">Series 3</option>
                    <option value="">Series 4</option>
                    <option value="">Series 5</option>
                  </select>
                </MetadataFormRow>

                <MetadataFormRow title="Series #">
                  <input type="text" className="movie-data-input" />
                </MetadataFormRow>
              </div>

              <div className="h-full flex flex-col justify-center">
                <div className="flex mt-6 mb-2">
                  <button
                    type="submit"
                    className="movie-data-button bg-green-700 hover:bg-green-600"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="movie-data-button bg-red-700  hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </MovieSection>
  )
}

export default MetadataEditor

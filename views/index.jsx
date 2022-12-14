const React = require('react')
const Default = require('./layouts/default')

function Index({ breads, bakers }) {
    return (
      <Default>
        <h2>Index Page</h2>
        <div className='newButton'>
          <a href='/breads/new'>
            <button>Add a new bread</button>
          </a>
        </div>
        <h3>Bakers</h3>
        <ul>
          {
            bakers.map(baker => {
              return (
                <li key={baker._id}>
                  <a href={`/baker/${baker._id}`}>{baker.name}</a>
                </li>
              )
            })
          }
        </ul>
        <h3>Bread</h3>
        <ul>
          {
            breads.map((bread) => {
              return (
                <li key={bread._id}>
                  <a href={`/breads/${bread._id}`}>{bread.name}</a>
                </li>
              )
            })
          }
        </ul>
      </Default>
    )
}

module.exports = Index


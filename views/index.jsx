const React = require('react')
const Default = require('./layouts/default')

function Index({ breads }) {
    return (
      <Default>
        <h2>Index Page</h2>
        <div className='newButton'>
            <a href='/breads/new'>
                <button>Add a new bread</button>
            </a>
        </div>
        <ul>
            {
                breads.map((bread)=> {
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

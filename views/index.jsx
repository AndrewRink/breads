const React = require('react')
const Default = require('./layouts/default')

function Index({ breads }) {
    return (
      <Default>
        <h2>Index Page</h2>
        <ul>
            {
                breads.map((bread, i)=> {
                    return (
                        <li key={i}>
                            <a href={`/breads/${i}`}>{bread.name}</a>
                        </li>
                    )
                })
            }
        </ul>
      </Default>
    )
}

module.exports = Index

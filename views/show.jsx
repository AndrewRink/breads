const React = require('react')
const Default = require('./layouts/Default')

function Show ({ bread }) {
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>
        <p>
           and it 
            {
                bread.hasGluten ? <span> does </span> : <span> does not </span>
            }
            have gluten.           
        </p>
        <img src = {bread.image} alt = {bread.name}/>
        <p>{bread.getBakedBy()}</p>
        <li>
            <a href='/breads'>Go Home</a>
        </li>
        <li>
          <a href ={`/breads/${bread._id}/edit`}>Edit</a>
        </li>
        <form action={`/breads/${bread._id}?_method=DELETE`} method='POST'>
          <input type='submit' value = 'DELETE'/>
        </form>
      </Default>
    )
}

module.exports = Show

import React from 'react'

const Dropdown = () => {
  return (
    <div>
      <div className="dropdown">
  <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Monthly&nbsp;
  </button>
  <ul className="dropdown-menu">
    <li><a class="dropdown-item" href='/'>Monthly</a></li>
    <li><a class="dropdown-item" href='/'>Yearly</a></li>
  </ul>
</div>
    </div>
  )
}

export default Dropdown

import React from 'react'

const Dropdown = () => {
  return (
    <div>
      <div className="dropdown">
  <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Monthly&nbsp;
  </button>
  <ul className="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
    </div>
  )
}

export default Dropdown

import React from 'react'

export default function Card() {
  return (
    <div>
      <div>
        <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
          <img className="card-img-top" src="burger.jpg" alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">important text</p>
            <div className='container w-100'>

              <select className='m-2 h-100 bg-success rounded'>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  )
                })}
              </select>

              <select className='m-2 h-100 bg-success rounded'>
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>

              <div className='d-inline fs-3 h-100'>total price</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

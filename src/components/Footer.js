import React from 'react'

const Footer = () => {
  return (
      <div>
          <footer className="bg-warning py-3 my-4">
             
              <p className="text-center text-muted">© 2022 Company, Inc</p>
              <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                  <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                  <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                  <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                  <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                  <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
              </ul>
          </footer>
    </div>
  )
}

export default Footer
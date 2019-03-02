import React from 'react'

const WelcomePage = () => {
  const services = document.getElementsByClassName("service-anim")
  let n = 1
  setInterval(() => {
    if (n == services.length) n = 0
    for (let i = 0; i < services.length; i++) {
      if (i == n) {
        services[i].style.display = "flex";
      } else {
        services[i].style.display = "none";
      }
    }
    n++
  }, 4000)
  return (
    <div className="welcome-background">
      <div className="court-image-container">
        <div className="image-overlay"></div>
        <div className="courts-img"></div>
      </div>
      <div className="white-left-mask"></div>
      <div className="white-right-mask"></div>
      <div className="welcome-container">
        <h1 className="welcome-text welcome-anim">
          Welcome to String It App!
        </h1>
      </div>
      <div className="bottom-container">
        <ul>
          <li className="service-anim">
            <img src={window.whiteRacketURL} />
            <div className="keynotes">
              <h2>Manage stringing racket orders</h2>
              <h3>Receive order status notifications of your orders</h3>
            </div>
          </li>
          <li className="service-anim">
            <i className="fas fa-store-alt"></i>
            <div className="keynotes">
              <h2>Check out the store</h2>
              <h3>See what's new</h3>
            </div>
          </li>
          <li className="service-anim">
            <i className="fas fa-edit"></i>
            <div className="keynotes">
              <h2>Look up previous orders</h2>
              <h3>Compare your previous orders strings and tensions</h3>
              <h3>and improve your game on the court</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default WelcomePage;

import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2><span style={{color:"white",fontWeight:"bold"}}>अन्नपूर्णा</span>: Where Your Favorite Dishes Await!</h2>
            <p> Enjoy a diverse menu of authentic, delicious meals prepared with the freshest ingredients. Experience our warm and inviting ambiance or opt for the convenience of online ordering. Our dedicated team is here to ensure exceptional service and a memorable dining experience. Whether you dine with us or order for delivery, अन्नपूर्णा promises satisfaction in every bite.</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header
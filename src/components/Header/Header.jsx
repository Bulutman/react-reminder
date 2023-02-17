import "./Header.css"
import clarusway from"./images/Clarusway.png"
const Header = () => {
  return (
    <div >
        <p className="img-container"> <img className='img' src={clarusway} alt="" /> Clarusway   </p>
        <h1 className="head">Lesson Reminder</h1>
      
    </div>
    
  )
}

export default Header
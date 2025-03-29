import profilePic from './assets/Spam.jpg'
//You can either include the full file path
// to the picture, or you can import it, which is better because you might
// Run the website from different directories 
function Card(){
    return(
        <div className="card"> 
            <img className="card-image" alt="profile picture" src={profilePic} height="100" width={100}></img>
            <h2>Windja</h2>
            <p className='card-text'>I study computer science</p>

        </div>
    )
}

export default Card
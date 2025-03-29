/* Conditional rendering:
Allows control over what gets rendered
in your application based on certain conditions
(show, hide, or change components)
*/

function conditionalRendering(props){
    return(props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> :
                                         <h2>Please log in to continue</h2>);
}

export default conditonalRendering
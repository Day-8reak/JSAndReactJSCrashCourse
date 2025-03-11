
function Student(props){
    return(
        <>
            <p> Name: {props.name}</p>
            <p> Age: {props.age}</p>
            <p> Student: {props.isStudent ? "Yes" : "No"}</p>
        </>
    ); // We're using the ternary operator to choose the output for isStudent

}
export default Student
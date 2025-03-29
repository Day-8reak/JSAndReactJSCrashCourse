/* props are:
read only properties that are shared between components.
A parent component can send data to a child component.
<component key=value /> -- These are key value pairs
*/

/* Prop types:
A mechanism that makes sure the passed value is of the correct
data type
age: propTypes.number

prop-types module stored in node_modules
*/

/* default props:
default values for props in the case they aren't passed form the parent component
*/

import PropTypes from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Mental stability: {props.brainDamage}</p>
            <p>Passing? {props.Passing ? "Yes" : "No"}</p>
        </div>
    );
}

Student.proptypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    Passing: PropTypes.bool
}

Student.defaultProps = {
    name: "Guest",
    age: 18,
    isStudent: false


}
/*If for instance we input a string isntead of an int
for any variables that want a number, then we'll still be able to run
The program and won't get any errors in vscode

BUT we will get errors in the console on the website
*/
export default Student
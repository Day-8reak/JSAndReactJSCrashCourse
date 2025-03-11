import './App.css'
import Student from './Student.jsx'

/* props = read-only properties that are shared between components
    a parent component cans end data to a child component
      <Component key=value/>
*/
function App() {
  return(
    <>
      <Student  name="spongebob" age={30} isStudent={true}></Student>
    </>
  );
}

export default App

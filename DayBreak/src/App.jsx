import HeadFromAustin from './Header.jsx' 
import PecJobFromaustin from './MainPage.jsx'
import FootJobFromAustin from './Footer.jsx'
import About from './Card.jsx'
import Button from './button/button.jsx'

/*Three different methods to style react components with CSS:
  1. External, so we edit the button in the index.css file

  2. We can make a specific css file for just button and it's own folder.
Great because allows different styles for different buttons
and can avoid naming conflicts
  3.inline styles
Involves creating a js variable called styles,
Then you print all the css properties into the styles variable
change the semicolons to commas, and all the values have to be in quotes
so it's basically a dictionary
Then we add a style tag(?) to the button tag

Better for components with minimal styling
   */

function App() {
  return (
    <>  
      <HeadFromAustin></HeadFromAustin>
      <About></About>
      <Button></Button>
    </>
  ); /*Must enclose these components with a fragment <> </>
  This is because return only returns 1 thing.
  so when we import multiple things from different files this isn't accepted*/
}
//Like previously mentioned, the app component is gonna be the root
//It will basically tie together all the other components and shit

export default App

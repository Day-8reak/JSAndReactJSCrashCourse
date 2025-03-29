import profilePic from './assets/Spam.jpg'

function Furniture(){
    var item1 = "Fruit Basket";
    var item2 = "Chair";
    var item3 = "Kitchen island";
    var item4 = "Stove";
    var item5 = "Kitchen table";
    
    return(
        <header>
            <ul>
                <li>{item1.toLowerCase()}</li>
                <li>{item2.length}</li>
                <li>{item3}.toUpperCase()</li>
                <li>Hello</li>
                <li>{item5}</li>
            </ul>
        </header>
    )
}
export default Furniture
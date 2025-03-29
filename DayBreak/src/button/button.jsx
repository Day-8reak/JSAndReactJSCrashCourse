/* Styling React Components with CSS
(Not including external frameworks or preprocessors)

1. External
Good for global styles

2. Modules
We create a seperate css file and then import it and use it in className

Modules avoids naming conflicts because unique name generated using hashing algorithm

3. Inline
We define a certain style in the java ccode before the return
Then we use said definition in the same way in the code

Good for isolated components, but not that good for large applications

There's also a couple of variations on these methods with  
*/
import styles from './Button.module.css' 
//calling anything from Button.module styles first

function button(){
    return(
        <nav>
            <button className="button">click me</button>
            <button className={styles.button}>Click Me</button>
            <button></button>
        </nav>
    );

}

export default button
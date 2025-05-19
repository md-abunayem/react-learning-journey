import styles from "./Item.module.css";
//we can take any name on the place of styles 

const Item = ({foodItem}) => {
    //{styles["nayem"]}---we can use this alternatively
    return <li className= {`${styles["banckground"]}`} ><span className = {styles["Span"]}>{foodItem}</span></li>
}

export default Item;
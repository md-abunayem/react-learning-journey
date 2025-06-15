import styles from "./Item.module.css"
const Item = ({foodItem})=>{

    // let {foodItem} = props;  //Object destructuring
    return  <li className={`${styles.items}`}>{foodItem}</li>
}

export default Item;

// list-group-item items
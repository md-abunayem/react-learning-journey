function EmptyMessage(props) {
  
  return <>
    {props.foodItems.length === 0 && <h3>There is not have any available food</h3>}
  </>;
}
export default EmptyMessage;

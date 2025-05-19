function RandomNumber(){

    let number = Math.random() * 100

    return <h5 style={{'background-color': "green"}}>
        Random number is : {Math.round(number)}
    </h5>
}


export default RandomNumber;
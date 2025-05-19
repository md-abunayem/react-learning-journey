function Box(){

    let number = Math.random();
    let calculate = ()=>{
       return number * 1000;
    }

    return <div style={{"height":"200px", "width" : "300px", "background-color": "#115588"}}>
        Box with random number: {number}

       <div> New number after calculate : {Math.round(calculate())}
       </div>

    </div>
}

export default Box;
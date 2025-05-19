function Hello(){
    let name = "Nayem";
    let id = "221-15-5198";
    let doSomething = () =>{
        return "I am doing something for you..."
    }

    return <h3>
        I am your future speaking. I am your master {name} and my id is {id}.{doSomething()}
    </h3>
}


export default Hello;
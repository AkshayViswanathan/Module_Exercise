(function messg(){
    console.log("Loading User Details...")
})()

const printGreetings = (()=>{   
    
    let txt ="Name:"
    return innerfunc=(firstName, lastName)=>{
        txt+= `Greeting_MSG ${firstName} ${lastName}`;
        return txt
    }
 
})()

console.log(printGreetings("Akshay" , "viswanathan"))

//testing git//

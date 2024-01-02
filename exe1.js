
let array = ['apple','banana','mango']      /*Task 1- Loop array of values*/
console.log("_____task 1_____");
for(i=0; i<array.length; i++){
   
    console.log(array[i])
    
}

                                           /*Task 2- array of objects*/
let array2 = [{fruit:'apple'},{fruit:'banana'},{fruit:'mango'}]  

console.log("____task 2______");
for(i=0; i<array2.length; i++){
    
    let store = array2[i]
 let txt ="";
    for( let x in store){
        txt += store[x]
}
console.log(txt)} 

                                              /*Task 3- objects*/
let object = { fruit1:'apple',fruit2:'banana',fruit3:'mango'}

console.log("_____task 3______");
Object.values(object).map((item)=>{
        console.log(item)
    })



function validation( config, segment){

    for( let x in config){
        
        
        if( config[x].type === "REQUIRED"){
            if( (segment[x] != "" || segment[x] !== null || segment[x] !== undefined ) && 
            (segment[x].length <= x.length)){
               console.log("sucess")
            }else {  console.log("failed");}
        }else{
            console.log("failed, not required");
        }
           
    }
}

const GLConfig = {
    "CO" : { type: "NORMAL"},
    "MAJ": { type: "NORMAL"},
    "SET": { type: "NORMAL"},
    "MIN": { type: "REQUIRED"} }

    const passingSegments = {
        'CO': '01',
        'MAJ': '111',
        'SET': '111',
        'MIN': '000',
      };
      
      const failingSegments = {
        'CO': '',
        'MAJ': '222',
        'SET': '222',
        'MIN': '111',
      };

    
validation(GLConfig, passingSegments )
// if (result){
//     console.log("passed")
// ;
// }else{
//     // console.log("failed");
// }
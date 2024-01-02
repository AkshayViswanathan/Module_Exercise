var data = [
    {"firstname":" Ann", "lastname":" Wilson ", "phone": "29378245", "zip": "2 0 00 1 ", "age": 160, "id": " 12345 "},
    {"firstname":"Chris ", "lastname":"Morgan", "phone": "729378245", "zip": " 65 00 1", "age": 70, "id": " 123453543636 "},
    {"firstname":" Andrew ", "lastname":" Storm", "phone": "543729378245", "zip": " 7001 4", "age": 32, "id": "5 648"}
  ]

const printDetails = (props)=>{
                                                      /*destructure*/
     const { firstname , lastname , phone, zip, age, id} = props    
                                                      /*Full Name */
    const fname = firstname.trim()
    const lname = lastname.trim()
         fullname = `Name: ${fname} ${lname}`
                 console.log(fullname)
                                                        /* contact*/
    const mobile = phone.trim().slice(0, 10).padStart(10,"0")
            let Contact = `Contact: ${mobile}`    
                 console.log(Contact);
                                                       /*Zip */
    const zipDetails = zip.trim()
            let zipprint = `Zip: ${zipDetails}`
                  console.log(zipprint);
                                                       /*age*/
    const ageDetails = age<= 150 ? `age: ${age}` : "age: NA" ;
               console.log(ageDetails)
                                                       /*Id*/
    const idMask = id.trim().slice(3)
      const printId= `Id: ###${idMask}`
          console.log(printId);

}

data.forEach((person) => {
    printDetails(person);
  });
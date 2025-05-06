function fetchData () {
    return new Promise( (keep , reject) => {
        setTimeout( () => {
            let success = true;
            if (success === true) {
                keep`Data Fetched Sucessfully`
            }
            else{
                reject`Data Fetching Failed !`
            }
        } , 4000)
    } )
}

// let response = fetchData()
// console.log(response);
fetchData()
    .then( (data) => { 
        console.log(data);
        // return data.toLowerCase()
    } )
    // .then( (value) => {
    //     console.log(value);
    //     return "arman"
    // } )
    .catch( (error) => { return console.error(error);
    } )


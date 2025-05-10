function fetchdata() {
    return new Promise( (keep , revoke) => {
        setTimeout( () => {
            let success = true;
            if (success === true){
                keep({Name: "lata" , URL: "https://MyBabyBooh.com"})
            }
            else{
                revoke`Error`
            }
        },3000)
    })
}

async function getUserData() {
    try {
        console.log("fetching User Data...");
        let myData = await fetchdata()
        console.log(myData);
        console.warn("data fetched sucessfully!!");
        
        
    } catch (error) {
        console.log('error fetching data',error);
        
    }
}

getUserData()

function PostData () {
    return new Promise( (keep,reject) => {
        setTimeout( () => {
            let sucess = true;

            if(sucess===true){
                keep`database connected `
            }
            else{
                reject`database failed to connect`
            }
        },3000)
    })
}

function Commentdata (){
    return new Promise( (keep,reject) => {
        setTimeout( () => {
            let sucess = false;

            if(sucess===true){
                keep`comment data fetched`
            }
            else{
                reject`failed to fetch `
            }
        },3000)
    })
}

async function getdata() {
    try {
        console.log('fetching datas');
       let [data1,data2] = await Promise.all([PostData(),Commentdata()])
       console.log(data1);
       console.log(data2);
       
    } catch (error) {
        console.error('error fetching data ',error);
        
    }
}

getdata()
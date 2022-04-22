
const somethingWIllHappen = () => {
    return new Promise ((resolve, reject) => {
      if(true)
      {
        resolve("HEy right");
      }
      else
      {
        reject("error");
      }
    })  
};

somethingWIllHappen()
 .then(response => console.log(response))
 .catch(err => console.error(err));



//

const somethingWIllHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true)
        {
            setTimeout(()=>{
                resolve("True");
            },2000)
        }
        else
        {
            const error = new Error("Whoops");
            reject(error);
        }
    });
}

somethingWIllHappen2()
.then(response => console.log(response))
.catch(err => console.error(err));

Promise.all([somethingWIllHappen(), somethingWIllHappen2()])
 .then(response => 
    {
        console.log('Nalgas de errores culos',response);
    })
 .catch(err => {
        console.error(err);
 })
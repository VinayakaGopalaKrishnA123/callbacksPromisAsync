function getUserDetails(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({useroll:"678"})
        },2000);
    })
};
const myfun=async()=>{
    console.log('123');
    const result =  getUserDetails("123");
    console.log(result);
    console.log('456');
}
myfun();
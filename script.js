// const promise = new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('myname')
//     },1000)
// });

// promise.then((data)=>{
//     console.log(data);
// })

// const g = ()=>{
//     setTimeout(() => {
//     }, 0);
//     console.log('hi');
// }
// g();
let card = document.querySelector("#card");
let API_URL = `https://jsonplaceholder.typicode.com/users`;




fetch(API_URL).then((res) => {
    return res.json();
}).then((data) => {
    creatCards(data);
})
function creatCards(data) {


    card.innerHTML = '';
    data.forEach((user) => {
        card.innerHTML += `
        <div class="col-3 mt-5">
            <div class="card">
                <img class="card-img-top"
                    src="https://images.pexels.com/photos/16350089/pexels-photo-16350089.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="Card image cap">
            <div id="user" class="card-body">
                <p><b>Name:</b> ${user.name}</p>
                <p><b>Email:</b> ${user.email}</p>
                <p><b>Address:</b> ${user.address.street} (street), ${user.address.city} (city)</p>
                <p><b>Phone:</b> ${user.phone}</p>
                <p><b>Company:</b> ${user.company.name}</p>
            </div>
         </div>
         </div>`
    })}
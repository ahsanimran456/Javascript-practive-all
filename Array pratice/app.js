const Adduser_btn = document.getElementById("Adduser")
const eachuserlist = document.getElementById("eachuserlist")

let users = []
let count = 0
const adduser = async () => {
   const url = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await url.json()
   //  console.log(data)
   count++
   const userlist = data[count].name
   const userCurrent = {
      name: userlist,
      money: Math.floor(Math.random() * 1000 )
   }
   // console.log(userCurrent)
   adddata_array(userCurrent)
   eachuserlist.innerHTML += `
        <div class="eachuser">
            <p class="names"><span>${userCurrent.name}</span> </p>
            <p class="money"><span> ${changecurrency(userCurrent.money)}$</span> </p>

        </div>
     `
}

const adddata_array = (listofpep) => {
   users.push(listofpep)
   console.log(users)
}
const Deleteuser = () => {
   count = 0
   users.pop()
   console.log(users)
   eachuserlist.innerHTML = " ";
      users.forEach(element => {
         return (
            eachuserlist.innerHTML += 
               `<div class="eachuser">
                     <p class="names"><span>${element.name}</span> </p>
                     <p class="money"><span>${changecurrency(element.money)}$</span> </p>
                </div>`
         )
      });
}


const changecurrency = (number)=>{
 return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


 const showreshiest = ()=>{
   count = 0
    eachuserlist.innerHTML = " "
      users = users.filter((items)=>{
      if(items.money > 100){
         return(
            eachuserlist.innerHTML += 
         `<div class="eachuser">
               <p class="names"><span>${items.name}</span> </p>
               <p class="money"><span>${changecurrency(items.money)}$</span> </p>
          </div>`
         )
      } 
      else{
         eachuserlist.innerHTML = " "
      }     
   })
 }

 const alluserincome = ()=>{
   const pepincome = document.getElementById('pepincome')
   const cal = users.reduce((acc,items)=>(acc+=items.money),0)
   console.log(cal)
   pepincome.innerHTML = 
   `<div class="eachuser">
               <p class="names"><span>All users Income: ${changecurrency(cal)}$</span> </p>
          </div>`
 }




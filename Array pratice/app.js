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
      money: Math.floor(Math.random() * 100000 )
   }
   // console.log(userCurrent)
   adddata_array(userCurrent)
   eachuserlist.innerHTML += `
        <div class="eachuser">
            <p class="names"><span>${userCurrent.name}</span> </p>
            <p class="money"><span> ${userCurrent.money}$</span> </p>

        </div>
     `
}

const adddata_array = (listofpep) => {
   users.push(listofpep)
   console.log(users)
}
const Deleteuser = () => {
   users.pop()
   console.log(users)
   eachuserlist.innerHTML = " ";
      users.forEach(element => {
         return (
            eachuserlist.innerHTML += 
               `<div class="eachuser">
                     <p class="names"><span>${element.name}</span> </p>
                     <p class="money"><span>${element.money}</span> </p>
                </div>`
         )
      });
}





const Adduser_btn = document.getElementById("Adduser")
const eachuserlist = document.getElementById("eachuserlist")

 let users = []
 let count = 0 
 const adduser = async()=>{
    const url = await fetch('https://jsonplaceholder.typicode.com/users')
     const data = await url.json()
    //  console.log(data)
     count++ 
     const userlist = data[count].name
     const userCurrent = {
        name : userlist,
        money : Math.floor(Math.random() * 10000)

     }
     console.log(userCurrent)
     adddata_array(userCurrent)
     eachuserlist.innerHTML+=`
        <div class="eachuser">
            <p><span>Name:${userCurrent.name}</span> </p>
        </div>
     `
 }

 const adddata_array = (listofpep)=>{
    users.push(listofpep)
    console.log(users)
 }
 
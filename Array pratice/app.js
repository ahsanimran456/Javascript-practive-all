const Adduser_btn = document.getElementById("Adduser")
 let users = []
 const adduser = async()=>{
    const url = await fetch('https://jsonplaceholder.typicode.com/users')
     const data = await url.json()
     console.log(data)
     const userlist = data[0].name
     const userCurrent = {
        name : userlist,
        money : Math.floor(Math.random() * 10000)

     }
     console.log(userCurrent)
 }

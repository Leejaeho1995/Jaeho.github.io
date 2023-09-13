fetch('../list.json')
.then(res => res.json())
.then( rs=> {
    let li = ""
    for(let r of rs){
        li += `li${r.foodTitle}</li>`
    }
    document.getElementById("list").innerHTML =li;
})
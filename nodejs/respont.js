window.onload = getUser; //화면이 로딩되면 getUser 호출
const form = document.getElementById('form');
form.addEventListener('submit',async (e) =>{
    e.preventDefault()
    const name = e.target.username.value
    if(!name) {
        return alert('이름을 입력하세요')
    }
    try{
        await axios.post('/user',{name});
        getUser();
    }catch(err){
        console.error(err);
    }
    e.target.username.value=''
})
async function getUser(){
    try{
        const res= await axios.get('/users')
        const users = res.data;
        const list = document.getElementById("list");
        list.innerHTML = '';

        //사용자마다 반복적으로 화면 표시및 이벤트 연결
        Object.keys(users).map((key)=>{
            const userDiv = document.createElement("div")
            const span = document.createElement("span")
            span.textContent = users[key];
            const edit = document.createElement("button")
            edit.textContent = "수정";
            edit.addEventListener("click", async ()=>{
                //만들어진 수정 버튼을 클릭하면
                const name = prompt("바꿀 이름을 입력하세요")
                if(!name){
                    return alert("이름을 입력하세요")
                }
                try{
                    await axios.put('/user' + key, {name});
                    getUser();
                }catch(err){
                    console.error(err);
                }
            })
            const remove = document.createElement("button")
            remove.textContent ="삭제";
            remove.addEventListener("click", async ()=> {
                try{
                    await axios.delete('/user/'+ key);
                    getUser();
                }catch(err){
                    console.error(err)
                }
            })


            userDiv.appendChild(span);
            userDiv.appendChild(edit);
            userDiv.appendChild(remove)
            list.appendChild(userDiv);
            console.log(res.data)
        })
    }catch{
        console.error(err)
    }
}

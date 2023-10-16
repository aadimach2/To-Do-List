const title=document.getElementById("title"); 
const des= document.getElementById("des");
const form=document.querySelector("form");
const container=document.querySelector(".container");

const tasks=localStorage.getItem("tasks")
 ?  JSON.parse(localStorage.getItem("tasks"))
 :[];
 ShowAllTasks();



function ShowAllTask(){
    tasks.forEach((value,index)=>{
        const div=document.createElement("div");
        div.setAttribute("class","task");
        
        const innerdiv=document.createElement("div");
        div.append(innerdiv);
        
        
        const p=document.createElement("p");
        p.innerText=value.title;
        innerdiv.append(p);

        const span=document.createElement("span");
        span.innerText=value.des;
        innerdiv.append(span);

        const btn=document.createElement("button");
        btn.setAttribute("class","del");
        btn.innerText="-";
        btn.addEventListener("click",()=>{
            RemoveTask();
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
           ShowAllTask();
        })
        div.append(btn);

        container.append(div); 

    });

}

function RemoveTask()
{    
    tasks.forEach(()=>{
        const div=document.querySelector(".task");
        div.remove();
      
         

    });

}

 
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    RemoveTask();
    
    
    tasks.push({
        title:title.value,
        des:des.value,
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
    ShowAllTask();

});













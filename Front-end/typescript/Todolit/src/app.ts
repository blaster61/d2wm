// On recupère les éléments avec QuerySelector

const btnSubmit = document.querySelector(".todo-btn") as HTMLButtonElement;
const inputTask = document.querySelector(".todo-input") as HTMLInputElement;
const formTask = document.querySelector(".todo-form") as HTMLFormElement;
const tasklist = document.querySelector(".todo-list") as HTMLLIElement;
const btnDeleteAll = document.querySelector(".todo-delete-all") as HTMLButtonElement;

interface TaskInterface{
        date: Date,
        task: string
        completed: boolean
}
// On crée un tableau pour stocker toutes nos nouvelles tâches
const tasks: TaskInterface[] = JSON.parse(localStorage.getItem("task") ||"[]");

// Fonction qui sauvegarde les elements dans le local storage
const saveTasks = ()=>{
    localStorage.setItem("task", JSON.stringify(tasks))
}



// Ajoiter les nouvelles tâches au démarrage du DOM

window.addEventListener("DOMContentLoaded", () =>{
    tasks.forEach(task => appendTask(task))

})

const handleSubmit = (e: Event) => {
    e.preventDefault(); // Cela évite à ma page de se rafraiîchir

    const newTask: TaskInterface = {
        date: new Date(),
        task: inputTask.value,
        completed: false
    }
    // Sauvegarde la tâche dans le localStorage
    tasks.push(newTask);
    // Ajout de la fonction appendTask
    appendTask(newTask);
    // Savegarder l' envoi des tâche dans le local storage
    saveTasks();
    
    // Vider l'input
    inputTask.value = "";
}
// On va gérer l'Eventlistener sur le form

formTask.addEventListener("submit", e => handleSubmit(e));


// fonction d'ajout d'une nouvelle tâche 
const appendTask = (newTask: TaskInterface) =>{


    const newLi = document.createElement("li");
    const checkB = document.createElement("input");
    const btnDel = document.createElement("button");
    btnDel.classList.add("todo-delete-one");
    btnDel.textContent ="Supprimer"
    checkB.type = "checkbox";
    checkB.checked = newTask.completed;
    if(newTask.completed === true){
        newLi.style.textDecoration = "line-through"
    }else{
        newLi.style.textDecoration = "none";
    }
    checkB.addEventListener("change", ()=>{
    // console.log("Vérification");
    newTask.completed = checkB.checked;
    if(newTask.completed === true){
        newLi.style.textDecoration = "line-through"
    }else{
        newLi.style.textDecoration = "none";
    }
    saveTasks();
    
})
newLi.append(btnDel, newTask.task, checkB);
tasklist.prepend(newLi);

    btnDel.addEventListener("click", () =>{
        newLi.remove();
        for (let i = 0; i < tasks.length; i++) {
            if (tasks [i].task === newTask.task) {
                tasks.splice( i,1)
            };
            saveTasks();
            
        }
    })

}


// Bouton TOUT EFFACER

const clearTasks = () => {
    const confirmDel: boolean = confirm("Êtes vous sur de vouloir tout effecer?")
    if (confirmDel === true ){
    tasks.length = 0;
    saveTasks();
    tasklist.textContent = "";
    }
}

btnDeleteAll.addEventListener("click", clearTasks )
const fs = require("fs")
const todofile = "./task.json"


const loadtask = () => {
    try {
        const databuffer = fs.readFileSync(todofile)
        const datajson = databuffer.toString()
        return JSON.parse(datajson)
    } catch (error) {
        return []
    }
}

const saveTask = (tasks) => {
    const datajson = JSON.stringify(tasks)
    fs.writeFileSync(todofile , datajson)
}

const addTask = (task) => {
    const tasks = loadtask()
    tasks.push({task})
    saveTask(tasks)
}

const listTask = () => {
    const tasks = loadtask()
    tasks.forEach((task , index) => console.log(`${index + 1} - ${task.task}`));
    
}

const removeTask = (index) => {
    const tasks = loadtask()
    const remove = tasks.splice(index-1,1)
    saveTask(tasks)
    console.log(`${remove[0].task}`);
    
}

const command = process.argv[2]
const argument = process.argv[3]

if(command === 'add'){
    addTask(argument)
}else if (command === 'list'){
    listTask()
}else if(command === 'remove'){
    removeTask(parseInt(argument))
}else{
    console.log("command not found");
}

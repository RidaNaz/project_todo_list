#!/usr/bin/env node

import inquirer from "inquirer";

let todos: string[] = ["Rida", "Naz"]

async function createTodo(todos: string[]) {
    do {
        let todo = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Selct an operation",
            choices: ["Add", "Update", "View", "Delete"]
        })

        if (todo.select === "Add") {
            let add = await inquirer.prompt({
                type: "input",
                name: "addTodo",
                message: "What do you want to add in todo list"
            })
            todos.push(add.addTodo)
            console.log(todos.join(","))
        }

        if (todo.select === "Update") {
            let update = await inquirer.prompt({
                type: "list",
                name: "updateItem",
                message: "select item you want to update in todo list",
                choices: todos.map(item => item)
            })
            let update2 = await inquirer.prompt ({
                type: "input",
                name: "addUpdate",
                message: "What do you want to update in todo list"
            })
            let newTodos = todos.filter(item => item !== update.updateItem)
            todos = [...newTodos, update2.addUpdate]
            console.log(todos)
        }

        if (todo.select === "View") {
            console.log(todos)
        }

        if (todo.select === "Delete") {
            let remove = await inquirer.prompt({
                type: "list",
                name: "delete",
                message: "What do you want to delete from todo list",
                choices: todos.map(item => item)
            })
            let newTodos = todos.filter(item => item !== remove.delete)
            todos = [...newTodos]
            console.log(todos)
        }

    } while (true)

}
createTodo(todos)
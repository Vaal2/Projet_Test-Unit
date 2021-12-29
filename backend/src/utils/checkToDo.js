export const isValidTodo = (Todo) => {
    try{
        const isNameValid = Todo.name.length > 0 && Todo.name.length < 25;
        const isnumberOfItemsValid = Todo.numberOfItems >= 0 && Todo.numberOfItems <= 10;
        const isUserIDValid = Todo.user_id >= 0;

        return isNameValid && isnumberOfItemsValid && isUserIDValid;


    }
    catch{
        console.log("error")
    }
}




export const isUniqueUser = (todosList, todo) => {
    try {
        const isValid = true;

        for(let td of todosList){
            if(td.user_id === todo){
                isValid = false;
                break;
            }
        }
        return isValid;
    }
    catch {
        console.log("error")
    }
}


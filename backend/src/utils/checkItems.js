export const isValidItems = (item) => {
    try{
        const isNameValid = item.name.length > 0;
        const isContentValid = item.content.length > 0 && item.content.length < 1000;

        return isNameValid && isContentValid;
    }
    catch{
        console.log("catch")
    }
}

export const isUniqueName = (itemsList, item) => {
    try {
        const isValid = true;

        for(let it of itemsList){
            if(it.name === item){
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
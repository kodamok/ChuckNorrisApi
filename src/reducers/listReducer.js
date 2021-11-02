export const listReducer = (state, {type,payload}) => {


    switch(type){
        case 'dropDownSelection':
            return [...state, payload];
        case 'chuckItButton'
            return []
    }


}
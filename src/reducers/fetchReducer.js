const INITAL_FETCH_STATE = {
    pending: false,
    data:{},
    error:null
}

const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_START':
            return{
                ...state,
                error:null,
                pending:true,
            };
        case 'FETCH_CURRENT_DATA':
            return{
                ...state,
                data: action.data
            }
        case 'FETCH_SUCCESS':
            return{
                ...state,
                pending:false,
                data: action.data
            }
        case 'FETCH_ERROR':
            return{
                ...state,
                error:action.error,
                pending: false
            }
        case 'FETCH_FINAL':
            return{
                ...state,
                pending:false
            }
    }
}

export default {
    INITAL_FETCH_STATE,
    reducer
}

const initialState = [
    {
        results: [],
        error: null
    }
]

const dataReducer = (state=initialState, action) => {
    console.log('Get DataReducer: ', action )

    switch(action.type) {
        case 'NEW_ALERT':
            console.log('NEW Alert payload: ', action.payload );
            const notifyArr = [];
            notifyArr.push(action.payload);
            return notifyArr;
        break;
    }

    return state;
}

export default dataReducer

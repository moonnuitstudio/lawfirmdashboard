import { 
    LOAD_ALL_MATTERS 
} from "../types/mattersType";

const initialState = {
    matters: [],
    columnNames: [
        {
          id: 'title',
          numeric: false,
          disablePadding: false,
          label: 'Title',
        },
        {
          id: 'description',
          numeric: true,
          disablePadding: false,
          label: 'Description',
        },
        {
          id: 'created_at',
          numeric: true,
          disablePadding: false,
          label: 'Created',
        },
        {
          id: 'updated_at',
          numeric: true,
          disablePadding: false,
          label: 'Updated',
        }
    ]
}

export default function(state = initialState, action) {
    const {type} = action

    switch (type) {
        case LOAD_ALL_MATTERS:
            
            return {
                ...state,
                matters: action.payload,
            };
    
        default:
            return state;
    }
}
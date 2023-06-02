export const user = {
    state:{
        listUser:[]
    },
    reducers:{
        setListUser(state,listUser){

        }
    },
    effects: (dispatch) =>({

    }),
    selectors: (slice, createSelector) => ({
        selectCount() {
          return slice(state => state.listUser);
        },
    }),
}
let initState = {
    items: [],
};
const Add = (state = initState, action) => {
    switch (action.type) {
        case 'ADD':
            let payload = action.payload;
            // let items = state.items;改为let items = [...state.items];
            let items = [];
            items.push(...state.items);
            items.push(payload.item);
            return {
                ...state,
                items: items,
            }
        default:
            return state;
    }
}
export default Add;

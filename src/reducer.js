export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove after finished developing...
    //token: 'BQBO9rPx0wMkx7FrS6Ho9eoRrrHSOPaIRlRs5hOe3AFQT1Nip5ox9HqOgwTxUIxY5eMMl40-Tc9g1Yqv0pfQFQj7Y7VAqmA4fsi9dlQDRTL9yB-5y453wNytZeX_8SbpaQZySwKYZ_wMtylw5_7bLPZySjRPIg5QkBgR9PbAYlxSr9zE',
};

const reducer = (state, action) => {
console.log(action);

//action -> type, [payload]

switch(action.type){
case 'SET_USER':
    return{
        ...state,
        user: action.user,
    };
    case 'SET_TOKEN':
        return{
            ...state,
            token: action.token
        };
    case 'SET_PLAYLISTS':
        return{
            ...state,
            playlists: action.playlists,
        };

        case 'SET_RAPCAVIA':
            return{
                ...state,
                rapcaviar: action.rapcaviar,
            };

    default:
        return state;
}
}

export default reducer;
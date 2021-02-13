const ADD = "addAnItemToCart"
const REM = "removeAnItemFromCart"
const ADDCART = "addInCart"
const REMCART = "removeInCart"
const NOEXIST = "deleteFromCart"
const DOEXIST = "addToCart"
const SETEXIST = "setExist"
const UNSET = "unSetExist"
const COAST = "displayCoast"
const CLESS = "displayCoastLess"
const SORT = "sort"
const UPDOWN = "sortItems"

const addItem = ()=>({type:ADD})
const remItem = ()=>({type:REM})
const addCart = ()=>({type:DOEXIST})
const remCart = ()=>({type:NOEXIST})
const setExist = ()=>({type:SETEXIST})
const unSetExist = ()=>({type:UNSET})
const addInCart = ()=>({type:ADDCART})
const remInCart = ()=>({type:REMCART})
const coast = ()=>({type:COAST})
const coastLess = ()=>({type:CLESS})
const sort = ()=>({type:SORT})
const sortCheap = ()=>({type:UPDOWN})

export{
    ADD,
    REM,
    NOEXIST,
    DOEXIST,
    SETEXIST,
    UNSET,
    ADDCART,
    REMCART,
    COAST,
    CLESS,
    SORT,
    UPDOWN,
    addItem,
    remItem,
    remCart,
    addCart,
    setExist,
    unSetExist,
    addInCart,
    remInCart,
    coast,
    coastLess,
    sort,
    sortCheap,
}
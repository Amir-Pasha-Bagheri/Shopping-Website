import * as act from './action'
import * as clothes from '../IMAGES/PRODUCTS/CLOTHES/clothesIMG'
import * as food from '../IMAGES/PRODUCTS/FOOD/foodIMG'
import * as sport from '../IMAGES/PRODUCTS/SPORT/sportIMG'
import * as game from '../IMAGES/PRODUCTS/GAME/gameIMG'
import * as mobile from '../IMAGES/PRODUCTS/MOBILE/mobileIMG'
import update from 'immutability-helper';

const initalstate = {
    clothes:[
        { name:"Hat", amount:0, price:30, exist:0, img:clothes.hat, id:0, CartID:0},
        { name:"Shoe", amount:0, price:40, exist:0, img:clothes.shoe, id:1, CartID:1},
        { name:"Glasses", amount:0, price:20, exist:0, img:clothes.glasses, id:2, CartID:2},
        { name:"Pants", amount:0, price:38, exist:0, img:clothes.pants, id:3, CartID:3},
        { name:"Shirt", amount:0, price:40, exist:0, img:clothes.shirt, id:4, CartID:4},
        { name:"T-shirt", amount:0, price:42, exist:0, img:clothes.t_shirt, id:5, CartID:5},
        { name:"Socks", amount:0, price:15, exist:0, img:clothes.socks, id:6, CartID:6},
        { name:"Cap", amount:0, price:16, exist:0, img:clothes.cap, id:7, CartID:7},
        { name:"Skirt", amount:0, price:36, exist:0, img:clothes.skirt, id:8, CartID:8},
        { name:"Gloves", amount:0, price:10, exist:0, img:clothes.gloves, id:9, CartID:9},
        { name:"Scarf", amount:0, price:16, exist:0, img:clothes.scarf, id:10, CartID:10}
    ],
    sortedClothes:[],
    food:[
        { name:"Soda", amount:0, price:2, exist:0, img:food.soda, id:0, CartID:11},
        { name:"Pizza", amount:0, price:20, exist:0, img:food.pizza, id:1, CartID:12},
        { name:"Pepperoni", amount:0, price:25, exist:0, img:food.pepperoni, id:2, CartID:13},
        { name:"Italian-food", amount:0, price:30, exist:0, img:food.italian, id:3, CartID:14},
        { name:"Chinese-food", amount:0, price:30, exist:0, img:food.chinese, id:4, CartID:15},
        { name:"Spanish-food", amount:0, price:30, exist:0, img:food.spanish, id:5, CartID:16},
        { name:"Apple (amount per kg)", amount:0, price:5, exist:0, img:food.apple, id:6, CartID:17},
        { name:"Bananna (amount per kg)", amount:0, price:7, exist:0, img:food.bananna, id:7, CartID:18},
        { name:"Lemon (amount per kg)", amount:0, price:4, exist:0, img:food.lemon, id:8, CartID:19},
        { name:"Watermelon (amount per kg)", amount:0, price:5, exist:0, img:food.watermelon, id:9, CartID:20},
        { name:"Cucumber (amount per kg)", amount:0, price:4, exist:0, img:food.cucumber, id:10, CartID:21}
    ],
    sortedFood:[],
    sport:[
        { name:"Basketball Ball", amount:0, price:50, exist:0, img:sport.basketball_ball, id:0, CartID:22},
        { name:"Hockey Clothes", amount:0, price:120, exist:0, img:sport.hockey, id:1, CartID:23},
        { name:"Soccer Ball", amount:0, price:40, exist:0, img:sport.soccer_ball, id:2, CartID:24},
        { name:"Footbal Ball", amount:0, price:60, exist:0, img:sport.football_ball, id:3, CartID:25},
        { name:"Soccer Shoe", amount:0, price:100, exist:0, img:sport.soccer_shoe, id:4, CartID:26},
        { name:"Basketball Shoe", amount:0, price:150, exist:0, img:sport.basketball_shoe, id:5, CartID:27},
        { name:"Tennis Rocket", amount:0, price:40, exist:0, img:sport.tennis_rocket, id:6, CartID:28},
        { name:"Tennis ball", amount:0, price:5, exist:0, img:sport.tennis_ball, id:7, CartID:29},
        { name:"Warming-up Clothes", amount:0, price:250, exist:0, img:sport.warming_up_clothes, id:8, CartID:30},
        { name:"Mountain Shoe", amount:0, price:85, exist:0, img:sport.mountain_shoe, id:9, CartID:31}
    ],
    game:[
        { name:"PS5", amount:0, price:700, exist:0, img:game.ps5, id:0, CartID:32},
        { name:"Xbox Series x", amount:0, price:730, exist:0, img:game.xbox_series_x, id:1, CartID:33},
        { name:"Nintendo Switch", amount:0, price:680, exist:0, img:game.nintendo_switch, id:2, CartID:34},
        { name:"PS4", amount:0, price:400, exist:0, img:game.ps4, id:3, CartID:35},
        { name:"Xbox360", amount:0, price:340, exist:0, img:game.xbox360, id:4, CartID:36},
        { name:"PS3", amount:0, price:350, exist:0, img:game.ps3, id:5, CartID:37},
        { name:"Xbox One", amount:0, price:430, exist:0, img:game.xbox_one, id:6, CartID:38},
        { name:"PS2", amount:0, price:100, exist:0, img:game.ps2, id:7, CartID:39},
        { name:"PS1", amount:0, price:75, exist:0, img:game.ps1, id:8, CartID:40},
        { name:"Nintendo DS", amount:0, price:120, exist:0, img:game.ds, id:9, CartID:41},
        { name:"Sega", amount:0, price:50, exist:0, img:game.sega, id:10, CartID:42}
    ],
    sortedGame:[],
    mobile:[
        { name:"Iphone X", amount:0, price:1200, exist:0, img:mobile.iphoneX, id:0, CartID:43},
        { name:"Samsung Galaxy A02", amount:0, price:100, exist:0, img:mobile.ga02, id:1, CartID:44},
        { name:"Samsung Galaxy Note 20", amount:0, price:999, exist:0, img:mobile.gnote20, id:2, CartID:45},
        { name:"Samsung Galaxy S20", amount:0, price:1100, exist:0, img:mobile.gs20, id:3, CartID:46},
        { name:"Samsung Galaxy Note10 Plus", amount:0, price:1300, exist:0, img:mobile.gnote10plus, id:4, CartID:47},
        { name:"Iphone 12", amount:0, price:799, exist:0, img:mobile.iphone12, id:5, CartID:48},
        { name:"Iphone 7 Plus", amount:0, price:599, exist:0, img:mobile.iphone7plus, id:6, CartID:49},
        { name:"Iphone 11", amount:0, price:600, exist:0, img:mobile.iphone11, id:7, CartID:50},
        { name:"P40", amount:0, price:800, exist:0, img:mobile.p40, id:8, CartID:51},
        { name:"P30 New Edition", amount:0, price:800, exist:0, img:mobile.p30newedition, id:9, CartID:52}
    ],
    sortedMobile:[],
    arrayOfItems:[],
    coast:0,
    existOfItems:0
}

const Reducer = ( state=initalstate , action ) =>{
    switch(action.type){
        case(act.ADD):
        return update(state,{
            [action.kind]:{
                [action.product]:{
                    amount:{$set: state[action.kind][action.product].amount + 1}
                }
            }
        })
        case(act.ADDCART):
        return update(state,{
            arrayOfItems:{
                [action.product]:{
                    amount:{$set: state.arrayOfItems[action.product].amount + 1}
                }
            }
        })
        case(act.REM):
        return update(state,{
            [action.kind]:{
                [action.product]:{
                    amount:{$set: state[action.kind][action.product].amount - 1}
                }
            }
        })
        case(act.REMCART):
        return update(state,{
            arrayOfItems:{
                [action.product]:{
                    amount:{$set: state.arrayOfItems[action.product].amount - 1}
                }
            }
        })
        case(act.NOEXIST):
        return update(state,{
            arrayOfItems:{
                [action.CartID]:{$set:undefined}
            }
        })
        case(act.DOEXIST):
        return update(state,{
            arrayOfItems:{
                [action.CartID]:{$set: {name:action.name, price:action.price, amount: action.amount +1, img:action.img, id:action.id, kind:action.kind, CartID:action.CartID}}
            }
        })
        case(act.SETEXIST):
        return update(state,{
            existOfItems:{$set:state.existOfItems+1}
        })
        case(act.UNSET):
        return update(state,{
            existOfItems:{$set:state.existOfItems-1}
        })
        case(act.COAST):
        return update(state,{
            coast:{$set: state.coast + (state.arrayOfItems[action.CartID].price * state.arrayOfItems[action.CartID].amount)}
        })
        case(act.CLESS):
        return update(state,{
            coast:{$set:0}
        })
        case(act.SORT):
        return update(state,{
            [action.kind]:{$set:action.content}
        })
        case(act.UPDOWN):
        return update(state,{
            [action.kind]:{
                [action.product]:{
                    id:{$set: [action.id]}
                }
            }
        })
        default: return state;
    }
}

export default Reducer
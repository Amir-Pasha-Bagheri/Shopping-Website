import Homepage from '../Website/HOME PAGE/Homepage'
import Signin from '../Website/SIGN IN/Signin'
import Products from '../Website/PRODUCTS/Products'
import Clothes from './PRODUCTS/CLOTHES/clothes'
import Food from './PRODUCTS/FOOD/food'
import Sport from './PRODUCTS/SPORT/sport'
import Game from './PRODUCTS/GAME/game'
import Mobile from './PRODUCTS/MOBILE/mobile'
import { Provider } from 'react-redux'
import store from './REDUX/store'
import Cart from './CART/cart'
import Buy from './buy'


const homepage = () =>{
    return <Provider store={store}><Homepage/></Provider>
}

const notfound = () =>{
    return (
        <div style={{textAlign:"center",marginTop:"30px"}}>
            <h2>404 Not Found</h2>
            Click <a href="/">Here</a> To Go Home Page
        </div>
    )
}

const signin = () =>{
    return <Signin/>
}

const products = () =>{
    return <Products/>
}

const food = () =>{
    return <Food/>
}

const clothes = () =>{
    return <Clothes/>
}

const game = () =>{
    return <Game/>
}

const sport = () =>{
    return <Sport/>
}

const mobile = () =>{
    return <Mobile/>
}

const cart = () =>{
    return <Cart/>
}

const buy = () =>{
    return <Buy/>
}

export{
    homepage,
    notfound,
    signin,
    products,
    food,
    clothes,
    game,
    sport,
    mobile,
    cart,
    buy
}
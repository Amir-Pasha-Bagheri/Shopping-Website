import { Route , Switch} from "react-router"
import * as pages from "./Component" 

const Routes = () =>{
    return (
        <div>
            <Switch>
                <Route exact path="/" component={pages.homepage}/>
                <Route path="/Sign-In" component={pages.signin}/>
                <Route path="/Products" component={pages.products}/>
                <Route path="/clothes" component={pages.clothes}/>
                <Route path="/food" component={pages.food}/>
                <Route path="/sport" component={pages.sport}/>
                <Route path="/game" component={pages.game}/>
                <Route path="/mobile" component={pages.mobile}/>
                <Route path="/Your-Cart" component={pages.cart}/>
                <Route path="/Payment" component={pages.buy}/>
                <Route component={pages.notfound}/>
            </Switch>
        </div>
    )
}

export default Routes
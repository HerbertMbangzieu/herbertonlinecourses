import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { AdminSchool, AdminSpecialty } from "../pages";

const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path='/'>

        </Route>
        
        <Route exact path='/specialties/:school'>

        </Route>

        <Route exact path='/courses/:school/:specialty'>

        </Route>
        
        <Route exact path='/lessons/:school/:specialty/:course'>

        </Route>

        <Route exact path='/exercises/:school/:specialty/:course/:lesson'>

        </Route>

        <Route exact path='/quizz/:school/:specialty/:course/:lesson'>

        </Route>

        <Route exact path='/admin/schools'>
            <AdminSchool/>
        </Route>

        <Route exact path='/admin/specialties'>
            <AdminSpecialty/>
        </Route>

        <Route exact path='/admin/courses/:school/:specialty'>

        </Route>
        
        <Route exact path='/admin/lessons/:school/:specialty/:course'>

        </Route>












    </Switch>
    </BrowserRouter>
  )
}

export default Routes
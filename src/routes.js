import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from './screens/Login'
import Repositories from './screens/Repositories'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Repositories
    })
)

export default Routes
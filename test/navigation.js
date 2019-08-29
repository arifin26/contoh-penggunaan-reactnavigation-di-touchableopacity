import {createStackNavigator,createAppContainer} from 'react-navigation'

import Ujian from './ulangan2'
import Polosan from './ulangan3'

const Route= createStackNavigator ({
        ujian:{
            home:Ujian,
            
        },
        polosan:{
            screen:Polosan,
            
        }
});

export default createAppContainer(Route)

import { createStackNavigator } from '@react-navigation/stack';
import Basics from "../SCREEN/Basics";
import HooksExemple from "../SCREEN/HooksExemple";
import ExempleComponents from "../SCREEN/ExempleComponents";

const Stack = createStackNavigator();

export default function Stack (){

    return(
        <Stack.Navigator>
            <Stack.Screen name="Basic" component={Basics} />
            <Stack.Screen name="HooksExemple" component={HooksExemple} />
            <Stack.Screen name="Exemple2" component={ExempleComponents} />
        </Stack.Navigator>
    )

}
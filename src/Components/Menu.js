import { createDrawerNavigator } from "@react-navigation/drawer";
import { Page1, Page2 } from "../Pages/Pages.js";

const Drawer = createDrawerNavigator();
const Menu = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Page 1" component={Page1} />
            <Drawer.Screen name="Page 2" component={Page2} />
        </Drawer.Navigator>
    );
};

export default Menu;
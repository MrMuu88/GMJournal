import { DrawerItem } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList } from 'react-native';

export const CustomDrawer = (props) => {

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};
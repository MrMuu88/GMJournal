import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, Text } from 'react-native';

export const CustomDrawer = (props) => {

    return (
        <View style={{ flex: 1 }}>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 28, color: 'white', backgroundColor: 'red', padding: 20 }}>GM Journal</Text>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList  {...props} />
            </DrawerContentScrollView>
            <View style={{ borderTopWidth: 1 }} >
                <DrawerItem {...props} label="About" />
                <DrawerItem {...props} label="Settings" />
            </View>
        </View>
    );
};
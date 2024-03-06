import { View, Text } from "react-native";
import { FAB } from "@rneui/themed";


export const Page1 = () => {
    return (
        <View style={{ flexGrow: 1 }}>
            <Text style={{ color: 'black' }}>this is the first page</Text>
            <FAB style={{ margin: 25 }} visible={true} placement="right" icon={{ name: '3d-rotation', color: 'white' }} color="green" size="medium" />
        </View>
    );
};

export const Page2 = () => {
    return (
        <View>
            <Text>This is the first Page</Text>
        </View>
    );
};



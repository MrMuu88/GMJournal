
import { View, Text } from "react-native";
import { AddButtons } from "../Components/AddButtons";


export const Page1 = () => {
    return (
        <View style={{ flexGrow: 1 }}>
            <Text style={{ color: 'black' }}>This is the first page</Text>
            <AddButtons />
        </View>
    );
};


export const Page2 = () => {
    return (
        <View style={{ flexGrow: 1 }}>
            <Text style={{ color: 'black' }}>This is the second page</Text>
            <AddButtons />
        </View>
    );
};




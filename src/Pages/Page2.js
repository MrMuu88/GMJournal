
import { View, Text } from "react-native";
import { AddButtons } from "../Components/AddButtons";

export const Page2 = () => {
    return (
        <View style={{ flexGrow: 1 }}>
            <Text style={{ color: 'black' }}>This is the second page</Text>
            <AddButtons />
        </View>
    );
};




import { View, Text } from "react-native";
import { AddButtons } from "../Components/AddButtons";

export const InDevelopment = () => {
    return (
        <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 32, color: 'black' }}>This feature is under development</Text>
            <AddButtons />
        </View>
    );
};


import { Card } from "@rneui/themed";
import { Image, Text } from "react-native";
import { SimpleMenu } from "./SimpleMenu";
import { View } from "react-native";

export const ImageDisplay = ({ imageData, onDelete }) => {

    return (
        <Card >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}>{imageData.title}</Text>
                <SimpleMenu entry={imageData} onDelete={onDelete} />
            </View>
            <Image style={{ height: 200, width: '100%', backgroundColor: 'plum' }} source={{ uri: imageData.uri }} />
        </Card>
    );
};
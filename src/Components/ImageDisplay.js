import { Card } from "@rneui/themed";
import { useEffect, useState } from "react";
import { Image, Text } from "react-native";

export const ImageDisplay = ({ imageData }) => {

    const [image, setImage] = useState(null);
    useEffect(() => {
        setImage(require('../MockData/hacker.png'));
    });
    //const img = require(imageData.uri);
    return (
        <Card >
            <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}>{imageData.title}</Text>
            <Image style={{ flex: 1, width: '100%' }} source={image} />
            <Text style={{ alignSelf: 'baseline', padding: 5, backgroundColor: '#000000', opacity: 0.7 }}>{imageData.uri}</Text>
        </Card>
    );
};
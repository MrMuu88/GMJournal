import { View, Text, TextInput } from "react-native";
import { Card } from '@rneui/themed';
import { SimpleMenu } from "./SimpleMenu";

export const Note = ({ note, onDelete }) => {
    return (
        <Card>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', color: "azure" }}>
                {/*ide kell egy icon a név elé*/}
                <TextInput style={{ color: 'black', fontWeight: 'bold', fontSize: 24 }} autoComplete='off'>{note.title}</TextInput>
                <SimpleMenu entry={note} onDelete={onDelete} />
            </View>
            <Card.Divider />
            <View>
                <TextInput style={{ color: 'black', fontSize: 16 }} multiline={true} autoComplete='off'>{note.text}</TextInput>
            </View>
        </Card>
    );
};

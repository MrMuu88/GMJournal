import { TextInput, View } from 'react-native';
import { Card, Icon } from '@rneui/themed';
import { SimpleMenu } from './SimpleMenu';


export const Subpage = ({ subPage, onDelete }) => {

    return (
        <Card borderRadius={30} >
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon style={{ marginRight: 15 }} size={40} type="ionicon" name="enter-outline" />
                    {/*Should have it's own Icon somehow*/}
                    <TextInput style={{ color: 'black', fontWeight: 'bold', fontSize: 24 }}>{subPage.title}</TextInput>
                    <TextInput>description</TextInput>
                </View>
                <SimpleMenu entry={subPage} onDelete={onDelete} />
            </View>
        </Card>
    );
};
import { StyleSheet,  View, TouchableOpacity } from 'react-native';
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome"

function ItemIcons(){
    const [itemState, setitemState] = useState(false);
    const StateManager = () => {
        setitemState(!itemState);
    };


    return(
        <View style={styles.itemButtons}>
            <TouchableOpacity style={styles.readyIcon}>
                <Icon name="check" size={30} color="green" onPress={StateManager}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteIcon}>
                <Icon name="times" size={30} color="red" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    itemButtons: {
        flexDirection: 'row',
        marginLeft: 'auto',
        height: "100%",

    },

    deleteIcon: {
        backgroundColor: '#db999c',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        height: "100%",
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
    },
    readyIcon: {
        backgroundColor: '#d7f7ce',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        height: "100%",
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
    },
});

export default ItemIcons;
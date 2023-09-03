import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import { ItemIcons, itemState } from './ItemIcons.js';

export default function AddItem(){
  const [textValue, setTextValue] = useState("");
  const [itemList, setItemList] = useState([]);

  const onHandleChangeItem = text => setTextValue(text);

  const addItem = () => {
    const newItem = { id: Math.random().toString(), value: textValue };
    setItemList(prevState => [...prevState, newItem]);
    setTextValue('');
    console.log(itemList);
  }
  
  const renderListItem = ({ item }) => (
    <TouchableOpacity
        style={styles.itemContainer}
        // onPress={() => onHandleModal(index)}
    >
        <Text style={[
            styles.textItem,
            itemState ? { textDecorationLine: 'line-through', color: 'gray' } : null
            ]}>
            {item?.value}
        </Text>
        <View style={styles.itemButtonsPosition}>
            <ItemIcons />
        </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nuevo Elemento"
                    value={textValue}
                    onChangeText={onHandleChangeItem}
                />
                <TouchableOpacity style={styles.button} onPress={addItem}>
                    <Text style={{color: "white"}}>Agregar</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.listContainer}>
            <FlatList
                data={itemList}
                renderItem={renderListItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        width: '85%',
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 17,
        paddingLeft: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderTopLeftRadius: 20, 
        borderBottomLeftRadius: 20,
        color: "#242424",
    },
    itemContainer: {
        backgroundColor: '#f2f2f2',
        flexDirection: 'row',
        borderRadius: 21,
        marginVertical: 8,
        marginHorizontal: 16,
        height: 50,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    textItem: {
        fontSize: 16,
        color: 'black', 
        paddingLeft: 12,
    },
    listContainer: {
        width: '85%',
    },
    button: {
        backgroundColor: '#242424', 
        borderTopRightRadius: 20, 
        borderBottomRightRadius: 20, 
        paddingHorizontal: 10, 
        justifyContent: 'center',
        
    },
    itemButtonsPosition: {
        flex: 1,
        justifyContent: "flex-end",
    }
});
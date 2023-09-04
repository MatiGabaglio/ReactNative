import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Modal as NewModal, Button } from 'react-native';
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome"
import Modal from './Modal.js';

export default function AddItem(){

  //····················· ADD NEW ITEM  ························//
  const [textValue, setTextValue] = useState("");
  const [itemList, setItemList] = useState([]);
  const onHandleChangeItem = text => setTextValue(text);

  const addItem = () => {
    const newItem = { id: Math.random().toString(), value: textValue };
    setItemList(prevState => [...prevState, newItem]);
    setTextValue('');
  }

  //····················· ITEM STATE  ························//
  const [itemState, setItemState] = useState(false);

  const StateManager = () => {
    setItemState(!itemState);
  };

  //····················· MODAL  ························//

    const [modalVisible, setModalVisible] = useState(false); 
    const [itemSelected, setItemSelected] = useState(null);

    const onHandleModal = (index) => {
    setModalVisible(true);
    setItemSelected(index);
    };

    const onHandleDelete = () => {
    if (itemSelected !== null) {
        const updatedList = [...itemList];
        updatedList.splice(itemSelected, 1);
        setItemList(updatedList);
        setModalVisible(false);
        setItemSelected(null);
    }
    };

//····················· RENDER LIST ITEM  ························//
  const renderListItem = ({ item, index }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={[
        styles.textItem,
        itemState ? { textDecorationLine: 'line-through', color: 'gray' } : null
      ]}>
        {item?.value}
      </Text>

      <View style={styles.itemButtonsPosition}>
        <View style={styles.itemButtons}>

          <TouchableOpacity style={styles.readyIcon}>
            <Icon name="check" size={30} color="green" onPress={StateManager} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.deleteIcon}>
            <Icon name="times" size={30} color="red" onPress={() => onHandleModal(index)} />
          </TouchableOpacity>

        </View>
      </View>
    </TouchableOpacity>
  );

  //····················· RETURN ························//
  
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
            <Text style={{ color: "white" }}>Agregar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={itemList}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <Modal modalVisible={modalVisible} onHandleDelete={onHandleDelete} />
    </View>
  );
}


//····················· STYLES ························//

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
    },
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
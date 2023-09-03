import React, {useState} from "react";
import { View, Text, Modal as NewModal, Button, StyleSheet } from "react-native";

export default function Modal({ modalVisible, onHandleDelete }) {
  return (
    <NewModal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalTitle}>
            <Text>Eliminar?</Text>
          </View>
          <View style={styles.modalMessage}>
            <Text>Estás seguro de eliminar este elemento?</Text>
          </View>
          <View style={styles.modalButton}>
            <Button title="confirmar" onPress={onHandleDelete} />
          </View>
        </View>
      </View>
    </NewModal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 10,
    alignItems: "center",
  },
  modalMessage: {
    marginBottom: 20,
  },
  modalButton: {
    alignItems: "center",
  },
});

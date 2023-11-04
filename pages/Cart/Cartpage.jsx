import { View, Text, Pressable, FlatList } from 'react-native';
import React from 'react'
import { styles } from './cartStyle'
import { useSelector } from 'react-redux'
import CartItem from './cartItem';
import { usePostOrderMutation } from '../../src/services/tiendaApi';

const Cartpage = () => {
  const cart = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)
  const [ triggerPost, result ] = usePostOrderMutation()
  
  const confirmCart = () => {
    triggerPost({total, cart, user: "loggerUser"})
  }

  const renderItem = ({item}) => <CartItem item={item} />

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}> 
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={item => item.id} 
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={confirmCart}>
          <Text style={styles.buttonText}>Continuar</Text>
        </Pressable>
        <Text style={styles.totalText}>Total: ${total}</Text>
      </View>
    </View>
  )
}

export default Cartpage
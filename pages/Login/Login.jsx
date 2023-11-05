import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { setUser } from '../../src/features/Auth/AuthSlice';
import { useLogInMutation } from '../../src/services/AuthApi'
import { useDispatch } from 'react-redux';
import { styles } from './LoginStyles';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [triggerLogIn, result] = useLogInMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log(email, password);
    triggerLogIn({ email, password });
    console.log(result);
    if(result.isSuccess) {
      dispatch(setUser(result));
    }
  };

  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Inicia sesión</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
        />
        <Pressable style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={navigateToSignUp}>
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

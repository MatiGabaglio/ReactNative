import React, { View, Text, TextInput, Pressable } from 'react-native';
import { styles } from './SignUpStyles';
import { useSignUpMutation } from '../../src/services/AuthApi';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setUser } from '../../src/features/Auth/AuthSlice';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [triggerSigUp, result] = useSignUpMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log(email, password, confirmPassword);
    triggerSigUp({ email, password });
    console.log(result);
    if(result.isSuccess) {
      dispatch(setUser(result));
    }
  };

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Crea tu cuenta</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>eMail</Text>
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
        <Text style={styles.label}>Confirmar contraseña</Text>
        <TextInput
          style={styles.input}
          onChangeText={setconfirmPassword}
          value={confirmPassword}
        />
        <Pressable style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </Pressable>
      </View>
      <Pressable style={styles.button}  onPress={navigateToLogin}>
        <Text style={styles.buttonText}>¿Ya estas registrado?</Text>
      </Pressable>
    </View>
  );
};

export default SignUp;
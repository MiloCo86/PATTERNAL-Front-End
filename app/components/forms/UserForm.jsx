import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native'

// colors and helper functions
import colors from '../../config/colors'

const UserForm = () => {
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        verify_password: '',
        child_amount: 0 // Default value
    });

  return (
    <View style={styles.container}>
        <Text>First Name</Text>
        <TextInput
            placeholder='First Name'
            style={styles.inputControl}
            value={form.first_name}
            onChangeText={first_name => setForm({ ...form, first_name })}
            autoCorrect={false}
            keyboardType='default'
        />
        <Text>Last Name</Text>
        <TextInput
            placeholder='Last Name'
            style={styles.inputControl}
            value={form.last_name}
            onChangeText={last_name => setForm({ ...form, last_name })}
            autoCorrect={false}
            keyboardType='default'
        />
        <Text>E-mail</Text>
        <TextInput
            placeholder='E-mail'
            style={styles.inputControl}
            value={form.email}
            onChangeText={email => setForm({ ...form, email })}
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
        />
        <Text>Username</Text>
        <TextInput
            placeholder='Username'
            style={styles.inputControl}
            value={form.username}
            onChangeText={username => setForm({ ...form, username })}
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='default'
        />
        <Text>Password</Text>
        <TextInput
            placeholder='Password'
            style={styles.inputControl}
            value={form.password}
            onChangeText={password => setForm({ ...form, password })}
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='default'
            secureTextEntry={true}
            textContentType="none" // Prevents strong password suggestions
        />
        <Text>Verify Password</Text>
        <TextInput
            placeholder='Verify Password'
            style={styles.inputControl}
            value={form.verify_password}
            onChangeText={verify_password => setForm({ ...form, verify_password })}
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='default'
            secureTextEntry={true}
            textContentType="none" // Prevents strong password suggestions
        />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.altSecondary,
        width: '100%',
    },
    inputControl: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        backgroundColor: colors.white,
    },
})

export default UserForm

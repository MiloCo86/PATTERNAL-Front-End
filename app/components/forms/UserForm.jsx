import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, TextInput} from 'react-native'

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
    });

  return (
    <View style={styles.container}>
        <Text style={styles.labelText} >First Name</Text>
        <TextInput
            placeholder='First Name'
            style={styles.inputControl}
            value={form.first_name}
            onChangeText={first_name => setForm({ ...form, first_name })}
            autoCorrect={false}
            keyboardType='default'
        />
        <Text style={styles.labelText} >Last Name</Text>
        <TextInput
            placeholder='Last Name'
            style={styles.inputControl}
            value={form.last_name}
            onChangeText={last_name => setForm({ ...form, last_name })}
            autoCorrect={false}
            keyboardType='default'
        />
        <Text style={styles.labelText} >E-mail</Text>
        <TextInput
            placeholder='E-mail'
            style={styles.inputControl}
            value={form.email}
            onChangeText={email => setForm({ ...form, email })}
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
        />
        <Text style={styles.labelText} >Username</Text>
        <TextInput
            placeholder='Username'
            style={styles.inputControl}
            value={form.username}
            onChangeText={username => setForm({ ...form, username })}
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='default'
        />
        <Text style={styles.labelText} >Password</Text>
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
        <Text style={styles.labelText} >Verify Password</Text>
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
        alignItems: 'flex-start',
        width: '90%',
        marginHorizontal: 16,
    },
    inputControl: {
        width: '100%',
        minWidth: '90%',
        height: 40,
        borderWidth: 1,
        borderColor: colors.altSecondary,
        marginBottom: 5,
        backgroundColor: colors.white,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',

    },
    labelText: {
        width: '80%',
        color: 'darkgrey',
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default UserForm

import React from 'react'
import { StyleSheet } from 'react-native'
import { useState } from 'react'
//React Native Paper
import { SelectList } from 'react-native-dropdown-select-list'
//Config files
import colors from '../../config/colors'


const ButtonList = ({handleSelect}) => {

    const [selected, setSelected] = useState('')

    const data = [
        { key: '1', value: 'Date' },
        { key: '2', value: 'Mood' }
    ]
  return (
     <SelectList
        placeholder='Order By '
        selected={selected}
        setSelected={(val) => setSelected(val)}
        data={data}
        save='value'
        search={false}
        onSelect={()=>handleSelect(selected)}
        maxHeight={80}
        boxStyles={styles.boxStyles}
        inputStyles={styles.inputStyles}
        dropdownStyles={styles.dropdownStyles}
    />
  )
}

const styles = StyleSheet.create({
    boxStyles: {
        height: 40,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: colors.primary,
        width: 110,
    },
    inputStyles: {
        color: colors.primary,
        fontSize: 13,
        fontFamily: 'Roboto',
    },
    dropdownStyles: {
        marginTop: 0,
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: colors.primary,
        width: 110,
    }
})



export default ButtonList

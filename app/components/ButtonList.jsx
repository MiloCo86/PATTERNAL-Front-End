import React from 'react'
import { StyleSheet } from 'react-native'
import { useState } from 'react'
//React Native Paper
import { SelectList } from 'react-native-dropdown-select-list'
//Config files
import colors from '../config/colors'


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
        maxHeight={90}
        boxStyles={styles.boxStyles}
        inputStyles={styles.inputStyles}
        dropdownStyles={styles.dropdownStyles}
    />
  )
}

const styles = StyleSheet.create({
    boxStyles: {
        backgroundColor: colors.white,
        borderRadius: 10,
        borderColor: colors.primary,
        width: 120,
    },
    inputStyles: {
        color: colors.primary,
        fontSize: 14,
        fontFamily: 'Roboto',
    },
    dropdownStyles: {
        marginTop: 0,
        backgroundColor: colors.white,
        borderRadius: 10,
        borderColor: colors.secondary,
        width: 120,
    }
})



export default ButtonList

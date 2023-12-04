import React, {useState} from 'react'
import { Text, View, StyleSheet, Button} from 'react-native'

const Countnumber = () => {
const [number, setNumber] = useState(0)
  return (
    <View>
        <Text style={styles.text}>{number}</Text>
        <Button title="Tambah" onPress={() => setNumber(number + 1)}></Button>
        <Button title="Reset" onPress={() => setNumber(1)} color="red"></Button>
    </View>
  )
}

export default Countnumber
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})
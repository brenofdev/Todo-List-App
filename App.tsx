import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView,  } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');
  const [list, setList] = useState<string[]>([]);
  const [clear, setClear] = useState(['']);

  const handleInput = (text: string) => {
    setMessage(text);
  }

  console.log(list)

  const sendMessage = () => {
    setList(oldState => [...oldState, message])
    setMessage('')
  }

  const clearTotal = () => {
    setList([])
  }

  return (
    <View style={styles.container}>
        <Button title='Apagar tudo' onPress={clearTotal} color={'black'}/>
      <ScrollView>
        {
          list.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
            
          ))
        }
      </ScrollView>
      <View style={styles.textInputContainer}>       
        <TextInput style={styles.input} value={message} onChangeText={handleInput}/>
        <Button title='enviar' onPress={sendMessage} color={'black'}/>
      </View>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  input: {
    height: 50,
    width: '80%',
    borderWidth: 1,
    borderColor: '#c6c6c6',
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  textInputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 15,
  },
  itemText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  }
});

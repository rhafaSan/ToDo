import React, { useState, Component } from 'react'
import { Modal, 
  View, 
  StyleSheet, 
  TouchableWithoutFeedback, 
  Text, 
  TouchableOpacity, 
  TextInput
} from 'react-native'

import commonStyles from '../commonStyles'

export default function AddTasks(){

  const [text, setText] = useState('')
    return(
      <Modal transparent={true} visible={this.props.isVisible}
        onRequestClose={this.props.onCancel} animationType='slide'>
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.background}></View>
        </TouchableWithoutFeedback>
        <View style={styles.container}>
          <Text style={styles.header}>Nova Tarefa</Text>
          <TextInput  style={styles.input}
          placeholder="Informe a descrição..."
          value={text}
          onChangeText={setText(text)}/>

          <View style={styles.buttons}>
            <TouchableOpacity onPress={this.props.onCancel}>
                <Text style={styles.button}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.button}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.background}></View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  container:{
    backgroundColor: '#fff',
  },
  header:{
    fontFamily: commonStyles.fontFamily,
    backgroundColor:commonStyles.colors.today,
    color: commonStyles.colors.secondary,
    textAlign: 'center',
    padding: 15,
    fontSize: 20
  },
  buttons:{
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  button:{
    margin: 20,
    marginRight: 30,
    color: commonStyles.colors.today
  },
  input:{
    fontFamily: commonStyles.fontFamily,
    height: 40,
    margin: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: 6
  }
})
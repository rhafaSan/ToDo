import React, { Component } from 'react'
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert
} from 'react-native'

import axios from 'axios'

import backgroundImage from '../../assets/imgs/login.jpg'
import commonStyles from '../commonStyles'
import AuthInput from '../components/AuthInput'

import { server, showError, showSuccess } from '../common'

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    stageNew: true
}

export default class Auth extends Component {

  state = {
    ...initialState
  }
  signup = async () =>{
    try{
      await axios.post(`${server}/sigup`,{
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
      })

      showSuccess('Usuário cadastrado!')
      this.setState({ ...initialState })

    }catch(e){
      showError(e)
    }
  }

  signinOrsignup = () => {
    if (this.state.stageNew) {
      this.signup()
    } else {
      Alert.alert('Sucesso', 'Logar')
    }
  }


  render() {
    return (
      <ImageBackground source={backgroundImage}
        style={styles.background}>
        <Text style={styles.title}>Tasks</Text>
        <View style={styles.formContainer}>
          <Text style={styles.subTitle}>
            {this.state.stageNew ? 'Criar conta' : 'Informe seus dados'}
          </Text>
          {this.state.stageNew &&
          <AuthInput icon='user' placeholder='Name'
            value={this.state.name}
            style={styles.input}
            onChangeText={name => this.setState({ name })} />
          }
          <AuthInput icon='at' placeholder='E-mail'
            value={this.state.email}
            style={styles.input}
            onChangeText={email => this.setState({ email })} />
          <AuthInput icon='lock' placeholder='Senha'
            value={this.state.password}
            style={styles.input} secureTextEntry={true}
            onChangeText={password => this.setState({ password })} />
          {this.state.stageNew &&
          <AuthInput icon='asterisk' placeholder='Confirmar senha'
            value={this.state.confirmPassword}
            style={styles.input} secureTextEntry={true}
            onChangeText={confirmPassword => this.setState({ confirmPassword })} />

          }
          <TouchableOpacity onPress={this.signinOrsignup}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                {this.state.stageNew ? 'Registrar' : 'Entrar'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ padding: 10 }} onPress={() => this.setState({ stageNew: !this.state.stageNew })}>
          <Text style={styles.buttonText}>
            {this.state.stageNew ? 'Já possui conta?' : 'Ainda não possui conta?'}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 70,
    marginBottom: 10
  },
  subTitle: {
    fontFamily: commonStyles.fontFamily,
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },

  background: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    marginTop: 10,
    backgroundColor: '#fff',
  },
  formContainer: {
    backgroundColor: 'rgba(0,0,0, 0.8)',
    padding: 20,
    width: '90%',
  },
  button: {
    backgroundColor: '#080',
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 7
  },
  buttonText: {
    fontFamily: commonStyles.fontFamily,
    color: '#fff',
    fontSize: 20
  }
})
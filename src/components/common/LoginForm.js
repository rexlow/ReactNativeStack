import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import Spinner from './Spinner';

import firebase from 'firebase';

class LoginForm extends Component {

  state = { email: '', password: '', errorMessage: '', loading: false }

  renderButton() {
    if(this.state.loading) { return <Spinner size="small" /> }
    return(
      <Button
        onPress={this.onButtonPressed.bind(this)}>
        Login
      </Button>
    )
  }

  onButtonPressed(){
    const { email, password } = this.state;

    this.setState({ errorMessage: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch((error) => {
            this.setState({errorMessage: error.message, loading: false})
          });
      });
  }

  onLoginSuccess() {
    this.setState({
      errorMessage: '',
      email: '',
      password: '',
      loading: false,
    });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="user@gmail.com"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder="password"
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.errorText}>{this.state.errorMessage}</Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorText: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
}

export default LoginForm;

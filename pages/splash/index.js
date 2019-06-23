import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {Container, Content, Text, Button} from 'native-base';
import {connect} from 'react-redux';
import {brandColor} from "../../const/theme";
import {Grid, Row} from 'react-native-easy-grid';

const logo = require('../../assets/logo.png');

class LoginPage extends Component {

  onSignupPress() {
    this.props.navigation.navigate('SignUp');
  }

  onLoginPress() {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <Container style={styles.container}>
        <Grid style={styles.innerContainer}>
          <Row size={7} style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </Row>
          <Row size={4} style={styles.titleContainer}>
            <Text style={styles.title}>Your Path to a Safer Life</Text>
          </Row>
          <Row size={4} style={styles.buttonContainer}>
            <Button style={styles.button} onPress={this.onLoginPress.bind(this)}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </Button>
            <Button style={styles.button} onPress={this.onSignupPress.bind(this)}>
              <Text style={styles.buttonText}>SIGNUP</Text>
            </Button>
          </Row>
          <Row size={4} style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Safer Space</Text>
          </Row>
        </Grid>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: brandColor,
    flex: 1
  },
  innerContainer: {
    flex: 1
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'avenir',
    color: '#fff',
    fontSize: 32,
    marginLeft: 48,
    marginRight: 48,
    textAlign: 'center'
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 200
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center'
  },
  button: {
    borderRadius: 5,
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0269A4'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
  },
  subtitle: {
    color: '#000',
    fontSize: 16,
    marginBottom: 8
  },
  subtitleContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 8
  }
});

export default connect()(LoginPage);
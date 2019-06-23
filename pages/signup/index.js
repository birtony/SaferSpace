import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Text, Container, Form, Item, Input, Label} from 'native-base';
import {Grid, Row} from 'react-native-easy-grid';
import {FontAwesome} from '@expo/vector-icons';
import {StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {brandColor} from "../../const/theme";
import {signup, signup_password_changed, signup_username_chaged, signup_username_changed} from "../../actions/auth";

class SignupPage extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Grid>
          <Row size={30} style={styles.titleContainer}>
            <Text style={styles.title}>SIGNUP</Text>
          </Row>
          <Row size={30} style={styles.formRow}>
            <Form style={styles.formContainer}>
              <Item stackedLabel style={styles.formInputContainer}>
                <Label style={styles.formLabel}>Email</Label>
                <TextInput value={this.props.username} onChangeText={this.props.username_changed} style={styles.formInput}/>
              </Item>
              <Item stackedLabel style={styles.formInputContainer}>
                <Label style={styles.formLabel}>Password</Label>
                <TextInput secureTextEntry value={this.props.password} onChangeText={this.props.password_changed} style={styles.formInput}/>
              </Item>
            </Form>
          </Row>
          <Row size={30} style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={this.props.signup}>
              <FontAwesome style={styles.buttonIcon} name='arrow-right' size={48} color='#fff'/>
            </TouchableOpacity>
          </Row>
          <Row size={10} style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Safer Space</Text>
          </Row>
        </Grid>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: brandColor
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'avenir',
    textAlign: 'center',
    fontSize: 32,
    color: '#fff'
  },
  formContainer: {
    marginLeft: 24,
    marginRight: 24,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  formLabel: {
    color: '#fff',
    fontSize: 18
  },
  formInputContainer: {
    borderBottomWidth: 0
  },
  formInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 8,
    width: 300,
    height: 40
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    borderRadius: 40,
    backgroundColor: '#032639',
    color: '#fff',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subtitleContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 8
  }
});
const mapStateToProps = state => ({
  username: state.auth.signup_username,
  password: state.auth.signup_password
});
const mapDispatchToProps = dispatch => ({
  username_changed: username => dispatch(signup_username_changed(username)),
  password_changed: password => dispatch(signup_password_changed(password)),
  signup: () => dispatch(signup())
});
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
import React, {Component} from 'react';
import {Container, Content, Text} from 'native-base';
import {connect} from 'react-redux';

class LoginPage extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>login page</Text>
        </Content>
      </Container>
    )
  }
}

export default connect()(LoginPage);
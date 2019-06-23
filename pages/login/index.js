import React, {Component} from 'react';
import {Container, Content, Text} from 'native-base';
import {connect} from 'react-redux';
import {brandColor} from "../../const/theme";

class LoginPage extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Text>login page</Text>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: brandColor
  }
});

export default connect()(LoginPage);
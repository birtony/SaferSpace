import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {Grid, Row} from 'react-native-easy-grid';
import {Container, Text, Button, Input, Item, ListItem, CheckBox, Body} from 'native-base';
import DatePicker from 'react-native-datepicker';
import {FontAwesome} from '@expo/vector-icons';

class QuizPage extends Component {

  state = {
    tab: 0
  };

  renderTabs() {
    return (
      <View style={styles.tabs}>
        <View style={[styles.tab, this.state.tab === 0 ? styles.activeTab : null]} />
        <View style={[styles.tab, this.state.tab === 1 ? styles.activeTab : null]} />
        <View style={[styles.tab, this.state.tab === 2 ? styles.activeTab : null]} />
        <View style={[styles.tab, this.state.tab === 3 ? styles.activeTab : null]} />
        <View style={[styles.tab, this.state.tab === 4 ? styles.activeTab : null]} />
      </View>
    )
  }

  renderQuestion() {
    const questions = [
      'When were you born?',
      'What is your gender?',
      'Where are you located?',
      'What substances have you been using?',
      'When was your last usage?'
    ];

    return (
      <Text style={styles.question}>{questions[this.state.tab]}</Text>
    )
  }

  renderAnswer() {
    const answers = [
      (
        <DatePicker
          style={styles.dateQuestion}
          mode='date'
          format='MM-DD-YYYY'
        />
      ),
      (
        <View style={styles.genderQuestionContainer}>
          <View style={styles.genderOption}>
            <FontAwesome style={styles.genderIcon} name={'mars'} size={24} color='#fff'/>
            <Text style={styles.genderName}>Male</Text>
          </View>
          <View style={styles.genderOption}>
            <FontAwesome style={styles.genderIcon} name={'venus'} size={24} color='#fff'/>
            <Text style={styles.genderName}>Female</Text>
          </View>
          <View style={styles.genderOption}>
            <FontAwesome style={styles.genderIcon} name={'transgender-alt'} size={24} color='#fff'/>
            <Text style={styles.genderName}>Other</Text>
          </View>
        </View>
      ),
      (
        <Item regular>
          <Input placeholder={'Toronto'} />
        </Item>
      ),
      (
        <View>
          <ListItem>
            <CheckBox />
            <Body>
              <Text>Opiods</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox />
            <Body>
              <Text>Coke</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox />
            <Body>
              <Text>Xanax</Text>
            </Body>
          </ListItem>
        </View>
      ),
      (
        <DatePicker
          style={styles.dateQuestion}
          mode='date'
          format='MM-DD-YYYY'
        />
      )
    ]
  }

  render() {
    return (
      <Container>
        <Grid>
          <Row><Text>SaferSpace Onboarding</Text></Row>
          <Row>{this.renderTabs()}</Row>
          <Row>{this.renderQuestion()}</Row>
          <Row>{this.renderAnswer()}</Row>
          <Row><Button block onPress={this.onNextPress.bind(this)}>Next</Button></Row>
        </Grid>
      </Container>
    )
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
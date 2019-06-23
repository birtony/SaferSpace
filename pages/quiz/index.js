import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {Grid, Row} from 'react-native-easy-grid';
import {Container, Text, Button, Input, Item, ListItem, CheckBox, Body} from 'native-base';
import DatePicker from 'react-native-datepicker';
import {FontAwesome} from '@expo/vector-icons';
import {brandColor} from "../../const/theme";

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
            <FontAwesome style={styles.genderIcon} name={'mars'} size={52} color={brandColor}/>
            <Text style={styles.genderName}>Male</Text>
          </View>
          <View style={styles.genderOption}>
            <FontAwesome style={styles.genderIcon} name={'venus'} size={52} color={brandColor}/>
            <Text style={styles.genderName}>Female</Text>
          </View>
          <View style={styles.genderOption}>
            <FontAwesome style={styles.genderIcon} name={'transgender-alt'} size={52} color={brandColor}/>
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
    ];
    return answers[this.state.tab];
  }

  onNextPress() {
    this.setState({
      tab: this.state.tab + 1
    })
  }

  render() {
    return (
      <Container style={styles.container}>
        <Grid style={styles.container}>
          <Row size={15} style={styles.topTitleContainer}><Text style={styles.topTitleText}>SaferSpace Onboarding</Text></Row>
          <Row size={5}>{this.renderTabs()}</Row>
          <Row size={20} style={styles.questionContainer}>{this.renderQuestion()}</Row>
          <Row size={60} style={styles.answerContainer}>{this.renderAnswer()}</Row>
          <Row size={10} style={styles.nextButtonContainer}>
            <Button style={styles.nextButton} block onPress={this.onNextPress.bind(this)}>
              <Text style={styles.nextButtonText}>Next</Text>
            </Button>
          </Row>
        </Grid>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  topTitleText: {
    color: brandColor,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 16
  },
  tabs: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tab: {
    width: 50,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#CACACA'
  },
  activeTab: {
    backgroundColor: brandColor
  },
  questionContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  question: {
    textAlign: 'center',
    color: brandColor,
    fontSize: 22
  },
  answerContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  nextButtonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  nextButton: {
    borderRadius: 0,
    backgroundColor: brandColor,
    flex: 1
  },
  nextButtonText: {
    color: '#fff'
  },
  genderQuestionContainer: 52

});

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
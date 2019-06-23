import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Grid, Row} from 'react-native-easy-grid';
import {Container, Text, Button, Input, Item, ListItem, CheckBox, Body} from 'native-base';
import DatePicker from 'react-native-datepicker';
import {FontAwesome} from '@expo/vector-icons';
import {brandColor} from "../../const/theme";
import {
  date_of_birth_changed,
  drug_changed,
  gender_changed,
  last_usage_changed,
  location_changed,
  name_changed, update_user
} from "../../actions/auth";

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
        <View style={[styles.tab, this.state.tab === 5 ? styles.activeTab : null]} />
      </View>
    )
  }

  renderQuestion() {
    const questions = [
      'What is your name?',
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
        <Item regular>
          <Input style={styles.input} placeholder={'Your name'} value={this.props.name} onChangeText={this.props.name_changed} />
        </Item>
      ),
      (
        <DatePicker
          style={styles.dateQuestion}
          mode='date'
          format='MM-DD-YYYY'
          date={this.props.date_of_birth}
          onDateChange={this.props.date_of_birth_changed}
        />
      ),
      (
        <View style={styles.genderQuestionContainer}>
          <TouchableOpacity onPress={() => this.props.gender_changed('male')}>
            <View style={[styles.genderOption, this.props.gender === 'male' ? styles.active : null]}>
              <FontAwesome style={styles.genderIcon} name={'mars'} size={52} color={brandColor}/>
              <Text style={styles.genderName}>Male</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.gender_changed('female')}>
            <View style={[styles.genderOption, this.props.gender === 'female' ? styles.active : null]}>
              <FontAwesome style={styles.genderIcon} name={'venus'} size={52} color={brandColor}/>
              <Text style={styles.genderName}>Female</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.gender_changed('other')}>
            <View style={[styles.genderOption, this.props.gender === 'other' ? styles.active : null]}>
              <FontAwesome style={styles.genderIcon} name={'transgender-alt'} size={52} color={brandColor}/>
              <Text style={styles.genderName}>Other</Text>
            </View>
          </TouchableOpacity>
        </View>
      ),
      (
        <Item regular>
          <Input value={this.props.location} onChangeText={this.props.location_changed} style={styles.input} placeholder={'Toronto'} />
        </Item>
      ),
      (
        <View style={styles.drugContainer}>
          <ListItem>
            <CheckBox checked={this.props.drugs.opioids} onPress={() => this.props.drug_changed('opioids')} />
            <Body>
              <Text>Opiods</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={this.props.drugs.coke} onPress={() => this.props.drug_changed('coke')}/>
            <Body>
              <Text>Coke</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={this.props.drugs.xanax} onPress={() => this.props.drug_changed('xanax')} />
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
          date={this.props.last_use}
          onDateChange={this.props.last_use_changed}
        />
      )
    ];
    return answers[this.state.tab];
  }

  onNextPress() {
    if (this.state.tab === 5) {
      this.props.update_user();
    }
    this.setState({
      tab: this.state.tab + 1
    })
  }

  render() {
    console.log(this.props);

    if (this.props.complete) this.props.navigation.navigate('Main');

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
  active: {
    borderWidth: 2,
    borderColor: brandColor,
    borderRadius: 5
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
    alignItems: 'center',
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
  genderQuestionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  genderItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  genderIcon: {
    textAlign: 'center'
  },
  genderName: {},
  input: {
    marginLeft: 32,
    marginRight: 32
  },
  drugContainer: {
    flex: 1
  }

});

const mapStateToProps = (state) => ({
  name: state.auth.name,
  date_of_birth: state.auth.date_of_birth,
  gender: state.auth.gender,
  location: state.auth.location,
  drugs: state.auth.drugs,
  last_use: state.auth.last_use,
  complete: state.auth.complete
});
const mapDispatchToProps = (dispatch) => ({
  name_changed: name => dispatch(name_changed(name)),
  date_of_birth_changed: dob => dispatch(date_of_birth_changed(dob)),
  gender_changed: gender => dispatch(gender_changed(gender)),
  location_changed: location => dispatch(location_changed(location)),
  drug_changed: (drug) => dispatch(drug_changed(drug)),
  last_use_changed: last_use => dispatch(last_usage_changed(last_use)),
  update_user: () => dispatch(update_user())
});
export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
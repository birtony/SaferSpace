import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Text, Container, Form, Item, Input, Label, Content} from 'native-base';
import {Grid, Row} from 'react-native-easy-grid';
import {FontAwesome} from '@expo/vector-icons';
import {StyleSheet, Image} from 'react-native';
import {brandColor} from "../../const/theme";

const pills = require('../../assets/pills.png');

class HomePage extends Component {
    render() {
        console.log(this.props.logged_in);
        if (this.props.logged_in) this.props.navigation.navigate('Quiz');

        return (
            <Container style={styles.container}>
                <Grid>
                    <Row style={styles.header}><Text>SaferSpace</Text></Row>
                    <Row><Text style={styles.intro}>Hi {this.props.first_name}</Text></Row>
                    <Row>
                        <Button style={styles.search} iconLeft>
                            <FontAwesome name='search' />
                            <Text>Nearest Safe Space</Text>
                        </Button>
                    </Row>
                    <Row><Text>Next Meeting</Text></Row>
                    <Row><Text style={styles.meetingTime}>{}</Text></Row>
                    <Row style={styles.centerContainer}>
                        <Text>Did you take your pills today?</Text>
                        <Image source={pills} style={styles.pills}/>
                        <Button icon style={styles.blueButton}>
                            <Text>Yes</Text>
                            <FontAwesome name='check' style={styles.blueButton}/>
                        </Button>
                    </Row>
                    <Row>
                        <Button style={styles.blueButton} iconRight>
                            <Text>Book a Session</Text>
                            <FontAwesome name='plus' color='white' size='20'/>
                        </Button>
                    </Row>
                    <Row>
                        <Button style={styles.blueButton} iconRight>
                            <Text>Find a Therapist</Text>
                            <FontAwesome name='search' color='white' size='20'/>
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
    grid: {
        display: 'flex',
        flexDirection: 'column',
    },
    activeTab: {
        backgroundColor: 'white'
    },
    header: {
        backgroundColor: brandColor,
        justifyContent: 'center',
        flex: 1
    },
    intro: {
        color: brandColor,
        justifyContent: 'center',
        textAlign: 'center',
    },
    search: {
        backgroundColor: '#F9DE32',
    },
    centerContainer: {
        backgroundColor: '#E3E3E3',
    },
    meetingTime: {
        color: brandColor,
    },
    pills: {
        width: 200,
        height: 200,
    },
    blueButton: {
        color: 'white',
        backgroundColor: brandColor,
    }
})

const mapStateToProps = state => ({
    first_name: state.auth.first_name
});
export default connect(mapStateToProps)(HomePage);
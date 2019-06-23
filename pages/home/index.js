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
        return (
            <Container style={styles.container}>
                <Grid style={styles.container}>
                    <Row size={10} style={styles.header}><Text style={styles.headerText}>SaferSpace</Text></Row>
                    <Row size={5} style={styles.introContainer}><Text style={styles.intro}>Hi {this.props.first_name}</Text></Row>
                    <Row size={10} style={styles.searchContainer}>
                        <Button style={styles.search} iconLeft onPress={() => this.props.navigation.navigate('Map')}>
                            <FontAwesome name='search' size={20} color='#000'/>
                            <Text style={styles.searchText}>Nearest Safe Space</Text>
                        </Button>
                    </Row>
                    <Row size={4} style={styles.nextContainer}><Text style={styles.nextText}>Next Meeting</Text></Row>
                    <Row size={10} style={styles.meetingContainer}><Text style={styles.meetingTime}>Tuesday, June 27 @2pm</Text></Row>
                    <Row size={30} style={styles.centerContainer}>
                        <Text>Did you take your pills today?</Text>
                        <Image source={pills} style={styles.pills}/>
                        <Button icon style={[styles.blueButton, styles.yesButton]}>
                            <Text>Yes</Text>
                            <FontAwesome name='check' color='#fff' size={20} style={{marginRight: 4}}/>
                        </Button>
                    </Row>
                    <Row size={10} />
                    <Row size={15} style={styles.lowerButtonContainer}>
                        <Button style={styles.blueButton} iconRight>
                            <Text>Book a Session</Text>
                            <FontAwesome name='plus' color='white' size={20} style={{marginRight: 4}}/>
                        </Button>
                        <Button style={styles.blueButton} iconRight>
                            <Text>Find a Therapist</Text>
                            <FontAwesome name='search' color='white' size={20} style={{marginRight: 4}}/>
                        </Button>
                    </Row>
                </Grid>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    grid: {
    },
    activeTab: {
        backgroundColor: 'white'
    },
    header: {
        backgroundColor: brandColor,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
    },
    introContainer: {
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 8
    },
    intro: {
        color: brandColor,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 18
    },
    search: {
        backgroundColor: '#F9DE32',
        flex: 1,
        marginLeft: 32,
        marginRight: 32,
        justifyContent: 'space-around'
    },
    searchText: {
        color: '#000',
        textAlign: 'center'
    },
    searchContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    meetingContainer: {
        paddingLeft: 32,
        paddingRight: 32,
    },
    centerContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    meetingTime: {
        color: brandColor,
        paddingBottom: 0,
        height: 26,
        borderBottomWidth: 3,
        borderBottomColor: brandColor
    },
    nextContainer: {
        paddingLeft: 32,
        paddingRight: 32
    },

    pills: {
        width: 200,
        height: 200,
    },
    blueButton: {
        color: 'white',
        backgroundColor: brandColor,
        alignSelf: 'center',
        margin: 4
    },
    lowerButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    yesButton: {
        width: 110,
        height: 30
    }
})

const mapStateToProps = state => ({
    first_name: state.auth.first_name
});
export default connect(mapStateToProps)(HomePage);
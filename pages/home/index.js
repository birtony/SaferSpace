import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Text, Container, Form, Item, Input, Label, Content} from 'native-base';
import {Grid, Row} from 'react-native-easy-grid';
import {FontAwesome} from '@expo/vector-icons';
import {StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {brandColor} from "../../const/theme";

class HomePage extends Component {
    render() {
        console.log(this.props.logged_in);
        if (this.props.logged_in) this.props.navigation.navigate('Quiz');

        return (
            <Container style={styles.container}>
                <Grid>
                    <Row><Text>SaferSpace</Text></Row>
                    <Row><Text>Hi {this.props.first_name}</Text></Row>
                    <Row>
                        <Button iconLeft>
                            <FontAwesome name='search' />
                            <Text>Nearest Safe Space</Text>
                        </Button>
                    </Row>
                    <Row><Text>Next Meeting</Text></Row>
                    <Row><Text>{}</Text></Row>
                    <Row>
                        <Text>Did you take your pills today?</Text>
                        <Image></Image>
                        <Button icon>
                            <FontAwesome name='check' />
                            <Text>Yes</Text>
                        </Button>
                    </Row>
                    <Row>
                        <Button iconRight>
                            <FontAwesome name='' />
                            <Text>Book a Session</Text>
                        </Button>
                    </Row>
                    <Row>
                        <Button iconRight>
                            <FontAwesome name='' />
                            <Text>Find a Therapist</Text>
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
    activeTab: {
        backgroundColor: brandColor
    },

})

const mapStateToProps = state => ({
    first_name: state.auth.first_name
});
export default connect(mapStateToProps)(HomePage);
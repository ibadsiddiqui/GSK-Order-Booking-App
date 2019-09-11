import React from 'react';
import { Dimensions, Image, Text, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Colors from '../../constants/Colors';
import { mapDispatchToProps, mapStateToProps } from '../../redux/dispatcher';
const { width, height } = Dimensions.get('window')
class LoginScreen extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    goToBookerDashboard = () => {
        this.props.changeUser("BOOKER");
        this.props.navigation.navigate("BookerDashboard")
    }

    goToDistributorDashboard = () => {
        this.props.changeUser("DISTRIBUTOR");
        this.props.navigation.navigate("DistributorDashboard")
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.circleContainer}>
                    <Image source={require('./../../assets/images/gsk-logo.jpg')} style={{ width: width * 0.9, height: height * 0.21 }} />
                </View>
                <Text style={{ color: Colors.heading, fontSize: 22, textAlign: 'center', marginTop: 50 }}>Login As:</Text>
                <View style={styles.subContainer}>
                    <TouchableOpacity style={styles.btn} onPress={this.goToDistributorDashboard}>
                        <View style={styles.btnContainer}>
                            <Text style={styles.btnText}>DISTRIBUTOR</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={this.goToBookerDashboard}>
                        <View style={styles.btnContainer}>
                            <Text style={styles.btnText}>BOOKER</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    circleContainer: {
        elevation: 10,
        // width: width * 0.6,
        // height: width * 0.6,
        paddingHorizontal: 20,
        alignSelf: 'center',
        // alignItems: 'center',
        justifyContent: 'center',
        // borderRadius: width * 0.3, backgroundColor: Colors.black,
    },
    heading: {
        fontSize: 22,
        color: Colors.white,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    subContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: { elevation: 10, padding: 10 },
    btnContainer: {
        width: width * 0.8,
        marginTop: 10,
        justifyContent: 'center',
        height: height * 0.1,
        borderWidth: 1,
        borderColor: 'transparent',
        backgroundColor: Colors.primaryBtn,
        borderRadius: 10
    },
    btnText: {
        textAlign: 'center',
        color: Colors.white,
        justifyContent: 'center',
        fontSize: 17,
        // fontWeight: '700'
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

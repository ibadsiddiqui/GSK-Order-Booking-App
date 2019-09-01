import React from 'react';
import { View, Dimensions, Text } from "react-native"
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../redux/dispatcher';
import Colors from '../../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
                    <Text style={styles.heading}>GSK</Text>
                    <Text style={styles.heading}>LOGIN:</Text>
                </View>
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
        width: width * 0.6,
        height: height * 0.3,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: width * 0.3, backgroundColor: Colors.black,
    },
    heading: {
        fontSize: 22,
        color: Colors.white,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    subContainer: {
        marginTop: 50,
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
        backgroundColor: Colors.black,
        borderRadius: 10
    },
    btnText: {
        textAlign: 'center',
        color: Colors.white,
        justifyContent: 'center',
        fontSize: 17
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

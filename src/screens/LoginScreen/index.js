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

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{
                    elevation: 10,
                    width: width * 0.6,
                    height: height * 0.3,
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: width * 0.3, backgroundColor: Colors.black,
                }}>
                    <Text style={{ fontSize: 22, color: Colors.white, textAlign: 'center', textAlignVertical: 'center' }}>GSK</Text>
                    <Text style={{ fontSize: 22, color: Colors.white, textAlign: 'center', textAlignVertical: 'center' }}>LOGIN:</Text>
                </View>
                <View style={{
                    marginTop: 50, alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity style={{ elevation: 10, padding:10 }}>
                        <View style={{
                            width: width * 0.8,
                            marginTop: 10,
                            justifyContent: 'center',
                            height: height * 0.1,
                            borderWidth: 1,
                            borderColor: 'transparent',
                            backgroundColor: Colors.black,
                            borderRadius: 10
                        }}>
                            <Text style={{ textAlign: 'center', color: Colors.white, justifyContent: 'center', fontSize: 17 }}>DISTRIBUTOR</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ elevation: 10, padding:10 }}>
                        <View style={{
                            width: width * 0.8,
                            marginTop: 10,
                            justifyContent: 'center',
                            height: height * 0.1,
                            borderWidth: 1,
                            borderColor: 'transparent',
                            backgroundColor: Colors.black,
                            borderRadius: 10
                        }}>
                            <Text style={{ textAlign: 'center', color: Colors.white, justifyContent: 'center', fontSize: 17 }}>BOOKER</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

import { Entypo, Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { Marker } from "react-native-maps";
import { connect } from "react-redux";
import { getLocationPermission } from '../../constants/Permissions';
import { mapDispatchToProps, mapStateToProps } from "../../redux/dispatcher";
const { width } = Dimensions.get('window')

class MapViewScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor() {
        super();
        this.state = {
            mapView: false,
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            shopLocation: {
                latitude: 37.78825,
                longitude: -122.4324,
            }
        }
    }

    componentDidMount = async () => await this._getLocationAsync();

    _getLocationAsync = async () => {
        let status = await getLocationPermission();
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({
            region: {
                ...location.coords,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            shopLocation: {
                latitude: location.coords.latitude,
                longitude: location.coords.latitude,
            }
        });
    };

    toggleMapView = (status) => this.setState({ mapView: status })

    render() {
        if (!this.state.mapView)
            return (
                <View style={{ flex: 1 }}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}>Select Location</Text>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <TouchableOpacity style={styles.btn}>
                            <View style={{ paddingHorizontal: 7.5 }}>
                                <Feather name="home" size={20} />
                            </View>
                            <View style={{ paddingTop: 1 }}>
                                <Text>Pick Current Location</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 10, alignSelf: 'center', }}>
                        <TouchableOpacity onPress={() => this.toggleMapView(true)}
                            style={styles.btn}
                        >
                            <View style={{ paddingHorizontal: 7.5 }}>
                                <Entypo name="location-pin" size={20} />
                            </View>
                            <View style={{ paddingTop: 1 }}>
                                <Text>Pick From Map</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View >
            );
        else return (
            <MapView style={{ flex: 1, ...StyleSheet.absoluteFillObject }}>

                <Marker
                    coordinate={this.state.shopLocation}
                    onSelect={e => console.log('onSelect', e)}
                    onDrag={e => console.log('onDrag', e)}
                    onDragStart={e => console.log('onDragStart', e)}
                    onDragEnd={e => console.log('onDragEnd', e)}
                    onPress={e => console.log('onPress', e)}
                    draggable
                />
            </MapView>
        )
    }
}

const styles = {
    headingContainer: {
        padding: 20,
        marginTop: width * .5
    },
    heading: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    btn: {
        borderWidth: 1,
        width: width * 0.7,
        paddingVertical: 5,
        flexDirection: 'row',
        borderRadius: 10,
        justifyContent: 'center',
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapViewScreen);
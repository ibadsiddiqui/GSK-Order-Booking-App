import { Entypo, Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { Marker } from "react-native-maps";
import { connect } from "react-redux";
import { getLocationPermission, checkLocationService, requestLocationService } from '../../constants/Permissions';
import { mapDispatchToProps, mapStateToProps } from "../../redux/dispatcher";
import Colors from './../../constants/Colors';
const { width } = Dimensions.get('window')

const LATITUDEDELTA = 0.0922;
const LONGITUDEDELTA = 0.0421

class MapViewScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    // map = null;
    constructor() {
        super();
        this.state = {
            mapView: true,
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: LATITUDEDELTA,
                longitudeDelta: LONGITUDEDELTA,
            },
        }
    }

    componentDidMount = async () => await this._getLocationAsync();

    _getLocationAsync = async () => {
        let status = await getLocationPermission();
        let serviceStatus = await checkLocationService()
        let location;
        if (serviceStatus) {
            location = await Location.getCurrentPositionAsync({});
        } else {
            const status = await requestLocationService();
            if (status === "granted" || status) {
                location = await Location.getCurrentPositionAsync({});
            } else {
                this.setState({
                    mapView: false,
                });
                return;
            }
        }
        if (status !== 'granted')
            this.setState({
                mapView: false,
            });
        this.setState({
            region: {
                ...location.coords,
                latitudeDelta: LATITUDEDELTA,
                longitudeDelta: LONGITUDEDELTA,
            },
        });
        this.map.animateToRegion({ latitude: this.state.region.latitude, longitude: this.state.region.longitude })
    };

    setShopLocation = (e) => this.setState({
        region: {
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
            latitudeDelta: LATITUDEDELTA,
            longitudeDelta: LONGITUDEDELTA,
        }
    })

    toggleMapView = (status) => this.setState({ mapView: status })

    addLocation = async () => {
        const { latitude, longitude } = this.state.region;
        let address = await Location.reverseGeocodeAsync({ latitude, longitude });
        console.log({
            ...address,
            ...this.state.region
        });
        return
    }

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
            <View style={{ flex: 1, ...StyleSheet.absoluteFill }}>
                <MapView style={{ flex: 1, ...StyleSheet.absoluteFillObject }}
                    ref={ref => this.map = ref}
                >
                    <Marker draggable
                        coordinate={this.state.region}
                        // onSelect={this.setShopLocation}
                        // onDragStart={this.setShopLocation}
                        onDragEnd={this.setShopLocation}
                    // onPress={this.setShopLocation}
                    // onDrag={this.setShopLocation}
                    />
                </MapView>
                <View style={{ position: 'absolute', bottom: 20, alignSelf: 'center' }}>
                    <TouchableOpacity onPress={this.addLocation}>
                        <View style={{
                            justifyContent: 'center',
                            alignSelf: 'center',
                            height: 50,
                            width: 130,
                            backgroundColor: Colors.noticeBackground,
                            borderRadius: 25
                        }}>
                            <Text style={{ fontSize: 16, color: Colors.white, textAlign: 'center' }}>Select Location</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
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
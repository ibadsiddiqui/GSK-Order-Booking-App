import { Entypo } from '@expo/vector-icons';
import * as Location from 'expo-location';
import _ from 'lodash';
import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView from "react-native-maps";
import { connect } from "react-redux";
import { checkLocationService, getLocationPermission, requestLocationService } from '../../constants/Permissions';
import { mapDispatchToProps, mapStateToProps } from "../../redux/dispatcher";
import Colors from './../../constants/Colors';
const { width } = Dimensions.get('window')
const LATITUDEDELTA = 0.0922;
const LONGITUDEDELTA = 0.0421
// var Polyline = require('@mapbox/polyline');

class MapViewScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    // map = null;
    constructor() {
        super();
        this.state = {
            loading: false,
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: LATITUDEDELTA,
                longitudeDelta: LONGITUDEDELTA,
            },
        }
    }

    async componentDidMount() {
        await this._getLocationAsync();
        // fetch directions and decode polylines
        // this.getDirections("24.863633780273133,67.07325367256999", `${this.state.region.latitude},${this.state.region.longitude}`)
    }

    // async getDirections(startLoc, destinationLoc) {
    //     try {
    //         let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=AIzaSyDgVapRiIw_sh1zoxcouyP_Fvlbqk35H5Q`)
    //         // https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=YOUR_API_KEY
    //         let respJson = await resp.json();
    //         console.log('====================================');
    //         console.log(respJson);
    //         console.log('====================================');
    //         let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
    //         let coords = points.map((point, index) => {
    //             return {
    //                 latitude: point[0],
    //                 longitude: point[1]
    //             }
    //         })
    //         this.setState({ coords: coords })
    //         return coords
    //     } catch (error) {
    //         alert(error)
    //         return error
    //     }
    // }


    _getLocationAsync = async () => {
        let locPerm = await getLocationPermission();
        let serviceStatus = await checkLocationService()
        let location;
        if (serviceStatus && locPerm) {
            location = await Location.getCurrentPositionAsync({});
            this._onRegionChange(location.coords)
            this.map.setCamera({ center: { ...this.state.region }, zoom: 17.5 })
        } else {
             await getLocationPermission();
            const status = await requestLocationService();
            if (status === "granted" || status) {
                location = await Location.getCurrentPositionAsync({});
                this._onRegionChange(location.coords)
                this.map.setCamera({ center: { ...this.state.region }, zoom: 17.5 })
            } else return;
        }

    };

    _onRegionChange = (region) => this.setState({
        region: {
            ...region,
            latitudeDelta: LATITUDEDELTA,
            longitudeDelta: LONGITUDEDELTA,
        }
    })

    _toggleLoader = () => this.setState({ loading: true })

    addLocation = async () => {
        this._toggleLoader();
        const { latitude, longitude } = this.state.region;
        let address = await Location.reverseGeocodeAsync({ latitude, longitude });
        this.props.addOrderGeoLocation({ ...address['0'], ...this.state.region })
        return this.props.navigation.navigate('AddNewOrder');
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, ...StyleSheet.absoluteFill }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <ActivityIndicator size="large" color={Colors.primary} />
                        <Text style={{ fontSize: 14, }}>Please wait while location being is added</Text>
                    </View>
                </View>
            );
        }
        else return (
            <View style={{ flex: 1, ...StyleSheet.absoluteFill }}>

                <MapView style={{ flex: 1, ...StyleSheet.absoluteFillObject }}
                    ref={ref => this.map = ref}
                    initialRegion={_.isEmpty(this.props.orderGeoLocation) ? this.state.region : this.props.orderGeoLocation}
                    onRegionChangeComplete={this._onRegionChange}
                />
                <View style={styles.markerFixed}>
                    <Entypo name="location-pin" size={50} color={Colors.primary} />
                </View>
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
    },
    markerFixed: {
        left: '50%',
        marginLeft: -24,
        marginTop: -48,
        position: 'absolute',
        top: '50%'
    },
}

export default connect(mapStateToProps, mapDispatchToProps)(MapViewScreen);
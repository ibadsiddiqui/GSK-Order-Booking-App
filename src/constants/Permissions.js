import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

export async function takeCameraPermissionAsync() {
    const { status: cameraPerm } = await Permissions.askAsync(
        Permissions.CAMERA
    );
    return cameraPerm;
}

export async function takeCameraRollPermissionAsync() {
    const { status: cameraRollPerm } = await Permissions.askAsync(
        Permissions.CAMERA_ROLL
    );
    return cameraRollPerm;
}

export async function getLocationPermission() {
    const { status: locationPerm } = await Permissions.askAsync(Permissions.LOCATION);
    return locationPerm;
}

export async function checkLocationService() {
    return await Location.hasServicesEnabledAsync()
}

export async function requestLocationService() {
    return await Location.requestPermissionsAsync()
}

import * as Permissions from 'expo-permissions';

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
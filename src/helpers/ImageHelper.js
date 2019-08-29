// import { ImagePicker,  } from "expo";
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { Platform } from 'react-native';
import { takeCameraPermissionAsync, takeCameraRollPermissionAsync } from "../constants/Permissions";

export async function UploadImage(key) {
    const cameraPerm = await takeCameraPermissionAsync()
    const cameraRollPerm = await takeCameraRollPermissionAsync();
    let result;
    if (cameraPerm === "granted" && cameraRollPerm === "granted") {
        switch (key) {
            case "takephoto":
                result = await _openCamera(Platform.OS);
                if (Platform.OS === "android")
                    if (typeof result.uri === "string")
                        await MediaLibrary.createAssetAsync(result.uri);
                    else return { cancelled: true }
                break;
            case "uploadphoto":
                result = await _openMediaLibrary()
                break;
            default:
                break;
        }
        return result;
    } else return { cancelled: true }
}


async function _openCamera(OS) {
    switch (OS) {
        case "android":
            return await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                base64: true,
                exif: true
            });
        default:
            const result = await ImagePicker.launchCameraAsync({
                base64: true,
                exif: true
            });
            await MediaLibrary.createAssetAsync(result.uri);
            return await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                mediaTypes: "Images",
                base64: true,
                exif: true,
            });
    }
}

async function _openMediaLibrary() {
    return await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: "Images",
        base64: true,
        exif: true,
    });
}
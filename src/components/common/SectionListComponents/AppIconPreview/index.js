import React from 'react';
import { Image } from 'react-native';

const AppIconPreview = () => {
    return <Image source={require('./../../../../assets/images/robot-prod.png')} style={{ width: 64, height: 64 }} resizeMode="cover" />;
};
export default AppIconPreview
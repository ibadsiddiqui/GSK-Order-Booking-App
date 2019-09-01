import React from 'react';
import { Image } from 'react-native';

const AppIconPreview = (shop) => {
    if (shop)
        return <Image source={require("./../../../../assets/images/shop.jpg")} style={{ width: 64, height: 64 }} resizeMode="cover" />
    else return <Image source={require('./../../../../assets/images/robot-prod.png')} style={{ width: 64, height: 64 }} resizeMode="cover" />;
};
export default AppIconPreview
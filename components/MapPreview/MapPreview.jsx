import { View, Image } from 'react-native'
import React from 'react'
import StyleSheet from './mapPreviewStyles'

const MapPreview = ({location}) => {
    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmapmarkers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318markers=color:red%7Clabel:C%7C40.718217,-73.998284key=AIzaSyA_HFlCYNWdEiPQnT7fmaN2Fs8vhwbwPLs&signature=YOUR_SIGNATURE`
    
    return (
        <View style ={StyleSheet.mapPreview}>
            <Image style = {StyleSheet.mapImage} source={{ uri: mapPreviewUrl}}/>
        </View>
    )
}

export default MapPreview
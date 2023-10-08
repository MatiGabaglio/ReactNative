import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './LocationStyles'
import { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import MapPreview from "../../../components/MapPreview/MapPreview"


const LocationComp = () => {
    const [location, setLocation] = useState(Latitude = "", Longitude = "" )
    const [error, setError] = useState("")

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setError('Permission to access location was denied')
                return
            }
            let location = await Location.getCurrentPositionAsync({})
            setLocation({
                Latitude: location?.coords.latitude,
                Longitude: location?.coords.longitude
            })
        })()
    }, [])

    return (
        <View style={styles.container}>
        <Text>Location</Text>
        {Location ? 
            <View>
                <View style={styles.withLocation}>
                    <Text>Latitude: {location.Latitude}</Text>
                    <Text>Longitude: {location.Longitude}</Text>
                </View> 
                <View>
                <MapPreview location={location}/>
                </View>
            </View> 
        : 
            <View style={styles.withOutLocation}>
                <Text>
                    {error}
                </Text>
            </View>
        }
        </View>
    )
}

export default LocationComp
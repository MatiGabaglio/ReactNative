import React from 'react'
import AuthStackNavigation from './AuthStackNavigation'
import BottomTabNavigator from './BottomTabNavigation' 
import { useSelector } from 'react-redux'

const MainNavigation = () => {
    const user = useSelector(state => state.auth.user)
    
    return user ? <BottomTabNavigator /> : <AuthStackNavigation />
}

export default MainNavigation 
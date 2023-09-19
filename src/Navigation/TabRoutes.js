import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import color from '../styles/color';
import { Image, StyleSheet } from 'react-native';
import * as Screens from '../Screen';

import imagePath from '../constants/imagePath';

import NavigationString from './NavigationString';

const BottomTab = createBottomTabNavigator();

const TabRoutes = (props) => {
    return (
        <BottomTab.Navigator
            tabBar={(tabsProps) => (
                <>
                    <BottomTabBar {...tabsProps} />
                </>
            )}
            initialRouteName={NavigationString.HOME_SCREEN}

            screenOptions={{
                headerShown: false,
                style: styles.customBottomtabsStyle,
                tabBarActiveTintColor: color.black,
                tabBarShowLabel:false,
                tabBarStyle:{backgroundColor:color.theme}
                
            }}

        >
            <BottomTab.Screen
          
                name={NavigationString.HOME_SCREEN}
                component={Screens.HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                          
                                <Image source={imagePath.homeIcon}  style={[styles.icon,{tintColor:focused? "red":"grey"}]}/>
                                
                        );
                    },
                    tabBarStyle:{
                      tabBarActiveTintColor:'grey'
                    }
                }}
            />
            <BottomTab.Screen
                name={NavigationString.SERACH}
                component={Screens.Search}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                        
                                <Image source={imagePath.searchIcon}  style={[styles.icon,{tintColor:focused? "red":"grey"}]}/>
                               
                        );
                    },
                    tabBarStyle:{
                       
                    }
                }}
            />
            <BottomTab.Screen
                name={NavigationString.CREATE_POST}
                component={Screens.CreatePost}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                                <Image source={imagePath.createIcon}style={[styles.icon,{tintColor:focused? "red":"grey"}]} />
                                
                        );
                    },
                    tabBarStyle:{
                       
                    }
                }}
            />
            <BottomTab.Screen
                name={NavigationString.NOTIFICATION}
                component={Screens.Notification}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                           
                                <Image source={imagePath.notificationIcon} style={[styles.icon,{tintColor:focused? "red":"grey"}]} />
                                
                        );
                    },
                    tabBarStyle:{
                       
                    }
                }}
            />
            <BottomTab.Screen
                name={NavigationString.PROFILE}
                component={Screens.profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                  
                                <Image source={imagePath.profileIcon}style={[styles.icon,{tintColor:focused? "red":"grey"}]} />
                               
                        );
                    },
                    tabBarStyle:{
                       
                    }
                }}
            />

        </BottomTab.Navigator>
    );
};

const styles = StyleSheet.create({
    customBottomtabsStyle: {
        
    },
    icon:{
        width:30,
        height:30,
      
        
        
    }

});

export default TabRoutes
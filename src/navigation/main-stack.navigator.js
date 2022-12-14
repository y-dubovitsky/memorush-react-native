import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Icon } from 'react-native-elements';
import ImgBackgroundComponent from '../common/components/img-background/img-background.component';
import CardSetDetailsScreen from '../screens/card-set-details/card-set-details.screen';
import CardSetEditScreen from '../screens/card-set-edit/card-set-edit.screen';
import CardSetInfoScreen from '../screens/card-set-info/card-set-info.screen';
import CardSetListScreen from '../screens/card-set-list/card-set-list.screen';
import LearnCardSetScreen from '../screens/learn-card-set/learn-card-set.screen';
import RegistrationScreen from '../screens/registration/registration.screen';
import SettingsScreen from '../screens/settings/settings.screen';
import SignInScreen from '../screens/sign-in/sign-in.screen';
import StartLoaderScreen from '../screens/start-loader/start-loader.screen';
import AccountScreen from '../screens/account/account.screen';
import PopupWrapperHOC from '../hoc/popup-wrapper.hoc';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackNavigator = () => (
  <ImgBackgroundComponent>
    <NavigationContainer>
      <PopupWrapperHOC>
        <Stack.Navigator initialRouteName="StartLoaderScreen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="StartLoaderScreen" component={StartLoaderScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
          <Stack.Screen name="CardSetEditScreen" component={CardSetEditScreen} />
          {/* //! Inner navigation below*/}
          <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
          <Stack.Screen name="CardSetDetailsTabNavigation" component={CardSetDetailsTabNavigation} />
        </Stack.Navigator>
      </PopupWrapperHOC>
    </NavigationContainer>
  </ImgBackgroundComponent>
);

const MainTabNavigation = () => (
  <Tab.Navigator
    screenOptions={{ headerShown: false }}
  >
    <Tab.Screen
      name="Cards"
      component={CardSetListScreen}
      options={{
        tabBarIcon: () => (
          <Icon
            name='style'
            type='material'
            color='silver'
            size={30}
          />
        )
      }} />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: () => (
          <Icon
            name='person'
            type='material'
            color='silver'
            size={30}
          />
        )
      }}
    />
    <Tab.Screen
      name="Info"
      component={SettingsScreen}
      options={{
        tabBarIcon: () => (
          <Icon
            name='info'
            type='material'
            color='silver'
            size={30}
          />
        )
      }}
    />
  </Tab.Navigator>
)


const CardSetDetailsTabNavigation = (args) => {

  //TODO ?????????????????? ?????? ??????????!
  const { cardSetId, cardSetName } = args.route.params;

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name={cardSetName}
        component={CardSetDetailsScreen}
        initialParams={{ cardSetId }}
        options={{
          tabBarIcon: () => (
            //TODO ???????????? ????????????????!
            <Icon
              name='book-outline'
              type='ionicon'
              color='silver'
              size={30}
            />
          )
        }} />
      <Tab.Screen
        name="Learn"
        component={LearnCardSetScreen}
        initialParams={{ cardSetId }}
        options={{
          tabBarIcon: () => (
            <Icon
              name='school'
              type='material'
              color='silver'
              size={30}
            />
          )
        }}
      />
      <Tab.Screen
        name="Edit"
        component={CardSetEditScreen}
        initialParams={{ cardSetId }}
        options={{
          tabBarIcon: () => (
            <Icon
              name='create-outline'
              type='ionicon'
              color='silver'
              size={30}
            />
          )
        }}
      />
      <Tab.Screen
        name="Info"
        component={CardSetInfoScreen}
        initialParams={{ cardSetId }}
        options={{
          tabBarIcon: () => (
            <Icon
              name='information-circle-outline'
              type='ionicon'
              color='silver'
              size={30}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default MainStackNavigator;
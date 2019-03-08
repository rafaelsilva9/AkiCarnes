import React from "react";
import { Button, View, Text } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import LogoTitle from './src/shared/LogoTitle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Chart from './Chart';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };

  render() {
    return <Chart />
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `md-menu`;
  } else if (routeName === 'Details') {
    iconName = `md-options${focused ? '' : '-outline'}`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const BottomNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: '#fafefa',
      inactiveTintColor: '#524c4c',
      style: {
        backgroundColor: '#e83337',
      },
    },
  }
);

const AppContainer = createAppContainer(BottomNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
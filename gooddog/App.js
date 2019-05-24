import React from 'react';
import { View, Image, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class OpenScreen extends React.Component {
  static navigationOptions = {
    header:null
  };
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.openTop}>
          <Image
            source={{ uri: 'https://i.ibb.co/gTCsm78/title.png' }}
            style={{ height: 107, width: 305.4 }}
          ></Image>
        </View>
        <View style = {styles.openBottom}>
          <TouchableOpacity style = {styles.getStarted}
            onPress={() => this.props.navigation.navigate('Daily')}>
            <Image
              source={{ uri: 'https://i.ibb.co/7XjSBM2/buttontext.png' }}
              style={{ height: 27.1, width: 187 }}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
    header:null
  };
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.content}>
          <Text>Profile</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.profileF}>
            <TouchableOpacity
              style = {styles.navButton}
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Image
                source={{ uri: 'https://i.ibb.co/C0j9FxB/dog.png' }}
                style={{ height: 50, width: 50 }}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.dailyF}>
            <TouchableOpacity
              style = {styles.navButton}
              onPress={() => this.props.navigation.navigate('Daily')}>
                <Image
                  source={{ uri: 'https://i.ibb.co/kJrw0zq/paw.png' }}
                  style={{ height: 50, width: 50 }}
                ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.habitsF}>
            <TouchableOpacity
              style = {styles.navButton}
              onPress={() => this.props.navigation.navigate('Habits')}>
              <Image
                source={{ uri: 'https://i.ibb.co/42rHYYH/habits.png' }}
                style={{ height: 50, width: 50 }}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

class DailyScreen extends React.Component {
  static navigationOptions = {
    header:null
  };
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.content}>
          <Text>Daily</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.profileF}>
            <TouchableOpacity
              style = {styles.navButton}
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Image
                source={{ uri: 'https://i.ibb.co/4YhStXj/profile.png' }}
                style={{ height: 50, width: 50 }}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.dailyF}>
            <TouchableOpacity
              style = {styles.navButton}
              onPress={() => this.props.navigation.navigate('Daily')}>
                <Image
                  source={{ uri: 'https://i.ibb.co/0mjBFN8/pawprint.png' }}
                  style={{ height: 50, width: 50 }}
                ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.habitsF}>
            <TouchableOpacity
              style = {styles.navButton}
              onPress={() => this.props.navigation.navigate('Habits')}>
              <Image
                source={{ uri: 'https://i.ibb.co/42rHYYH/habits.png' }}
                style={{ height: 50, width: 50 }}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

class HabitsScreen extends React.Component {
  static navigationOptions = {
    header:null
  };
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.content}>
          <Text>Habits</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.profileF}>
            <TouchableOpacity
              style = {styles.navButton}
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Image
                source={{ uri: 'https://i.ibb.co/4YhStXj/profile.png' }}
                style={{ height: 50, width: 50 }}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.dailyF}>
            <TouchableOpacity
              style = {styles.navButton}
              onPress={() => this.props.navigation.navigate('Daily')}>
                <Image
                  source={{ uri: 'https://i.ibb.co/kJrw0zq/paw.png' }}
                  style={{ height: 50, width: 50 }}
                ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.habitsF}>
            <TouchableOpacity
              style = {styles.navButton}
              onPress={() => this.props.navigation.navigate('Habits')}>
              <Image
                source={{ uri: 'https://i.ibb.co/MnSqhtr/health-report.png' }}
                style={{ height: 50, width: 50 }}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Profile: ProfileScreen,
    Daily: DailyScreen,
    Open: OpenScreen,
    Habits: HabitsScreen,
  },
  {
    initialRouteName: "Open"
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    openTop: {
      flex: 2,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: 'white'
    },
    openBottom: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#75b9be'
    },
    getStarted: {
      backgroundColor: 'white',
      borderColor: 'white',
      borderWidth: 30,
      borderRadius: 16
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#DDDDDD'
    },
    content: {
        flex: 9,
        justifyContent: "center",
        alignItems: 'center',
    },
    profileF: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    dailyF: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    habitsF: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

});

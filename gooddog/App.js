import React from 'react';
import { View, TouchableHighlight, Image, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class App extends React.Component {
  render() {
    return (<AppContainer />);
  }
}

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
  state = {
         name: "Chum",
         breed: "Labrador Retriever",
         gender: "male",
         birth: "11/11/2018",
         vax: ["link1", "link2", "link3"],
  }
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.content}>
          <Text>​​​</Text>
          <Text>​​​</Text>
          <View style = {styles.profHeader}>
            <Text>   </Text>
            <Image
              source = {{uri: 'https://i.ibb.co/7Xm4kkp/pitbull.png'}}
              style = {{height: 100, width: 100}}
            ></Image>
            <Text>       </Text>
            <View style = {styles.profHeadText}>
              <Text>​​​</Text>
              <Text>​​​</Text>
              <Text style = {styles.profHeadTextBox}>Name: {this.state.name}</Text>
              <Text style = {styles.profHeadTextBox}>Breed: {this.state.breed}</Text>
            </View>
            <Text>   </Text>
          </View>
          <Text style = {styles.profHeadTextBox}>​​​</Text>
          <Text style = {styles.profHeadTextBox}>​​​</Text>
          <View style = {styles.profContent}>
            <Text style = {styles.profDescTextBox}>Gender: {this.state.gender}</Text>
            <Text style = {styles.profHeadTextBox}>​​​</Text>
            <Text style = {styles.profDescTextBox}>Birthday: {this.state.birth}</Text>
            <Text style = {styles.profHeadTextBox}>​​​</Text>
            <Text style = {styles.profDescTextBox}>Vaccinations:</Text>
            <Text style = {styles.profVaxTextBox}>  view file 1</Text>
            <Text style = {styles.profVaxTextBox}>  view file 2</Text>
          </View>
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
          <Text>in progress</Text>
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
  state = {
         walk: ["6:00am", "8:00pm"],
         food: ["7:00am", "1:00pm", "7:00pm"],
         medicine: ["7:00am"],
         walks: ["9:00am", "4:00pm"],
         playtime: ["5:00pm"],
         water: ["7:00am", "11:00am", "3:00pm", "7:00pm"],
  }
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.content}>
          <Text>WALK {this.state.walk.length} times: {this.state.walk}</Text>
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
        flexDirection: 'column'
    },
    profHeader: {
      flex: 2,
      flexDirection: 'row',
      backgroundColor: '#badcdf'
    },
    profContent: {
      flex: 9,
      flexDirection: 'column',
    },
    profHeadText: {
      flexDirection: 'column',
    },
    profHeadTextBox: {
      fontSize: 23,
    },
    profDescTextBox: {
      fontSize: 21,
    },
    profVaxTextBox: {
      fontSize: 21,
      color: '#6fb6bb'
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

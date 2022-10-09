import * as React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Button from './Button';
import 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import art from './assets/art.png';
import mile from './assets/mile.png';
import pier from './assets/pier.png';
import water from './assets/water.png';
import willis from './assets/willis.png';

const artUrl = 'https://www.artic.edu/';
const mileUrl = 'https://www.themagnificentmile.com/';
const pierUrl = 'https://navypier.org/';
const waterUrl = 'https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html';
const willisUrl = 'https://www.willistower.com/';

function handleButtonPress (url) {
  WebBrowser.openBrowserAsync(url);
}

function ArtInstituteOfChicago() {
  return (
    <View style={styles.container}>
      <Image source={art} style={styles.image} />

      <Button info style={styles.button}
        onPress={()=> handleButtonPress(artUrl)}>
        More Information
      </Button>
      
    </View>
  );
}

function MagnificentMile() {
  return (
    <View style={styles.container}>
      <Image source={mile} style={styles.image} />

      <Button info style={styles.button}
        onPress={()=> handleButtonPress(mileUrl)}>
        More Information
      </Button>
    </View>
  );
}

function NavyPier() {
  return (
    <View style={styles.container}>
      <Image source={pier} style={styles.image} />

      <Button info style={styles.button}
        onPress={()=> handleButtonPress(pierUrl)}>
        More Information
      </Button>
    </View>
  );
}

function WaterTower() {
  return (
    <View style={styles.container}>
      <Image source={water} style={styles.image} />
      
      <Button info style={styles.button}
        onPress={()=> handleButtonPress(waterUrl)}>
        More Information
      </Button>
    </View>
  );
}

function WillisTower() {
  return (
    <View style={styles.container}>
      <Image source={willis} style={styles.image} />
      
      <Button info style={styles.button}
        onPress={()=> handleButtonPress(willisUrl)}>
        More Information
      </Button>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Art Institute of Chicago" component={ArtInstituteOfChicago} />
      <Drawer.Screen name="Magnificent Mile" component={MagnificentMile} />
      <Drawer.Screen name="Navy Pier" component={NavyPier} />
      <Drawer.Screen name="Water Tower" component={WaterTower} />
      <Drawer.Screen name="Willis Tower" component={WillisTower} />

    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 240  , 
    height: 360
  },
  button:{
    margin: 20,
  },

});
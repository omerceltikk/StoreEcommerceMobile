import React from 'react';
import { Text, View } from 'react-native';
import { Drawer } from 'react-native-paper';
// import DrawerContent from './DrawerContent';

const CustomDrawer = ({ isDrawerOpen, toggleDrawer }) => {
  return (
    <View style={{ flex: 1 }}>
    <Drawer.Section>
        {/* Drawer içeriği */}
        <Text>sdasd</Text>
      </Drawer.Section>
      
    </View>
  );
};

export default CustomDrawer;

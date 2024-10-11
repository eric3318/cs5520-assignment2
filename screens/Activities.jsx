import { View, Text } from 'react-native';
import ItemList from '../components/ItemList';
import { useData } from '../hook/useData';
import { useEffect } from 'react';
import PressableButton from '../components/PressableButton';

export default function Activities({ navigation, route }) {
  const toAddScreen = () => {
    navigation.push('New Activity');
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <PressableButton pressedFunction={toAddScreen}>
          <Text>Add</Text>
        </PressableButton>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <ItemList itemType="activity" />
    </View>
  );
}

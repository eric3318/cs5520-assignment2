import { Text, View } from 'react-native';
import ItemList from '../components/ItemList';
import { useEffect } from 'react';
import PressableButton from '../components/PressableButton';

export default function Diet({ navigation, route }) {
  const toAddScreen = () => {
    navigation.push('New Diet');
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
      <ItemList itemType="diet" />
    </View>
  );
}

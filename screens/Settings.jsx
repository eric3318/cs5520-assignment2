import { StyleSheet, View, Text } from 'react-native';
import PressableButton from '../components/PressableButton';
import { useTheme } from '../hook/useTheme';
import { useEffect } from 'react';

export default function Settings() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      return;
    }
    setTheme('light');
  };

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <View style={styles.container}>
      <PressableButton pressedFunction={toggleTheme}>
        <Text>Toggle Theme</Text>
      </PressableButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../hook/useTheme';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ItemCard({ item, itemType }) {
  const [theme] = useTheme();

  const isSpecial =
    (itemType === 'activity' &&
      item.type === ('Running' || 'Weights') &&
      item.duration > 60) ||
    (itemType === 'diet' && item.calories > 800);

  return (
    <View style={[styles.container, { backgroundColor: theme.color }]}>
      <Text style={[styles.box, { color: theme.textColor }]}>
        {itemType === 'activity' ? item.type : item.description}
      </Text>
      {isSpecial && <Ionicons name="warning" size={28} color="gold" />}
      <Text style={[styles.box, styles.boxWithBg, { color: theme.textColor }]}>
        {item.date}
      </Text>
      <Text style={[styles.box, styles.boxWithBg, { color: theme.textColor }]}>
        {itemType === 'activity' ? item.duration : item.calories}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
    padding: 12,
    borderRadius: 6,
  },
  box: {
    flexGrow: 1,
    paddingVertical: 10,
  },
  boxWithBg: {
    backgroundColor: 'white',
    textAlign: 'center',
  },
});

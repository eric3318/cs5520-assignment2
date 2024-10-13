import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '../hook/useTheme';

export default function ItemCard({ item, itemType }) {
  const [theme] = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.color }]}>
      <Text style={[styles.box, { color: theme.textColor }]}>
        {itemType === 'activity' ? item.type : item.description}
      </Text>
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
    columnGap: 6,
    padding: 12,
    borderRadius: 6,
  },
  box: {
    flexGrow: 1,
    flexBasis: 0,
    paddingVertical: 10,
  },
  boxWithBg: {
    backgroundColor: 'white',
    textAlign: 'center',
  },
});

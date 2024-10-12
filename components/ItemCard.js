import { StyleSheet, View, Text } from 'react-native';

export default function ItemCard({ item, itemType }) {
  return (
    <View style={styles.container}>
      <Text style={styles.box}>
        {itemType === 'activity' ? item.type : item.description}
      </Text>
      <Text style={[styles.box, styles.boxWithBg]}>{item.date}</Text>
      <Text style={[styles.box, styles.boxWithBg]}>
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
    backgroundColor: 'purple',
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

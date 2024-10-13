import { FlatList, StyleSheet } from 'react-native';
import ItemCard from './ItemCard';
import { useData } from '../hook/useData';
import { useTheme } from '../hook/useTheme';

export default function ItemList({ itemType }) {
  const [data] = useData();

  return (
    <FlatList
      data={itemType === 'activity' ? data.activities : data.diet}
      renderItem={({ item }) => <ItemCard item={item} itemType={itemType} />}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    rowGap: 16,
  },
});

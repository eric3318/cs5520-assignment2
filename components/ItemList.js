import { FlatList, StyleSheet } from 'react-native';
import ItemCard from './ItemCard';
import { useData } from '../hook/useData';

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

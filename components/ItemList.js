import { FlatList, View, Text } from 'react-native';
import ItemCard from './ItemCard';

export default function ItemList({ items }) {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <ItemCard item={item} />}
    />
  );
}

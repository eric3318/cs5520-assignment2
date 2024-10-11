import { FlatList, View, Text } from 'react-native';
import ItemCard from './ItemCard';
import { useState } from 'react';
import { useData } from '../hook/useData';

export default function ItemList({ itemType }) {
  const [data] = useData();

  return (
    <FlatList
      data={itemType === 'activity' ? data.activities : data.diet}
      renderItem={({ item }) => <ItemCard item={item} />}
    />
  );
}

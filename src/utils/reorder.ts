function reorder(list: [], oldIndex: number, newIndex: number) {
  const result = Array.from(list);
  const item = result.splice(oldIndex, 1);

  result.splice(newIndex, 0, item[0]);
  return result;
}

export default reorder;
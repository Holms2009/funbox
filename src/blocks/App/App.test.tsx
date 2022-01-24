import { reorder } from "./App";

test('reorders an item in an array', () => {
  const oldIndex = 1;
  const newIndex = 4;
  const testArray = [
    {name: 'One', point: [1, 2]},
    {name: 'Two', point: [1, 2]},
    {name: 'Three', point: [1, 2]},
    {name: 'Four', point: [1, 2]},
    {name: 'Five', point: [1, 2]}
  ];
  const expectedArray = [
    {name: 'One', point: [1, 2]},
    {name: 'Three', point: [1, 2]},
    {name: 'Four', point: [1, 2]},
    {name: 'Five', point: [1, 2]},
    {name: 'Two', point: [1, 2]}
  ];

  for (let i = 0; i < expectedArray.length; i += 1) {
    expect(reorder(testArray, oldIndex, newIndex)[i]).toMatchObject(expectedArray[i]);
  }  
})
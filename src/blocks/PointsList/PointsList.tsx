import block from "bem-cn";
import { DragDropContext, Droppable, Draggable, OnDragEndResponder } from 'react-beautiful-dnd';

import './PointsList.scss';

const b = block('PointsList');

type Props = {
  pointsArr: pointParams[];
  itemRemoveHandler: (index: number) => void;
  dragEnd: OnDragEndResponder;
  theme: string;
}

function PointsList({ pointsArr, itemRemoveHandler, dragEnd, theme }: Props) {
  return (
    <DragDropContext onDragEnd={dragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            className={b({ hidden: !pointsArr.length, dark: theme === 'light', light: theme === 'dark' })}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {pointsArr.map((item, index) => (
              <Draggable key={index} draggableId={String(index)} index={index}>
                {(provided) => (
                  <div
                    className={b('item', {dark: theme === 'light', light: theme === 'dark'})}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <span>{index + 1 + '.'}</span>
                    {item.name}
                    <button
                      className={b('button', { dark: theme === 'light', light: theme === 'dark' })}
                      type='button'
                      onClick={() => itemRemoveHandler(index)}
                    ></button>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default PointsList;
import block from "bem-cn";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import './PointsList.scss';

import { pointParams } from "../App/App";

const b = block('PointsList');

type Props = {
  pointsArr: pointParams[];
  clickHandler: any;
  dragEnd: any;
}

function PointsList({ pointsArr, clickHandler, dragEnd }: Props) {
  return (
    <DragDropContext onDragEnd={dragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            className={b()}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {pointsArr.map((item, index) => (
              <Draggable key={item.name} draggableId={String(index)} index={index}>
                {(provided) => (
                  <div
                    className={b('item')}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <span>{index + 1 + '.'}</span>
                    {item.name}
                    <button className={b('button')} type='button' onClick={(evt) => clickHandler(index)}></button>
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
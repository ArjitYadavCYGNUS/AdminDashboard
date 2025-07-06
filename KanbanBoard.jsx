import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  useDroppable,
  useDraggable,
  DragOverlay,
} from "@dnd-kit/core";

const initialTasks = {
  todo: ["Task 1", "Task 2"],
  inprogress: ["Task 3"],
  done: ["Task 4"],
};

const Column = ({ id, children }) => {
  const { setNodeRef } = useDroppable({ id });
  return (
    <div ref={setNodeRef} className="w-full p-3 bg-gray-100 dark:bg-[#1e1e1e] rounded-md min-h-[150px]">
      <h2 className="font-bold capitalize text-lg mb-2">{id}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
};

const Task = ({ id }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id });
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="p-2 bg-white dark:bg-gray-800 rounded shadow cursor-grab"
    >
      {id}
    </div>
  );
};

export default function KanbanBoard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeId, setActiveId] = useState(null);

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const sourceColumn = Object.keys(tasks).find((col) =>
      tasks[col].includes(active.id)
    );
    const destColumn = over.id;

    if (sourceColumn === destColumn) return;

    const newSource = tasks[sourceColumn].filter((t) => t !== active.id);
    const newDest = [...tasks[destColumn], active.id];

    setTasks((prev) => ({
      ...prev,
      [sourceColumn]: newSource,
      [destColumn]: newDest,
    }));

    setActiveId(null);
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {Object.keys(tasks).map((columnId) => (
          <Column key={columnId} id={columnId}>
            {tasks[columnId].map((task) => (
              <Task key={task} id={task} />
            ))}
          </Column>
        ))}
      </div>

      <DragOverlay>
        {activeId ? (
          <div className="p-2 bg-blue-500 text-white rounded shadow">{activeId}</div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

import { ItemCollapse } from "./ItemCollapse";
import { ItemExpand } from "./ItemExpand";
import { ItemHead } from "./ItemHead";
import { ItemTitle } from "./ItemTitle";
import { TasksItemContainer } from "./TasksItemContainer";
import { SxStyle } from "@/classes";
import { ITask } from "@/interfaces";
import { getColorsFromStr } from "@/utils";
import { useMemo, useState } from "react";

interface TasksItemProps {
  task: ITask;
}

export function TasksItem({ task }: TasksItemProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleDone = () => {};

  return (
    <TasksItemContainer isDone={task.is_done}>
      <ItemHead
        leftItem={
          <ItemExpand isActive={task.is_done} onClick={handleDone} />
        }
        buttonProps={{ onClick: handleExpand }}
        isExpanded={isExpanded}
      >
        <ItemTitle>{task.title}</ItemTitle>
      </ItemHead>

      <ItemCollapse in={isExpanded}>{task.text}</ItemCollapse>
    </TasksItemContainer>
  );
}

const sxStyle = SxStyle.create({});

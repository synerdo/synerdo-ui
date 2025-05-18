import {
  deleteModalId,
  editModalId,
  IDeleteModalData,
  IEditModalData,
} from "../modals";
import { ItemCollapse } from "./ItemCollapse";
import { ItemDate } from "./ItemDate";
import { ItemDone } from "./ItemDone";
import { ItemField } from "./ItemField";
import { ItemHead } from "./ItemHead";
import { ItemPriority } from "./ItemPriority";
import { ItemTitle } from "./ItemTitle";
import { TasksItemContainer } from "./TasksItemContainer";
import { MenuButton } from "@/components/buttons";
import { ITask } from "@/interfaces";
import { useModalsStore, useUsersStore } from "@/stores";
import { formatDate, formatFullDate } from "@/utils";
import { MenuItemProps, useMediaQuery, useTheme } from "@mui/material";
import { useMemo, useState } from "react";

interface TasksItemProps {
  task: ITask;
}

export function TasksItem({ task }: TasksItemProps) {
  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));

  const iconSize = useMemo(
    () => (isTablet ? "medium" : "small"),
    [isTablet]
  );

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const users = useUsersStore((s) => s.users);

  const openModal = useModalsStore((s) => s.openModal);

  const taskActions: MenuItemProps[] = [
    {
      children: "Edit",
      onClick: () => {
        openModal<IEditModalData>(editModalId, {
          taskId: task.id,
          title: task.title,
          text: task.text,
          due_to_date: task.due_to_date,
          due_to_time: task.due_to_time,
          priority: task.priority,
        });
      },
    },
    {
      children: "Delete",
      onClick: () => {
        openModal<IDeleteModalData>(deleteModalId, {
          roomId: task.room,
          taskId: task.id,
          taskTitle: task.title,
        });
      },
    },
  ];

  const isExpired =
    new Date(`${task.due_to_date}:${task.due_to_time}`) < new Date();

  const creator = users.find((user) => user.id === task.creator);

  const executor = users.find((user) => user.id === task.executor);

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleDone = () => {};

  return (
    <TasksItemContainer isDone={task.is_done}>
      <ItemHead
        leftItem={
          <ItemDone
            taskId={task.id}
            isDone={task.is_done}
            iconSize={iconSize}
            onClick={handleDone}
          />
        }
        buttonProps={{ onClick: handleExpand }}
        rightItem={
          <>
            <ItemDate isExpired={isExpired}>
              {formatDate(task.due_to_date)}
            </ItemDate>

            <MenuButton iconSize={iconSize} menuItems={taskActions} />
          </>
        }
        isExpanded={isExpanded}
      >
        <ItemTitle>{task.title}</ItemTitle>

        <ItemPriority priority={task.priority} />
      </ItemHead>

      <ItemCollapse in={isExpanded}>
        <ItemField title="Executor:">{executor?.username}</ItemField>

        <ItemField title="Creator:">{creator?.username}</ItemField>

        <ItemField title="Due to:">
          {formatFullDate(`${task.due_to_date}:${task.due_to_time}`)}
        </ItemField>

        <ItemField title="Description:">{task.text}</ItemField>
      </ItemCollapse>
    </TasksItemContainer>
  );
}

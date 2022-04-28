import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import s from './EditTaskModal.module.css';
import { EditTaskNameModalPropsType } from '../../../../types/types';
import {
  deleteTask,
  editTask,
} from '../../../../Store/boardSlice';
import ReactDOM from 'react-dom';

const modalRootElement = document.querySelector('#modal') as HTMLDivElement;

const EditTaskNameModal: FC<EditTaskNameModalPropsType> = ({
  boardId,
  taskId,
  open,
  close,
  taskName,
  description
}) => {
  const [taskNameValue, setTaskNameValue] = useState<string>(taskName);
  const [taskDescription, setTaskDescription] = useState<string>(description);

  const dispatch = useDispatch();
  const editTaskHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (taskNameValue.trim() !== '') {
      dispatch(editTask({ boardId, taskId, description ,taskName: taskNameValue }));
    }
    close();
  };

  const removeTaskHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (taskNameValue.trim() !== '') {
      dispatch(deleteTask({ boardId, taskId }));
    }
  };

  return ReactDOM.createPortal(
    <div>
      {open && (
        <div className={s.modalContainer} onClick={() => close()}>
          <div className={s.modal} onClick={(e) => e.stopPropagation()}>
            <header className={s.modalHeader}>
              <h3 className={s.modalTitle}>Edit Task</h3>
              <button className={s.modalClose} onClick={() => close()}>
                <span className={s.closeModalIcon} />
              </button>
            </header>
            <main className={s.modalContent}>
              <div className={s.editTextArea}>
                <textarea
                  className={s.editTextArea}
                  onChange={(e) => setTaskNameValue(e.target.value)}
                  value={taskNameValue}
                />
              </div>
              <h4>Task Description</h4>
              <div className={s.editTextArea}>
                <textarea
                  className={s.editTextArea}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  value={taskDescription}
                />
              </div>
            </main>
            <footer className={s.modalFooter}>
              <button
                className={s.removeTaskButton}
                onClick={removeTaskHandler}
              >
                <span className={s.removeTaskIcon} />
                <span className={s.removeTaskText}>Delete task</span>
              </button>
              <button className={s.modalSubmit} onClick={editTaskHandler}>
                Submit
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>,
    modalRootElement
  );
};

export default EditTaskNameModal;

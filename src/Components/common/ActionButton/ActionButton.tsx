import { Button, Card, Icon } from '@material-ui/core';
import { FC, SetStateAction, useState } from 'react';
import s from './ActionButton.module.css';
import TextareaAutosize from 'react-textarea-autosize';
import { ActionButtonPropsType } from '../../../types/types'; 

const ActionButton: FC<ActionButtonPropsType> = ( {list, card} ) => {
  const [formOpen, openForm] = useState<boolean>(false);
  const [inputText, inputTextHandler] = useState<string>('');

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    inputTextHandler(e.target.value);
  };

  const renderForm = () => {
    return (
      <div>
        <Card className={s.cardContainer}>
          <TextareaAutosize
            className={s.textArea}
            placeholder="Enter card title"
            autoFocus
            onBlur={closeFormHandler}
            value={inputText}
            onChange={handleInputChange}
          />
        </Card>
        <div className={s.bottomButtonContainer}>
          <Button
            variant="contained"
            style={{ color: 'white', backgroundColor: '#5aac44' }}
          >
            Add Card
          </Button>
          <Icon>close</Icon>
        </div>
      </div>
    );
  };

  const openFormHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    openForm(true);
  };

  const closeFormHandler = () => {
    openForm(false);
  };

  const renderAddButton = () => {
    const buttonText = list ? 'Add list' : 'Add another task';

    return (
      <div className={s.buttonContainer} onClick={openFormHandler}>
        <Icon>add</Icon>
        <p className={s.buttonText}>{buttonText}</p>
      </div>
    );
  };

  return formOpen ? renderForm() : renderAddButton();
};

export default ActionButton;

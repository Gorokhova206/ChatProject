import React from 'react'; 
import {Dialog, DialogTitle, List, ListItem} from '@material-ui/core'
import * as chat_card from './chat_card'
import PropTypes from 'prop-types';

export function ContactList (props){
    const { onClose, open, contacts, updateChats} = props;

    const handleClose = () => {
      onClose();
    };
    const handleListItemClick = (value) => {
      onClose();
      updateChats(value);
    };

    return(
        <Dialog 
        open= {open}
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        style={{borderRadius:0}}>
          <DialogTitle style={{padding:0}}>
            <div className='inline dialog-title'>Выберите контакт</div>
            <button className='inline close__button' onClick={() => handleClose()}>Х</button>
          </DialogTitle>
          <List style={{padding:0}}>
            {contacts.map((contact, i)=>(
              <ListItem button onClick={() => handleListItemClick(contact)} key={i}  style={{padding:0}}>
                {chat_card.renderContactCard(contact, 'none', 'none')}
              </ListItem>
            ))}
          </List>
        </Dialog>
        
    ); 
}

ContactList.propTypes ={
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  contacts: PropTypes.array.isRequired,
  updateChats: PropTypes.func.isRequired

}


import React, {useState, useEffect} from 'react';
import {DOMMessage, DOMMessageResponse} from '../../types';
import {StorageService} from '../../services';
import {INote} from '../../interfaces';
import {Messages} from '../../enums';
import styles from './styles.module.scss';

function App() {
  const [notes, setNotes] = useState<Array<INote>>([]);

  useEffect(() => {
    const storedNotes = StorageService.getNotes();
    setNotes(storedNotes);

    return () => {
      StorageService.saveNotesGroup(notes);
    };
  }, []);

  useEffect(() => {
    /**
     * We can't use "chrome.runtime.sendMessage" for sending messages from React.
     * For sending messages from React we need to specify which tab to send it to.
     */
    chrome.tabs && chrome.tabs.query({
      active: true,
      currentWindow: true
    }, tabs => {
      /**
       * Sends a single message to the content script(s) in the specified tab,
       * with an optional callback to run when a response is sent back.
       *
       * The runtime.onMessage event is fired in each content script running
       * in the specified tab for the current extension.
       */
      const msg: DOMMessage = {payload: Messages.ADD_NOTE}
      chrome.tabs.sendMessage(
        tabs[0].id || 0,
        msg,
        (response: DOMMessageResponse) => {
        });
    });
  }, [notes]);

  return (
    <div className={styles.app}>
      <h1>Hello to Notes chrome extension</h1>
    </div>
  );
}

export default App;

import {DOMMessage, DOMMessageResponse} from '../types';
import {Messages} from '../enums';
import {DomService} from '../services';
import {Note} from '../classes';

const testNote = new Note('123', 'test note', 'lorem ipsum sit dolor amet');

// Function called when a new message is received
const messagesFromReactAppListener = (
  msg: DOMMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response: DOMMessageResponse) => void) => {
  const domService = new DomService();

  switch (msg.payload) {
    case Messages.ADD_NOTE:
      domService.addNote(testNote);
      break;
  }

  // Prepare the response object with information about the site
  const response: DOMMessageResponse = {};

  sendResponse(response);
};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);

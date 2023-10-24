import read from './reader.js';
import json from './parser.js';
import GameSaving from './gamesaving.js';

export default class GameSavingLoader {
  static load() {
    return read().then((data) => {
      json(data)
    }).then((value) => {
      new GameSaving(value)
    }).catch((error) => {
      throw new Error(error.message);
    });
  }
}

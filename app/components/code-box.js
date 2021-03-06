import Ember from 'ember';
import config from '../config/environment';
const {Component} = Ember;

export default Component.extend({
  init(){
    this._super();
    this.set('theme', this.get('theme'));
  },

  codePlaceholder: config.classStruct,
  theme: null,
  myCode: null,

  actions: {
    valueUpdated(myCode) {
      if (!!myCode) {
        this.set('myCode', myCode);
        this.sendAction('action', myCode);
      }
    }
  }
});

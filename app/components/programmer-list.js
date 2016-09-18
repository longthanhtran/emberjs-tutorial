import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    hello(name) {
      console.log(`Hello from ${name}`);
    }
  }
});

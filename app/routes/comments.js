import Ember from 'ember';

const comments = [
      { text: 'First comment', author: 'Long Tran', approved: true },
      { text: 'Second comment', author: 'Ha Thanh', approved: false },
      { text: 'Third comment', author: 'Be Cun lun', approved: true }
    ];

export default Ember.Route.extend({
  model() {
    return comments;
  }
});

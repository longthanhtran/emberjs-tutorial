import Ember from 'ember';

export function commentApprovalStatus([approved]/*, hash*/) {
  return (approved) ? 'Approved' : 'Pending';
}

export default Ember.Helper.helper(commentApprovalStatus);

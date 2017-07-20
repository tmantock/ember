import Ember from 'ember';
import moment from 'npm:moment';

export const formatDate = function(params){
    return moment(params[0]).format('MM-DD-YYYY');
}

export default Ember.Helper.helper(formatDate);
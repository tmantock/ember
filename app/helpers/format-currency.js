import Ember from 'ember';

export function formatCurrency(params, locality) {
  return params[0].toLocaleString(locality.locale, { style: 'currency', currency: locality.currency });
}

export default Ember.Helper.helper(formatCurrency);

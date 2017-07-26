import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.resource('tasks', function() {
    this.route('new');
    this.route('edit', { path: '/edit/:task_id' });
  });
  this.route('profile');
  this.route('run-loop');
  this.route('posts');
  this.route('users');
});

export default Router;

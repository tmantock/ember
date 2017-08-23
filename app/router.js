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
  this.route('posts', function() {
    this.route('show', { path: '/show/:post_id'});
  });
  this.route('users');
  this.route('monsters', function() {
    this.route('show', { path: '/:monster_id' });
  });
});

export default Router;

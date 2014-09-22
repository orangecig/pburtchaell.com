/* jshint strict: false */

'use strict';

/**
 * Application
 * @description Initialize the application and the required modules.
 */
require('angular');
require('angular-ui-router');
require('angular-animate');
require('angular-modal');

angular

  .module('work', [
    'ui.router',
    'ngAnimate',
    'btford.modal'
  ])

  /**!
   * Application Routes
   */
  .config(require('./routes'))

  /**!
   * Application Controllers
   * 
   * See each controller's file for a description of the file.
   */
  .controller('MainController',require('./controllers/main'))
  .controller('ProfileController', require('./controllers/profile'))
  .controller('ProjectController', require('./controllers/project'))
  .controller('ProjectsController', require('./controllers/projects'))
  .controller('ModalController', require('./controllers/modal'))

  /**! 
   * Application Factories
   */
  .factory('$database', require('./factories/database'))
  .factory('$handle', require('./factories/handle'))
  .factory('modal', require('./factories/modal'))

  .run();
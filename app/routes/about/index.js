import paths from '../paths';

export default {
  path: paths.ABOUT,
  getComponent(nextState, callback) {
    System.import('./component').then((module) => {
      callback(null, module.default);
    });
  }
};

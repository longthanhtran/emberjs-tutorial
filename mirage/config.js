export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing
  this.namespace = '/api';
  this.timing = 100;

  this.get('/scientists', function() {
    return {
      data: [{
        type: 'scientists',
        id: 1,
        attributes: {
          name: 'Marie Curie'
        }
      }, {
        type: 'scientists',
        id: 2,
        attributes: {
          name: 'Mae Jemison'
        }
      }, {
        type: 'scientists',
        id: 3,
        attributes: {
          name: 'Albert Hofmann'
        }
      }]
    };
  });

  this.get('/programmers', function() {
    return {
      data: [{
        type: 'programmers',
        id: 1,
        attributes: {
          name: 'DHH'
        }
      }, {
        type: 'programmers',
        id: 2,
        attributes: {
          name: 'Martin Fowler'
        }
      }, {
        type: 'programmers',
        id: 3,
        attributes: {
          name: 'Benjamin Button'
        }
      }, {
        type: 'programmers',
        id: 4,
        attributes: {
          name: 'John Doe'
        }
      }]
    };
  });

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}

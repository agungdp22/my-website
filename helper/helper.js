import "isomorphic-fetch";

export default class API {
    constructor() {
    }

    GraphQL(query) {
        return fetch(`${process.env.API_URL}/graphql`, {
            method: 'POST',
            body: query
          })
          .then( r => {
              return r.json();
          })
          .catch(err => {
            console.error('fetch error: ', err)
          });
    };
}

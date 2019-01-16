/*===============================================================================*/
/*********************************************************************************/
/**
 * @fileOverview  Unit Test demo for mocking http requests using nock
 * @author Narendra Agarwal, narendra@elear.solutions
 * @copyright Copyright (c) 2017 Elear Solutions Tech Private Limited. All rights 
 * reserved. 
 * @license To any person (the "Recipient") obtaining a copy of this software and
 * associated documentation files (the "Software"):
 *                                                                               
 * All information contained in or disclosed by this software is confidential    
 * and proprietary information of Elear Solutions Tech Private Limited and all   
 * rights therein are expressly reserved. By accepting this material the         
 * recipient agrees that this material and the information contained therein is  
 * held in confidence and in trust and will NOT be used, copied, modified,       
 * merged, published, distributed, sublicensed, reproduced in whole or in part,  
 * nor its contents revealed in any manner to others without the express         
 * written permission of Elear Solutions Tech Private Limited.                   
 */
/*********************************************************************************/
/*===============================================================================*/
import request from 'request';
import nock from 'nock';

// base url of the server
let base_url = 'http://localhost:' + process.env.PORT;

// below url is being used in the /api/mock to get followers
let git_base_url = 'https://api.github.com';

// nock options to allow unmocked requests
let nock_options = { "allowUnmocked": "true" };

describe('test mockup ', () => {
  
  let git_mockup = nock(git_base_url, nock_options)
    .persist(); // to make the interceptor persistent

  it('test unmocked api returns 200', (done) => {
    request.get(base_url + '/api/mock', (err, response, body) => {
      expect(response.statusCode).toBe(200);
      done();
    }) 
  });

  it('test mocked api to return 500', (done) => {
    git_mockup.get('/users/ashishbajaj99/followers')
              .reply(500, 'mocked internal server error');
    request.get(base_url + '/api/mock', (err, response, body) => {
      expect(response.statusCode).toBe(500);
      done();
    }) 
  });

});

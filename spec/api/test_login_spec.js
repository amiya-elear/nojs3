/*===============================================================================*/
/*********************************************************************************/
/**
 * @fileOverview  Sample Jasmine Unit Test for POST Request
 * @author Manjunath Subramanyam, manjunaths@elear.solutions
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

let request = require('request');
let base_url = 'http://localhost:' + process.env.PORT;
let body1 = {'key1': 'value1', 'key2': ['value2', 'value3']};
let body2 = {'key1': 'value2'};
let headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};
let expectedStatusSuccessCode = 200;
let expectedStatusErrorCode = 400;
let expectedSuccessResponse = '/api/login post request is called';
let expectedErrorResponse = '/api/login post request error';

// Describe block
describe("Sample Jasmine Unit Test for POST Request", () => {
  // Spec block to verify POST /api/login
  it("POST /api/login success scenario", (done) => {
    request.post({headers: headers, url: base_url + '/api/login', body: body1, json: true}, 
                 (error, response, body) => {
      expect(response.statusCode).toBe(expectedStatusSuccessCode);
      expect(response.body).toBe(expectedSuccessResponse);
      done();  
    });
  });

  it("POST /api/login error scenario", (done) => {
    request.post({headers: headers, url: base_url + '/api/login', body: body2, json: true}, 
                 (error, response, body) => {
      expect(response.statusCode).toBe(expectedStatusErrorCode);
      expect(response.body).toBe(expectedErrorResponse);
      done();  
    });
  });
});

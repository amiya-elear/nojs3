/*===============================================================================*/
/*********************************************************************************/
/**
 * @fileOverview  Sample Jasmine Unit Test for GET Request
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
let expectedStatusCode = 200;
let expectedResponse = 'api works !';

// Outer Describe block
describe("Sample Jasmine Unit Test for GET Request", () => {
  // Inner Describe block to verify GET /api
  // Another describe is created just to demonstrate nested describes
  describe("GET /api", () => {
    // Spec block to verify the response status code
    it("returns status code 200", (done) => { 
      request.get(base_url + '/api', (error, response, body) => {     
        expect(response.statusCode).toBe(expectedStatusCode);       
        done();   
      });
    });

    // Spec block to verify the response body
    // Seperate spec is created just for demonstration purpose
    it("returns the body", (done) => {  
      request.get(base_url + '/api', (error, response, body) => {     
        expect(body).toBe(expectedResponse);
        done();    
      });
    });
  });
});


/*===============================================================================*/
/*********************************************************************************/
/**
 * @fileOverview Provides basic error framework for backend services with basic
 *               error codes, which can be extended to define custom error codes.
 * @author Narendra Kumar Agarwal, narendra@elear.solutions
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

import ExtendableError from 'es6-error';

/**
 * Class representing a CustomApiError
 * @extends ExtendableError
 */
export class CustomApiError extends ExtendableError {

  /**
   * Creates a CustomApiError object
   * @param {ErrorCodes} errCode - the custom api error code
   * @param {string} [extra] - the reason related information
  */
  constructor(errCode, extra = '') {
    super(errCode.message);
    this.name = this.constructor.name;
    this.errorInfo = errCode;
    this.errorInfo.reason += extra;
  }

  /**
  * Get the error info to be passed to client
  * @return {Object} the error info in json format
  */
  getErrorInfo() {
    return { "error": {
               "code": this.errorInfo.code,
               "message": this.errorInfo.message,
               "reason": this.errorInfo.reason
           }
    };
  }

  /**
  * Get the http status to be passed to client
  * @return {HttpStatus} the http status
  */
  getHttpStatus() {
    return this.errorInfo.httpstatus;
  }
}

/** List of Http Status Codes */
export const HttpStatus = {
  // HttpStatus for Success
  "OK": 200,

  // HttpStatus for Client Error
  "BAD_REQUEST": 400,
  "UNAUTHORIZED": 401,
  "FORBIDDEN": 403,
  "NOT_FOUND": 404,

  // HttpStatus for Server Error
  "INTERNAL_SERVER_ERROR": 500,
  "SERVICE_UNAVAILABLE": 503
}

/** List of Custom API ErrorCodes */
export const ErrorCodes = {

  // HTTP Status 400 - BAD_REQUEST
  "BAD_REQUEST": {
                   "httpstatus": HttpStatus.BAD_REQUEST,
                   "code": 40000,
                   "message": "Bad Request",
                   "reason": "Reason not specified"
                  },
  "MISSING_PARAM": {
                     "httpstatus": HttpStatus.BAD_REQUEST,
                     "code": 40001,
                     "message": "Required Parameter not present",
                     "reason": "Missing parameter "
                   },
  "INVALID_INPUT": {
                     "httpstatus": HttpStatus.BAD_REQUEST,
                     "code": 40002,
                     "message": "Input Param is not valid",
                     "reason": "InCorrect Param "
                   },

  // HTTP Status 401 - ACCESS_DENIED
  "AUTH_REQUIRED": {
                     "httpstatus": HttpStatus.UNAUTHORIZED,
                     "code": 40101,
                     "message": "Authentication Required",
                     "reason": "User not logged in "
                   },
  "SESSION_EXPIRED": {
                       "httpstatus": HttpStatus.UNAUTHORIZED,
                       "code": 40102,
                       "message": "Session Expired",
                       "reason": "The access token is Invalid "
                     },

  // HTTP Status 403 - FORBIDDEN
  "ACCESS_RESTRICTED": {
                         "httpstatus": HttpStatus.FORBIDDEN,
                         "code": 40301,
                         "message": "Access Restricted",
                         "reason": "User is not allowed to access this "
                       },

  // HTTP Status 404 - NOT_FOUND
  "NOT_FOUND": {
                 "httpstatus": HttpStatus.NOT_FOUND,
                 "code": 40401,
                 "message": "Not Found",
                 "reason": "The requested page is not found "
               },

  // HTTP Status 500 - INTERNAL_SERVER_ERROR
  "INTERNAL_SERVER_ERROR": {
                             "httpstatus": HttpStatus.INTERNAL_SERVER_ERROR,
                             "code": 50001,
                             "message": "Internal Server Error",
                             "reason": "Internal Server Error "
                           },

  // HTTP Status 503 - SERVICE_UNAVAILABLE
  "DATABASE_ERROR": {
                      "httpstatus": HttpStatus.SERVICE_UNAVAILABLE,
                      "code": 50101,
                      "message": "Database Error",
                      "reason": "Database temporarily unavailable "
                    },
  "SERVER_ERROR": {
                    "httpstatus": HttpStatus.SERVICE_UNAVAILABLE,
                    "code": 50110,
                    "message": "Server Error",
                    "reason": "Server is temporarily unavailable "
                  },
}


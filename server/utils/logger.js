/*===============================================================================*/
/*********************************************************************************/
/**
  * @fileOverview logger - File for generic logger
  * @author Kishor Hibare, kishor.hibare@elear.solutions
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

import { getNamespace, createNamespace } from 'cls-hooked';
import moment from 'moment';
import uniqid from 'uniqid';
import winston from 'winston';
import { SERVICE_NAME } from './constants';
import { REQUEST_ID_HEADER } from './constants';

export const createRequestID = (req, res, next) => {
  var session = createNamespace(SERVICE_NAME);
  session.run(() => {
    //create new request id if incoming request does not have it
    if (req.headers[REQUEST_ID_HEADER] === undefined) {
      let requestId = uniqid();
      req.headers[REQUEST_ID_HEADER] = requestId;
      logger.info('Created a request id and is: ' + requestId);
    }
    session.set('requestId', req.headers[REQUEST_ID_HEADER]);
    next();
  });
};

export const getRequestID = () => {
  const ns = getNamespace(SERVICE_NAME);
  const requestId = ns ? ns.get('requestId') : '';
  return requestId;
};

export const logger = new winston.Logger({
  level: 'debug',
  transports: [
    new winston.transports.Console({
      formatter: (options) => {
        const requestId = getRequestID() || '';
        const logLevel = options.level.toUpperCase();
        const time = moment();
        const message = options.message || '';

        return JSON.stringify({
          timestamp: time.utc(),
          service: SERVICE_NAME,
          requestId,
          logLevel,
          message
        });
      }
    })
  ]
});


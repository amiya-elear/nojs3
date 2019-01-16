/*===============================================================================*/
/*********************************************************************************/
/**
  * @fileOverview routes - file for all the routes
  * @author ABHISHEK SHARMA, abhisheks@elear.solutions
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

import cors from 'cors';
import express from 'express';
import { PREFLIGHT_CACHE_AGE } from '../utils/constants';
import { HttpStatus } from '../utils/custom-api-errors';
import { createRequestID, logger } from '../utils/logger';
import request from 'request';

export const router = express.Router();

// defining cors options and using it
var corsOptions = {
  origin: '*', // TODO: to replace * with the domain name
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  preflightContinue: false,
  maxAge: PREFLIGHT_CACHE_AGE,
  optionsSuccessStatus: HttpStatus.OK
};
router.use(cors(corsOptions));

// create requestID for requests
router.use(createRequestID);

/** define routes for the service */
router.get('/', (req, res) => {
  logger.debug('api works---------------');
  res.status(200).send('api works !');
});

router.get('/mock', (req, res) => {
  logger.debug('mock api works---------------');
  request({
           uri: 'https://api.github.com/users/ashishbajaj99/followers',
           method: 'GET',
           headers: {
             'Content-Type': 'application/json',
             'Accept': 'application/json',
             'User-Agent': 'Awesome-Elear-App'
           }
          }, (err, response, body) => {
            if (!err) {
             res.status(response.statusCode).send(body);
           } else {
             res.status(500).send('error');
           }
  });
});

router.post('/login', function(req, res) {
  if (JSON.parse(req.body.key1 == 'value1')) {
    res.send('/api/login post request is called');
  } else {
    res.status(400).send('/api/login post request error');
  }
});

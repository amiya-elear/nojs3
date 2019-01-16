/*===============================================================================*/
/*********************************************************************************/
/**
 * @fileOverview server - Server to start service.
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

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import errorHandler from 'errorhandler';
import express from 'express';
import expressSession from 'express-session';
import http from 'http';
import lusca from 'lusca';
import methodOverride from 'method-override';
import shrinkRay from 'shrink-ray';
import { SECRET, HTTPS_AGE } from './utils/constants';
import { HttpStatus } from './utils/custom-api-errors';
import { Environment } from './config/environment';
import { logger } from './utils/logger';
// uncomment below to access mongodb
// import './config/mongoose.js';
// Get our API routes
import { router } from './routes/routes';

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// parse cookie header and populate req.cookies
app.use(cookieParser());

// Lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it.
app.use(methodOverride());

// compression middleware
app.use(shrinkRay());

// creates a session middleware
app.use(expressSession({
  secret: SECRET,
  resave: true,
  saveUninitialized: true
}));

// webapp security middleware
app.use(lusca({
  csp: { policy: {'default-src': '*'} }, // TODO: Update this once the domain name is known
  xframe: 'DENY',
  hsts: {        // TODO: Testing is pending after https certificate is obtained
    maxAge: HTTPS_AGE, 
    includeSubDomains: true,
    preload: true
  },
  nosniff: true,
  xssProtection: true
}));

// Set our api routes
app.use('/api', router);

// error-handler to be used last and in dev only
if (process.env.NODE_ENV == 'dev') {
  app.use(errorHandler());
}
// Catch all other routes and return the NOT_FOUND
app.get('*', (req, res) => {
  res.status(HttpStatus.NOT_FOUND).send();
});

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(Environment.NODE_SERVER, () => {
  logger.info(`Boilerplate Server is up and running on localhost:${Environment.NODE_SERVER}`);
});


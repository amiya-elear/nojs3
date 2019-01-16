/*===============================================================================*/
/*********************************************************************************/
/**
 * @fileOverview gulp file for creating and executing gulp tasks
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

import gulp from 'gulp';
import babel from 'gulp-babel';
import clean from 'gulp-clean';
import jasmine from 'gulp-jasmine-node';
import jshint from 'gulp-jshint';
import nodemon from 'gulp-nodemon';
import gutil from 'gulp-util';

// Default gulp task to build and run the server
gulp.task('default', ['start:server'], () => {
  gutil.log('Boilerplate Server is up and running');
});

// Gulp task for starting the server using nodemon
gulp.task('start:server', ['build'], () => {
  var stream = nodemon({
    script: 'dist/server.js'
    , ext: 'html js'
    , ignore: ['ignored.js']
    , tasks: ['watch']});

  stream.on('restart', () => {
    console.log('restarted!');
  }).on('crash', () => {
    console.error('Application has crashed!\n');
    stream.emit('restart', 10);  // restart the server in 10 seconds
  });
});

// Gulp task for building the code into dist folder
gulp.task('build', ['transpiler'], () => {
  gutil.log('Building of Boilerplate Service Complete');
})

// Gulp task for transpiling all ES6 code to ES5 and copy to dist folder.
gulp.task('transpiler', ['clean'], () => {
  return gulp.src('server/**/*.js')
             .pipe(babel())
             .pipe(gulp.dest('dist'));
});

// Gulp task to clean the dist folder
gulp.task('clean', () => {
  return gulp.src('dist', {read: false})
             .pipe(clean());
});

// Gulp task to configure the jshint
gulp.task('jshint', () => {
  return gulp.src('./src/**/*.js')
             .pipe(jshint())
             .pipe(jshint.reporter('jshint-stylish'));
});

// Gulp task to watch source files and run jshint on file changes
gulp.task('watch', () => {
  gulp.watch('./src/**/*.js', ['jshint']);
});

// Gulp task to run jasmine on the spec folder
gulp.task('test', ['build:test'], () => {
  return gulp.src('dist/spec/**/*.js')
             .pipe(jasmine({
               timeout: 10000,
               includeStackTrace: true,
               color: true
             }));
});

// Gulp task for building the code into dist folder
gulp.task('build:test', ['build'], () => {
  return gulp.src('spec/**/*.js')
             .pipe(babel())
             .pipe(gulp.dest('dist/spec'));
});


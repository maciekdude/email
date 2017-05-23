'use strict'

var gulp = require('gulp')
var babel = require('gulp-babel')
var clean = require('gulp-clean')
var shell = require('gulp-shell')
var spawn = require('child_process').spawn
var node

var config = {
  devBaseUrl: 'http://localhost',
  paths: {
    script: {
      server: './server/**/*.js',
      common: './common/**/*.js',
      clientTS: './client/src/**/*.ts',
      clientJS: './client/src/**/*.js'
    },
    directories: {
      server: './server/**/*.*',
      common: './common/**/*.*',
      client: './client/src/**/*.*'
    },
    dist: {
      root: './dist',
      server: './dist/server',
      common: './dist/common',
      client: './dist/client'
    }
  }
}

gulp.task('build:server', ['clean:server', 'move:server'], () => {
  return gulp.src([config.paths.script.server])
    .pipe(babel({
      presets: ['latest'],
      plugins: ['transform-async-to-generator']
    }))
    .pipe(gulp.dest(config.paths.dist.server))
})

gulp.task('build:common', ['clean:server', 'move:server'], () => {
  return gulp.src([config.paths.script.common])
    .pipe(babel({
      presets: ['latest'],
      plugins: ['transform-async-to-generator']
    }))
    .pipe(gulp.dest(config.paths.dist.common))
})

gulp.task('build:client', ['clean:client'], shell.task([
  '(cd ./client && npm run build)'
]))

gulp.task('build:all', ['build:server', 'build:common', 'build:client'])

gulp.task('clean:all', function () {
  return gulp.src(['./dist/'], {read: false})
    .pipe(clean())
})

gulp.task('clean:client', function () {
  return gulp.src(['./dist/client'], {read: false})
    .pipe(clean())
})

gulp.task('clean:server', function () {
  return gulp.src(['./dist/common', './dist/server'], {read: false})
    .pipe(clean())
})

gulp.task('move:server', ['clean:server'], function () {
  return gulp.src([config.paths.directories.server, config.paths.directories.common], {base: '.'})
    .pipe(gulp.dest(config.paths.dist.root))
})

gulp.task('develop', ['build:all', 'start'], function () {
  console.log('ENTERING DEVELOPMENT MODE. APP WILL REBUILD ON CHANGES')
  gulp.watch(config.paths.directories.server, ['build:all', 'start'])
  gulp.watch(config.paths.directories.common, ['build:all', 'start'])
  gulp.watch(config.paths.directories.client, ['build:all', 'start'])
})

gulp.task('develop:server', ['build:common', 'build:server', 'start:server'], function () {
  console.log('ENTERING DEVELOPMENT MODE. APP WILL REBUILD ON CHANGES')
  gulp.watch(config.paths.directories.server, ['build:common', 'build:server', 'start:server'])
  gulp.watch(config.paths.directories.common, ['build:common', 'build:server', 'start:server'])
})

gulp.task('develop:client', ['build:client', 'start:client'], function () {
  console.log('ENTERING DEVELOPMENT MODE. APP WILL REBUILD ON CHANGES')
  gulp.watch(config.paths.directories.client, ['build:client', 'start:client'])
})

gulp.task('start', ['build:all'], function () {
  console.log('starting server at ' + new Date())
  if (node) node.kill()
  node = spawn('node', ['./dist/server/server.js'], {stdio: 'inherit'})
  node.on('close', function (code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...')
    }
  })
})

gulp.task('start:server', ['build:common', 'build:server'], function () {
  console.log('starting server at ' + new Date())
  if (node) node.kill()
  node = spawn('node', ['./dist/server/server.js'], {stdio: 'inherit'})
  node.on('close', function (code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...')
    }
  })
})

gulp.task('start:client', ['build:client'], function () {
  console.log('starting server at ' + new Date())
  if (node) node.kill()
  node = spawn('node', ['./dist/server/server.js'], {stdio: 'inherit'})
  node.on('close', function (code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...')
    }
  })
})

gulp.task('push', ['build'], shell.task([
  'sudo cf push -f manifest.yml'
], {verbose: true}))

gulp.task('install', shell.task([
  'npm install',
  '(cd ./client && npm install)'
]))

gulp.task('default', ['develop'])
gulp.task('build', ['clean:all', 'move:server', 'build:all'])
gulp.task('publish', ['build', 'push'])

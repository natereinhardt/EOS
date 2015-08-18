// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {
    'use strict';

    var BOWER_DIR = "bower_components",
        CLIENT_DIR ="client/js",

    EXTERNAL_JS_FILES = [
        BOWER_DIR + "/angular/angular.js",
        BOWER_DIR + "/angular-resource/angular-resource.js",
        BOWER_DIR + "/angular-animate/angular-animate.js",
        BOWER_DIR + "/angular-aria/angular-aria.js",
        BOWER_DIR + "/angular-material/angular-material.js"
    ],
    INTERNAL_JS_FILES = [
            CLIENT_DIR + "/app.js",
            CLIENT_DIR + "/controllers/*.js"


    ];

    // ===========================================================================
    // CONFIGURE GRUNT ===========================================================
    // ===========================================================================
    grunt.initConfig({

        // get the configuration info from package.json ----------------------------
        // this way we can use things like name and version (pkg.name)
        pkg: grunt.file.readJSON('package.json'),

        // configure jshint to validate js files -----------------------------------
        jshint: {
            options: {
                reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
            },

            // when this task is run, lint the Gruntfile and all js files in src
            build: ['Gruntfile.js', 'client/**/*.js']
        },
        concat: {
            internal: {
                src: INTERNAL_JS_FILES,
                dest: 'client/js/internal.js'
            }
        },
        watch: {
            dev: {
                files: ['Gruntfile.js', INTERNAL_JS_FILES],
                tasks: ['jshint', 'concat'],
                options: {
                    atBegin: true
                }
            }
        }
    });
    grunt.registerTask('dev', ['watch']);

    // ===========================================================================
    // LOAD GRUNT PLUGINS ========================================================
    // ===========================================================================
    // we can only load these if they are in our package.json
    // make sure you have run npm install so our app can find these
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ngmin');

};

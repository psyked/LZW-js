/* jshint node:true */
module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        uglify: {
            js: {
                options: {
                    sourceMap: 'lzw.js.map'
                },
                files: {
                    'lzw.min.js': ['lzw.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
}
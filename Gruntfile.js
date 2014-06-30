module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        banner: '"use strict";\n'
      },
      dist: {
        src: 'src/base/**/*.js',
        dest: 'build/base.js'
      }
    },
    jshint: {
      beforeconcat: ['src/**/*.js', 'src/bar.js'],
      afterconcat: ['build/*.js'],
      options: {
        '-W097': false
      }
    },
    shell: {
      runsh: {
        command: "./test/run.sh"
      }
    },
    mochaTest: {
      test: {
        src: ['test/**/*.js'],
        options: {
          run: true,
        },
      },
    }
  });


   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-mocha-test');
   grunt.loadNpmTasks('grunt-shell');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'jshint', 'shell', 'mochaTest']);

};

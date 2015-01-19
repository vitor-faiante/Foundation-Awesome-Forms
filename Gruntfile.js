module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {                              // Task
      
      dist: {                            // Target
        
        options: {                       // Target options
          style: 'expanded'
        },

        files: {                                // Dictionary of files
          'css/style.css': [ 'scss/style.scss' ],       // 'destination': 'source'
        }

      }

    },

    uglify: {
        build: {
            src: 'js/src/scripts.js',
            dest: 'js/build/scripts.min.js'
        }
    },

    watch: {

      scripts: {
          files: [
              'js/**/*.js',
          ],
          tasks: ['uglify'],
          options: {
              spawn: false,
              livereload: true,
          },
      },

      css: {
          files: [
              'scss/**/*.scss'
          ],
          tasks: ['sass'],
          options: {
              spawn: false,
              livereload: true,
          }
      },
      
    },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
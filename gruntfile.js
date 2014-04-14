module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n /*<%= pkg.version %>*/\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    jasmine:{
      pivotal:{
        src: 'src/*.js',
        options:{
          specs: 'tests/*.spec.js'
        }
      }
    },
    copy:{
       main: {
        files: [
          {expand: true, flatten: true, src: ['build/rjs.min.js'], dest: '/Volumes/HDD/dev/mepantrag/www/js/libs', filter: 'isFile'},
          {expand: true, flatten: true, src: ['build/rjs.min.js'], dest: '/Volumes/HDD/dev/mepauftrag/www/js/libs', filter: 'isFile'}
        ]
      }
    } 
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //jasmine Plugin
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  //copy plugin
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);


};
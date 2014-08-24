module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dnd4: {
        src: ['src/igweb/js/dnd4/**/*.js'],
        dest: 'bin/igweb/js/dnd4data.js'
      },
    },

    qunit: {
      files: ['src/igweb/test/**/*.html']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['concat:dnd4']);

  grunt.registerTask('test', ['qunit']);  

  grunt.registerTask('default', ['build', 'test']);
};

/*globals scrum */

// Add a plugin for github integration
scrum.sources.push({
  // Fixed properties and methods
  name: "CSV",
  position: 5,
  view: "templates/csv_source.html",
  feedback: false,
  // Feedback call for completed poll
  completed: function(result) {
  },
  
  // Custom properties and methods
  loaded: false,
  format: '',
  file: '',

  // Issues after parsing the file
  issues: [],
  issue: {},
  event: ['poll', 'start', 'Github'],

  // Load issues from github
  load: function() {
  }
});

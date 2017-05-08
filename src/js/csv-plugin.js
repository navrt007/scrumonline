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

  // Issues after parsing the file
  issues: [],
  issue: {},
  event: ['poll', 'start', 'Github'],

  // Load issues from github
  load: function() {
    var self = this;
    // Upload file http://stackoverflow.com/a/22538760
    var file = document.getElementById('csv_issues').files[0];
    var formdata = new FormData();
    formdata.append('issues', file);
    
    self.parent.$http
      .post('/api/csv/parse', formdata)
      .then(function (response) {
        self.issues = response.data;
        self.issue = self.issues[0];
        self.loaded = true;
      });
  }
});

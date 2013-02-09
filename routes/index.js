
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.projects = function(req, res) {
  res.render('projects');
}

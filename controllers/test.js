/**
 * GET /contact
 * Contact form page.
 */

exports.getCreateForm = function(req, res) {
  res.render('form/create', {
    title: 'Test Create Form'
  });
};

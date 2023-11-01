
module.exports.Controller= async(req, res)=>
{
        const { username, password } = req.body; 
      
        // Authentication
        if (username === 'abd' && password === 'abd') {
          req.session.authenticated = true;
          res.redirect('/upload');
        } else {
          res.status(401).send('Invalid');
        }
}


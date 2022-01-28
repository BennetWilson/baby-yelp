const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    // try {
        const newUser = await User.create ({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        });
        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.username = newUser.username;
            req.session.email = newUser.email
            req.session.logged_in = true;
            
            res.json(newUser);
        });
    // } catch (err) {
    //     res.status(500).json(err);
    // }
});

router.post('/login', async (req, res) => {
    // try {
        const userData = await User.findOne({ where: { username: req.body.username }});

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again' });
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400).json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in' })
        });

    // } catch (err) {
    //     res.status(400).json(err);
    // }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {

        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// router.get("/signup", (req, res) => {
//     if (req.session.logged_in) {
//       res.redirect("dashboard");
//       return;
//     }
//     res.render("dashboard");
//   });
  
  
router.get("/signup", (req, res) => {
    res.render("signup");
  });

router.get("/dashboard", async (req, res) => {
    // try{
    // const reviewData = await Review.findAll({
    //   include: [User],
    // });
    // const reviews = reviewData.map((review) => review.get({ plain: true }));
  
    res.render('dashboard');
    //  } catch(err) {
    //      res.status(500).json(err);
    //  }
  })

module.exports = router;

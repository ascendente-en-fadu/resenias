const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

/**
 * Function to get current user's own review, selected by course or review id
 */
const getMyReview = ({ catedra, id }) => {
  const data = router.db
    .get('resenias')
    .value()
    .find(
      (resenia) =>
        (resenia.catedra === Number(catedra) || resenia.id === Number(id)) &&
        resenia.autor === 'own',
    );
  if (data) {
    // eslint-disable-next-line no-unused-vars
    const { autor, ..._data } = data;
    return _data;
  }
};

/**
 * Validates a review object properties, checking if it matches the review definitions
 */
const isValidReview = (review) => {
  return (
    review.anio >= 2000 &&
    review.anio <= new Date().getFullYear() &&
    review.contenido &&
    review.contenido.length <= 2500
  );
};

/**
 * Middleware for the own review endpoint, that returns the current user's review
 */
const ownReviewMiddleware = (req, res) => {
  res.json(getMyReview({ catedra: req.query.catedra }));
};

/**
 * Middleware for the login endpoint, that returns a generic session_id
 */
const loginMiddleware = (req, res) => {
  res.json({
    session_id: 'my-session-id',
  });
};

/**
 * Middleware for the create and delete reviews endpoints, that executes some validation logic
 */
const reviewsMiddleware = (req, res, next) => {
  switch (req.method) {
    case 'POST':
      if (
        !getMyReview({ catedra: req.body.catedra }) &&
        isValidReview(req.body)
      ) {
        req.body.autor = 'own';
        next();
      } else {
        res.sendStatus(403);
      }
      break;
    case 'DELETE':
      if (getMyReview({ id: req.path.replaceAll('/', '') })) {
        next();
      } else {
        res.sendStatus(404);
      }
      break;
    default:
      next();
  }
};

/**
 * Middleware to add a delay to every response
 */
const delayMiddleware = (req, res, next) => {
  const delay = process.env.npm_config_DELAY || 0;
  setTimeout(next, delay);
};

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(delayMiddleware);

server.use('/api/resenia-propia', ownReviewMiddleware);
server.use('/api/login', loginMiddleware);
server.use('/api/resenias', reviewsMiddleware);
server.use('/api', router);

server.listen(3004, process.env.npm_config_IP, () => {
  console.log('JSON Server is running');
});

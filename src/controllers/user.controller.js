const User = require("../models/user.model.js");

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a User
  const { id, email, phone_number } = req.body;
  const user = new User(id, email, phone_number);

  // Save User in the database
  User.create(user, (err, data) => {
  if (err) {
    // Retornar la vista con un mensaje de error
    res.render('create-user', { 
      message: err.message || "Some error occurred while creating the User.", 
      success: false 
    });
  } else {
    // Retornar la vista con un mensaje de éxito
    res.render('create-user', { 
      message: "User created successfully!", 
      success: true 
    });
  }
  });
};

// Retrieve all users from the database
// Retrieve all users from the database and render the view
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users."
      });
    } else {
      // Renderizar la vista 'index.ejs' y pasar los datos de los usuarios
      res.render('index', { users: data });
    }
  });
};


// Find a single User by Id
exports.findOne = (req, res) => {
  User.findById(Number(req.params.id), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};


// Update a User identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  const { id, email, phone_number } = req.body;
  User.updateById(
    Number(req.params.id),
    new User(id, email, phone_number),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating User with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  User.delete(Number(req.params.id), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete User with id " + req.params.id
        });
      }
    } else res.send({ message: `User was deleted successfully!` });
  });
};

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'Ben',
  host: 'localhost',
  database: 'oneyearonemedia',
  password: 'password',
  port: 5432,
})

const getPerson = (request, response) => {
  pool.query('SELECT * FROM person ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getPersonById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM person WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createPerson = (request, response) => {
  const { name } = request.body

  pool.query('INSERT INTO person (name) VALUES ($1)', [name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Person added with ID: ${result.insertId}`)
  })
}

const updatePerson = (request, response) => {
  const id = parseInt(request.params.id)
  const { name } = request.body

  pool.query(
    'UPDATE Person SET name = $1 WHERE id = $2',
    [name, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Person modified with ID: ${id}`)
    }
  )
}

const deletePerson = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM person WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Person deleted with ID: ${id}`)
  })
}

module.exports = {
  getPerson,
  getPersonById,
  createPerson,
  updatePerson,
  deletePerson
}

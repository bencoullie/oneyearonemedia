const Pool = require('pg').Pool
const pool = new Pool({
  user: 'Ben',
  host: 'localhost',
  database: 'oneyearonemedia',
  password: 'password',
  port: 5432,
})

const getProfiles = (request, response) => {
  const query = `
    SELECT
      p.person_name as consumer_name,
    pm.consumer_id,
    pm.media_id,
      pm.completed,
      p2.person_name as giver_name,
      m.media_name
    FROM
      person p
    INNER JOIN
      person_media pm ON (p.person_id = pm.consumer_id)
    INNER JOIN
      person p2 ON (p2.person_id = pm.giver_id)
    INNER JOIN
      media m ON (pm.media_id = m.media_id)
  `

  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

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
  deletePerson,
  getProfiles
}

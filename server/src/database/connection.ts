import knex from 'knex';
import path from 'path';

const config = require('../../knexfile')

const db = knex(config)

export default db;
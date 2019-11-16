const db = require('../models/db');

const pg = db.open({
  host: '127.0.0.1',
  port: 5555,
  database: 'application',
  user: 'tikken',
  password: 'root'
});

//pg.query();
pg.select('pg_tables')
  .where({ tableowner: 'tikken' })
  .fields(['schemaname', 'tablename', 'tableowner', 'hasindexes'])
  .order('tablename')
  .then(rows => {
    console.table(rows);
    pg.close();
});

module.exports = pg;
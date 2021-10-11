const Dao = require('./DAO/Dao');
let DB = new Dao();

DB.get('asdf')
DB.put('Delhi', 'Latitude', 10, 'Population', 500);
DB.put('Jammu', 'Latitude', 210, 'Population', 500);
DB.search('Latitude', 10)
DB.search('Population', 500)
DB.get('Jammu')
DB.put('Jammu', 'Language', 'Engligh')
DB.get('Jammu')
DB.put('Delhi', 'Language', 1)
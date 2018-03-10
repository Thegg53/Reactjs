# Reactjs
learning about react JS

following bucky roberts tutorials on youtube 
https://www.youtube.com/watch?v=2NLgQMs2hOw&list=PL6gx4Cwl9DGBuKtLgPR_zWYnrwv-JllpA&index=2
https://github.com/buckyroberts/React-Boilerplate

Download the zip file from his github repo linked above, then do an "npm install" on the root folder of the extraction, 
followed by the commands below

For starting up the localhost server : 
1. Install node from nodejs.org (if not installed already)
2. Install http-server from the npm command on the command prompt : "npm install -g http-server"
3. Now go to the directory with your static files and run command : "http-server"
4. Hit localhost:8080 on the browser.
 
# postgreSQL, express and sequelize
##postgresql
Install:
sudo apt-get install postgresql postgresql-contrib

to enter the postgres console:
sudo -u postgres psql

there you should see postgres=# 
type the following to change the postgres user password

\password postgres

after the password is changed, create the database
create database "databaseName withotht double quotes";
in our case
  create database futurama;
then connect to it:
  \c futurama
then lets create a table:
	create table futurama
  
  
  Upon connecting to the postgreSQL database, it is possible that installing the pg package manually is requires. Use the command below:
npm i -S pg
  
  
  Windows
add psql to the environment variables 
https://siteofachyu.wordpress.com/2017/11/03/psql-not-recognized-as-an-internal-or-external-command-in-windows/
https://www.youtube.com/watch?v=fD7x8hd9yE4


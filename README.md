mongodata
=========

OData CRUD Example using Node.JS and MongoDB

How to run the example (Windows):

1. Install Node.JS.

2. Install MongoDB (preferably as a service on Windows).

3. Start MongoDB (mongod.exe) or install it as a service and start the service (net start mongodb).

4. Import sample data:
<pre>
    mongoimport --db zipsdb --collection zips --file odata\import_data\zips.json
</pre>

5. Make sure the data got imported properly. The imported data contains 29468 zip codes, city names, geo coordinates, population, state. From command window, run:
<pre>
    mongo.exe
    show dbs
    use zipsdb
    db.zips.find()
</pre>

6. Check OData endpoint by navigating to http://localhost:8088/zipsdb/$metadata in your favorite browser. 

7. Using IIS Manager, create a virtual directory "mongodataweb" pointing to the mongodata\web directory.

8. Run the example app by navigating to: http://localhost/mongodataweb/index.htm.

9. Enjoy!
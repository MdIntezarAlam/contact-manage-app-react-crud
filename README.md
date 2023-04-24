<!-- technology used=> -->

1=> Json-web-server
2=> React-JS
3=> Bootstrap
Note=>
1=> download npm i json-server
2=>go to package.json in start script write below start command
"json-server": "json-server --watch db.json --port 3001",

3=>Run multiple commands concurrently.download.
4 => npm i concurrently
5 pase it in to package.json file=>
"start:dev": "concurrently \"command1 arg\" \"command2 arg\"",
6=>replace step 5  with this=>
"concurrently \"npm start\" \"npm run json-server\"",

and finall run => npm run start:dev

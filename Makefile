client:
	node server.js --env=dev

web:
	./node_modules/.bin/nodemon index.js --env=dev

# React Fullo-Boilerplate

A very simple react boilerplate that I use on my personal projects.

It is based on: 

- React + Babel + ES6
- Webpack2
- Express Js as Server
- Sass 
- Jest + Enzyme for testing

It uses the [Airbnb Eslint and Javascript code style](https://www.npmjs.com/package/eslint-config-airbnb).
The only different rule is that this boilerplate allows both .js and .jsx extensions for files. You can change this in the .eslintrc file inside the root directory.

## How to use it 

### Run
    
    npm install 
     
### Watching Files with Webpack 

	npm start
	
Open your browser at [http://localhost:8080](http://localhost:8080) 
	
### Build 

	npm run build
	
It will create a ***dist*** folder and put the files there, including a complete source map for debugging the app.
	
### Tests

	npm test
	
Check the ***src*** and ***components*** folder
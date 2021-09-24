
# Docenv

### Description

Simple wrapper for dotenv that let us describe (document) configuration parameters and define default values for them if not defined.

`docenv-config.json`
```javascript
[
	{
		"key": "VARIABLE_NAME",
		"value": "defaultValue", // Optional
		"help": "Variable description",
		"regex": /^(80|7337)$/ // Optional
	},
	...
]
```
## Installation

Using npm:

```shell
npm install docenv
```

or using yarn:

```shell
yarn add docenv
```

## How to use

#### 1- You'll need a .env file at your projects roots location.

Sample .env content:

```shell
SERVER_PORT=7337
```

#### 2- Create a `docenv-config.json` at your projects roots location, with defaults parameters and text explaining usage.

```javascript
[
	{
		"key": "SERVER_IP",
		"help": "IP to listen on the server",
		"value": "0.0.0.0"
	},
	{
		"key": "SERVER_PORT",
		"help": "Port to listen on",
		"value": "80",
		"regex": /^(80|7337)$/
	}
]
```

#### 3- Initialize doc-env at your entry code.
Sample index.js content:
```javascript
const { Config, initEnv} = require("docenv")

initEnv();
```

4- Use it
```javascript
httpServer.listen(Config.SERVER_PORT, Config.SERVER_IP, resolve);
```
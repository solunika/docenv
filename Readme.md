
# Docenv

### Description

Simple wrapper for dotenv that let us describe (document) configuration parameters and define default values for them if not defined.

`docenv-config.json`
```
[
	{
		"key": "VARIABLE_NAME",
		"value": "defaultValue", // If doesn't have value should be defined in .env file.
		"help": "Variable value description"
	},
	...
]
```

## How to use

#### 1- You'll need a .env file at your projects roots location.

Sample .env content:

```
SERVER_PORT=7337
```

#### 2- Create a `docenv-config.json` at your projects roots location, with defaults parameters and text explaining usage.

```
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
```
const { Config, initEnv} = require("docenv")

initEnv();
```

4- Use it
```
httpServer.listen(Config.SERVER_PORT, Config.SERVER_IP, resolve);
```
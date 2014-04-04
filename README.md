# R.js 

R.js is a lightweight logging framework for [Phonegap](http://www.phonegap.com) Applications.

## Requirements

There some Phonegap plugins needed:

- org.apache.cordova.dialogs
- org.apache.cordova.file
- org.apache.cordova.device (only needed for report)
- de.appplant.cordova.plugin.email-composer [Details](https://build.phonegap.com/plugins/522) (only needed for report)

Install them easily with phonegap cli tool, for example:
	
	phonegap plugin add org.apache.cordova.dialogs

## Usage

For instance you have to call the constructor function.
	``
		var r = new rjs();
	``

Option | Type | Default | Description
------ | ---- | ------- | -----------
level | string | silent | Defines what R.js should do if you invoke log
appName | string | 'SampleApp' | Please set the Name of your Application
remote | string | null | Here you can set the Adress of [rjscli](http://www.github.com/Osile/rjscli)
report | object | false | If you want your users allow to send you a report mail provide this options array as described.

#### Report Object

	{
		email: 'YOUR EMAIL ADRESS',
		btnReport: 'NAME THE LABEL SHOWN FOR REPORT',
		btnOK: 'NAME THE LABEL SHOWN TO DISMISS A ALERT'
	}

## Methods

### r.log:
#### Parameter:
	- message
	- title (default: AppName)
	- object (pass a object to analyze it later, don't serialize it r.js is doing this for you)

## Contribute

For instance you need some developer stuff on your machine:
	- Node.js
	- Grunt

If you got all these things, you can start by cloning the git repo then open a terminal and type in:

	npm install

If you want to debug with grunt without a possibility to acces phonegap API's you can set the `env` option to `development`

### Testing

Jasmine is integrated as Unit Testing framework so just need to execute it after you implemented something new or fixed a bug or whatever

	grunt jasmine

### TODO
- Implement method to get report manually 
- Implement internal function to get old log entrys
- write events like start / stop app to log

The MIT License (MIT)

Copyright (c) 2014	Marvin Osswald

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
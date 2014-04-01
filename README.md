# R.js 

R.js is a lightweight logging framework for [Phonegap](http://www.phonegap.com) Applications.

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
then you can call any methods:

### LOG:
#### Parameter:
	- message
	- title (default: AppName)
	- callback function

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
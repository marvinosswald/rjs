describe('R.js', function(){
	var customMatchers = {
		checkType: function(util, customEqualityTesters){
			return{
				compare: function(actual, expected){
					var result = {};
					if (expected === undefined){
						result.pass = false;
					}else if(typeof actual === expected){
						result.pass = true;
					}

					if (result.pass){
						result.message = 'Both Values are of the type: ' + typeof(actual);
					}else{
						result.message = 'Arent the same type actual is: ' + typeof(actual) + ' and expected is: ' + expected;
					}
					return result;
				}
			}
		}
	}
	beforeEach(function() {
		jasmine.addMatchers(customMatchers);
	});
	var r = new rjs({
		env: 'development',
		level: 'debug',
		remote: 'http://localhost:3000'
	});
	it('init response with object', function(){
		expect(r).checkType('object');
	})
	it('log possible', function(){
		var res = r.log('hi');
		expect(res).toBe(true);
	})
	it('Meldung Action', function(){
		var res = r._showCallback(1);
		expect(res).toBe(true);
	})
	it('OK Action', function(){
		var res = r._showCallback(2);
		expect(res).toBe(true);
	})
})

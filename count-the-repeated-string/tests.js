const count = require('./index')
const assert = require('assert')

describe('UnitTests', function () {
  it('get_how_many_times_it_is_repeated', function () {
    expect(count('abc', 10).toBe(3))
})})

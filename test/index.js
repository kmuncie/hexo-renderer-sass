'use strict'

/* eslint-env mocha */

var should = require('chai').should(); // eslint-disable-line

describe('Sass renderer', function () {
  var ctx = {
    config: {},
    theme: {
      config: {}
    }
  }

  var r = require('../lib/renderer')

  it('default: scss syntax', function () {
    var body = [
      '$color: red;',
      '.foo {',
      '  color: $color;',
      '}'
    ].join('\n')

    var result = r('scss').call(ctx, { text: body }, {});
    result.should.eql([
      '.foo{color:red}'
    ].join('\n'))
  })

  it('default: sass syntax', function () {
    var body = [
      '$color: red',
      '.foo',
      '  color: $color'
    ].join('\n')

    var result = r('sass').call(ctx, { text: body }, {})
    result.should.eql([
      '.foo{color:red}'
    ].join('\n'))
  })

  it('outputStyle expanded: scss syntax', function () {
    ctx.theme.config = { sass: { outputStyle: 'expanded' } }

    var body = [
      '$color: red;',
      '.foo {',
      '  color: $color;',
      '}'
    ].join('\n')

    var result = r('scss').call(ctx, { text: body }, {})
    result.should.eql([
      '.foo {',
      '  color: red;',
      '}'
    ].join('\n'))
  })

  it('outputStyle expanded: sass syntax', function () {
    ctx.theme.config = { sass: { outputStyle: 'expanded' } }

    var body = [
      '$color: red',
      '.foo',
      '  color: $color'
    ].join('\n')

    var result = r('sass').call(ctx, { text: body }, {})
    result.should.eql([
      '.foo {',
      '  color: red;',
      '}'
    ].join('\n'))
  })

  it('supports root config: scss syntax', function () {
    ctx.config = { sass: { outputStyle: 'compressed' } }
    ctx.theme.config = {}

    var body = [
      '$color: red;',
      '.foo {',
      '  color: $color;',
      '}'
    ].join('\n')

    var result = r('scss').call(ctx, { text: body }, {})
    result.should.eql([
      '.foo{color:red}'
    ].join('\n'))
  })

  it('supports root config: sass syntax', function () {
    ctx.config = { sass: { outputStyle: 'compressed' } }
    ctx.theme.config = {}

    var body = [
      '$color: red',
      '.foo',
      '  color: $color'
    ].join('\n')

    var result = r('sass').call(ctx, { text: body }, {})
    result.should.eql([
      '.foo{color:red}'
    ].join('\n'))
  })

})

/*!
 * promise-prototype <https://github.com/AndreasPizsa/promise-prototype>
 *
 * Copyright (c) 2016, Andreas Pizsa.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function (PromiseLib) {
  PromiseLib = PromiseLib || Promise;
  return PromiseLib.resolve(true).constructor.prototype;
};

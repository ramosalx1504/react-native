/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 * @oncall react_native
 */

import {tasks as apple} from './private/apple.js';
import {tasks as clean} from './private/clean.js';

export default {
  clean,
  apple,
};
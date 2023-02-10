/*
   Copyright 2017-2021 Norman Breau

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

module.exports = {
  preset: 'ts-jest',
  verbose: true,
  collectCoverage: process.argv.length === 2,
  testMatch: ['**/spec/**/*.spec.ts'],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75
    },
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/spec/'
  ],
  testRunner: "jest-jasmine2",
  transform: {
    '\\.ts$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig-tests.json'
      }
    ]
  }
};

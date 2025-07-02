
import {SetSessionVariableQuery} from '../../src/SetSessionVariableQuery';

describe('SetSessionVariableQuery', () => {
    it('SetSessionVariableQuery', async () => {
        let query: SetSessionVariableQuery = new SetSessionVariableQuery({
            name: 'testVar',
            value: 'testValue'
        });
        expect(query.getQuery(null)).toBe('SET SESSION `testVar` = :value');
    });

    describe('variable names', () => {
        let testCases: Record<string, boolean> = {
            'test': true,
            'test1': true,
            '1test': false,
            'test test': false,
            'test_123': true,
            '_test': true,
            'test$': false
        };

        for (let i in testCases) {
            it(`${i} should ${testCases[i] ? 'pass' : 'error'}`, () => {
                let query: SetSessionVariableQuery = new SetSessionVariableQuery({
                    name: i,
                    value: 'testValue'
                });

                let expectation: jest.JestMatchers<() => void> = expect(() => {
                    query.getQuery(null);
                });

                if (testCases[i]) {
                    expectation.not.toThrow();
                }
                else {
                    expectation.toThrow('Illegal Variable Name');
                }
            });
        }
    });

    it('getParametersForQuery', () => {
        let query: SetSessionVariableQuery = new SetSessionVariableQuery({
            name: 'testVar',
            value: 'testValue'
        });
        expect(query.getParametersForQuery()).toEqual({
            value: 'testValue'
        });
    });
});

jest.mock('../../src/model/User.model');
import UserFunc from '../../src/function/User.function';


/**
 * This should hold all the Test cases for the user function file.
 */
describe("Test cases for User function", () => {
    test('Find payload is undefined because there are no user that matches the query', async (done) => {
        const result = await UserFunc.Find({ username: 'john' });
        expect(result.payload).toBe(undefined);
        done();
    });
});
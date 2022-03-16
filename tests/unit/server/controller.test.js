import {describe, beforeEach, jest, test} from '@jest/globals';
import { Controller } from "../../../server/controller.js";
import { Service } from "../../../server/service.js";
import TestUtil from '../_util/testUtil';

describe('#Controller', () => {
    beforeEach(() => {
        jest.resetAllMocks()
        jest.clearAllMocks()
    })

    test('getFileStream - should return a file stream', async () => {
        const controller = new Controller()
        const filename = '/index.html'
        const expectedType = '.html'
        const mockFileStream = TestUtil.generateReadableStream(['data'])

        jest.spyOn(
            Service.prototype,
            Service.prototype.getFileStream.name
        ).mockResolvedValue({
            stream: mockFileStream,
            name: filename,
            type: expectedType
        })

        await controller.getFileStream(filename)
        expect(Service.prototype.getFileStream).toBeCalledWith(filename)
    })
})
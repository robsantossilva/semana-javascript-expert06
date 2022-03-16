import {jest, describe, expect, test, beforeEach} from '@jest/globals';
import {Service} from '../../../server/service.js';
import fs from "fs"
import fsPromises from 'fs/promises';
import { extname, join } from "path";
import TestUtil from '../_util/testUtil';
import config from '../../../server/config';

const {
    dir: {
        publicDirectory
    }
} = config

describe('#Service - test service', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
        jest.clearAllMocks()
    })

    test('createFileStream - should return a file stream', async () => {
        const service = new Service()
        const filename = '/index.html'
        const mockFileStream = TestUtil.generateReadableStream(['data'])

        jest.spyOn(
            fs,
            'createReadStream'
        ).mockReturnThis(mockFileStream)

        service.createFileStream(filename)

        expect(fs.createReadStream).toBeCalledWith(filename)
    })

    test('getFileInfo - should return file info', async () => {
        const service = new Service()
        const file = 'home/index.html'
        const fileType = '.html'
        const fullFilePath = join(publicDirectory, file)

        jest.spyOn(
            fsPromises,
            'access'
        ).mockReturnValue()

        const fileInfo = await service.getFileInfo(file)

        expect(fsPromises.access).toBeCalledWith(fullFilePath)
        expect(fileInfo).toEqual({
            type: fileType,
            name: fullFilePath
        })
    })

    test('getFileStream - should return file stream', async () => {
        const service = new Service()
        const file = 'home/index.html'
        const fileType = '.html'
        const fullFilePath = join(publicDirectory, file)
        const mockFileStream = TestUtil.generateReadableStream(['data'])

        jest.spyOn(
            service,
            'getFileInfo'
        ).mockResolvedValue({
            name: file,
            type: fileType
        })

        jest.spyOn(
            service,
            'createFileStream'
        ).mockReturnThis(mockFileStream)

        const fileStream = await service.getFileStream(file)

        expect(service.getFileInfo).toBeCalledWith(file)
    })
})
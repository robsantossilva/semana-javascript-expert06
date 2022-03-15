import {
    jest
} from '@jest/globals';
import {
    Readable,
    Writable
} from 'stream';

export default class TestUtil {

    static generateReadableStream(data) {
        return new Readable({
            read() {
                for(const item of data){
                    this.push(item)
                }

                this.push(null)
            }
        })
    }

    static defaultHandleParams() {
        const data = {
            request: {
                headers: {},
                method: '',
                url: ''
            },
            response: {
                writeHead: jest.fn(),
                end: jest.fn()
            }
        }
    }
}
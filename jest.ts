declare namespace jest {
    interface Matchers<R> {
        toBeType: (type: 'object' | 'array' | 'function' | 'number' | 'string' | 'undefined') => void;
    }
    interface Expect {
        toBeType: (type: 'object' | 'array' | 'function' | 'number' | 'string' | 'undefined') => void;
    }
}

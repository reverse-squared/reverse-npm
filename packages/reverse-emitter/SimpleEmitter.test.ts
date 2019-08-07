import { SimpleEmitter } from './SimpleEmitter';

describe('SimpleEmitter', () => {
  it('Can bind events', () => {
    const emitter = new SimpleEmitter();

    const cb1 = jest.fn();
    const cb2 = jest.fn();

    emitter.addListener(cb1);
    emitter.emit();
    emitter.addListener(cb2);
    emitter.emit();

    expect(cb1).toBeCalledTimes(2);
    expect(cb2).toBeCalledTimes(1);
  });
  it('Can be unbound', () => {
    const emitter = new SimpleEmitter();

    const cb1 = jest.fn();
    const cb2 = jest.fn();

    emitter.addListener(cb1);
    emitter.emit();
    emitter.addListener(cb2);
    emitter.emit();

    expect(cb1).toBeCalledTimes(2);
    expect(cb2).toBeCalledTimes(1);

    emitter.removeListener(cb1);

    emitter.emit();

    expect(cb1).toBeCalledTimes(2);
    expect(cb2).toBeCalledTimes(2);
  });
  it('Remove all listeners', () => {
    const emitter = new SimpleEmitter();

    const cb1 = jest.fn();
    const cb2 = jest.fn();

    emitter.addListener(cb1);
    emitter.emit();
    emitter.addListener(cb2);
    emitter.emit();

    expect(cb1).toBeCalledTimes(2);
    expect(cb2).toBeCalledTimes(1);

    emitter.removeAllListeners();

    emitter.emit();

    expect(cb1).toBeCalledTimes(2);
    expect(cb2).toBeCalledTimes(1);
  });
  it('Passes arguments', () => {
    const emitter = new SimpleEmitter();

    const cb = jest.fn();

    emitter.addListener(cb);
    emitter.emit('arg1', 'arg2', 'arg3', 'arg4');

    expect(cb).toBeCalledWith('arg1', 'arg2', 'arg3', 'arg4');
  });
  it('.on and .off alias', () => {
    const emitter = new SimpleEmitter();

    const cb1 = jest.fn();
    const cb2 = jest.fn();

    emitter.on(cb1);
    emitter.emit();
    emitter.on(cb2);
    emitter.emit();

    expect(cb1).toBeCalledTimes(2);
    expect(cb2).toBeCalledTimes(1);

    emitter.off(cb1);

    emitter.emit();

    expect(cb1).toBeCalledTimes(2);
    expect(cb2).toBeCalledTimes(2);
  });
})

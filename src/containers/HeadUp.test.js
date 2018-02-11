import { toggleMenu, activateSpace } from '../actions';
import { mapDispatchToProps } from './HeadUp';

describe('#mapDispatchToProps', () => {
  let result;
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    result = mapDispatchToProps(dispatch);
  });

  test('dispatch toggleMenu action', () => {
    result.onToggleMenu();

    expect(dispatch).toBeCalledWith(toggleMenu());
  });

  test('dispatch activateSpace action on specific nav item', () => {
    result.onSelectMenuItem('first');

    expect(dispatch).toBeCalledWith(activateSpace('first'));
  });

  test('dispatch activateSpace action on previous nav item', () => {
    result.onPrevDashboard('third');

    expect(dispatch).toBeCalledWith(activateSpace('third'));
  });

  test('dispatch activateSpace action on next nav item', () => {
    result.onNextDashboard('second');

    expect(dispatch).toBeCalledWith(activateSpace('second'));
  });
});

import { toggleMenu, activateDashboard } from '../actions';
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

  test('dispatch activateDashboard action on specific nav item', () => {
    result.onSelectMenuItem('first');

    expect(dispatch).toBeCalledWith(activateDashboard('first'));
  });

  test('dispatch activateDashboard action on previous nav item', () => {
    result.onPrevDashboard('third');

    expect(dispatch).toBeCalledWith(activateDashboard('third'));
  });

  test('dispatch activateDashboard action on next nav item', () => {
    result.onNextDashboard('second');

    expect(dispatch).toBeCalledWith(activateDashboard('second'));
  });
});

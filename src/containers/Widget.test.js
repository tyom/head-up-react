import { activateCell, activateCellSettings } from '../actions';
import { mapDispatchToProps } from './Widget';

describe('#mapDispatchToProps', () => {
  let result;
  const dispatch = jest.fn();
  const closestSpy = isButton => jest.fn(() => !!isButton);

  const getEventStub = isButton => ({
    target: {
      closest: isButton ? closestSpy(true) : closestSpy(),
    },
  });
  const ownProps = {
    size: '1:2',
    title: 'Rhea',
  };

  beforeEach(() => {
    jest.resetAllMocks();
    result = mapDispatchToProps(dispatch, ownProps);
  });

  test('dispatch activate cell action', () => {
    const event = getEventStub(false);
    result.onClick(event);

    expect(dispatch).toBeCalledWith(activateCell(ownProps.title));
  });

  test('not activate cell action if clicked on a button', () => {
    const event = getEventStub(true);
    result.onClick(event);

    expect(event.target.closest).toBeCalledWith('.menuBtn');
    expect(dispatch).not.toBeCalled();
  });

  test('dispatch activate cell settings action', () => {
    result.onSettingsClick('Rhea');

    expect(dispatch).toBeCalledWith(activateCellSettings(ownProps.title));
  });
});

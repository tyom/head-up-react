import React from 'react';
import mousetrap from 'mousetrap';
import HeadUp from './';

const onToggleMenuSpy = jest.fn();
const onSelectMenuItemSpy = jest.fn();
const onPrevDashboardSpy = jest.fn();
const onNextDashboardSpy = jest.fn();

jest.mock('mousetrap', () => ({
  bind: jest.fn().mockReturnThis(),
  unbind: jest.fn().mockReturnThis(),
}));

function getDashboards(numberOfDashboards = 0, includeInvalid = false) {
  const dashboardsArray = [...Array(numberOfDashboards).keys()].map(i => (
    <div name={`dashboard #${i + 1}`} key={i + 1}>
      <div>cell #{i + 1}.1</div>
      <div>cell #{i + 1}.2</div>
    </div>
  ));

  if (includeInvalid) {
    dashboardsArray.unshift(<div name="dashboard #0" key={0} />);
  }

  return dashboardsArray;
}

const oneDashboard = <HeadUp>{getDashboards(1)}</HeadUp>;
const twoDashboards = <HeadUp>{getDashboards(2)}</HeadUp>;
const twoDashboardsWithInvalid = <HeadUp>{getDashboards(2, true)}</HeadUp>;

describe('HeadUp: structure', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("* doesn't render", () => {
    test('HeadUp when no children are given', () => {
      const component = shallow(<HeadUp />);
      expect(component).toMatchSnapshot();
    });

    test('Menu when only only one dashboard', () => {
      const component = shallow(oneDashboard).find('Menu');
      expect(component).toMatchSnapshot();
    });
  });

  describe('* renders', () => {
    test('dashboards with children', () => {
      const component = shallow(twoDashboards).find('Dashboard');
      expect(component).toMatchSnapshot();
    });

    test('dashboards ignoring invalid', () => {
      const dashboards = shallow(twoDashboardsWithInvalid).find('Dashboard');
      expect(dashboards).toHaveLength(2);
    });

    test('renders Menu with dashboard layout', () => {
      const component = shallow(twoDashboards).find('Menu');
      expect(component).toMatchSnapshot();
    });
  });
});

describe('HeadUp: behaviour', () => {
  describe('* navigation', () => {
    let component;

    const threeDashboardsSecondActive = (
      <HeadUp
        activeDashboard="dashboard #2"
        onPrevDashboard={onPrevDashboardSpy}
        onNextDashboard={onNextDashboardSpy}
        onSelectMenuItem={onSelectMenuItemSpy}
        onToggleMenu={onToggleMenuSpy}
      >
        {getDashboards(3)}
      </HeadUp>
    );

    beforeEach(() => {
      jest.clearAllMocks();
      component = shallow(threeDashboardsSecondActive);
    });

    test('getting current dashboard index', () => {
      const index = component.instance().getCurrentIndex();

      expect(index).toEqual(1);
    });

    test('getting previous dashboard name', () => {
      const name = component.instance().getPrevDashboardName();

      expect(name).toEqual('dashboard #1');
    });

    test('getting next dashboard name', () => {
      const name = component.instance().getNextDashboardName();

      expect(name).toEqual('dashboard #3');
    });

    test('calling #onPrevDashboard prop with previous dashboard name', () => {
      component.instance().selectPrevDashboard();

      expect(onPrevDashboardSpy).toBeCalledWith('dashboard #1');
    });

    test('calling #onPrevDashboard prop with the last dashboard name after the first (cycle)', () => {
      component.setProps({ activeDashboard: 'dashboard #1' });
      component.instance().selectPrevDashboard();

      expect(onPrevDashboardSpy).toBeCalledWith('dashboard #3');
    });

    test('calling #onNextDashboard prop', () => {
      component.instance().selectNextDashboard();

      expect(onNextDashboardSpy).toBeCalled();
    });

    test('calling #onNextDashboard prop with the first dashboard name after the last (cycle)', () => {
      component.setProps({ activeDashboard: 'dashboard #3' });
      component.instance().selectNextDashboard();

      expect(onNextDashboardSpy).toBeCalledWith('dashboard #1');
    });


    test('binding keyboard shortcuts', () => {
      expect(mousetrap.bind.mock.calls).toEqual([
        ['h', expect.any(Function)],
        [['j', 'ctrl+up'], expect.any(Function)],
        [['k', 'ctrl+down'], expect.any(Function)],
      ]);
    });

    test('unbinding keyboard shortcuts', () => {
      component.instance().componentWillUnmount();

      expect(mousetrap.unbind.mock.calls).toEqual([
        ['h'],
        [['j', 'ctrl+up']],
        [['k', 'ctrl+down']],
      ]);
    });
  });
});

import React from 'react';
import Dashboard from './';

const scrollIntoViewSpy = jest.fn();

function mountComponent(props) {
  const component = mount(<Dashboard {...props}>content</Dashboard>);
  const componentInstance = component.instance();

  componentInstance._dashboard = {
    scrollIntoView: scrollIntoViewSpy,
  };

  return componentInstance;
}

describe('Dashboard: structure', () => {
  let rendered;

  afterEach(() => {
    expect(rendered).toMatchSnapshot();
  });

  test('default component', () => {
    rendered = render(<Dashboard name="my dashboard">content</Dashboard>);
  });

  test('active state', () => {
    rendered = render(
      <Dashboard name="my dashboard" isActive={true}>
        Active dashboard
      </Dashboard>
    );
  });
});

describe('Dashboard: behaviour', () => {
  let componentInstance;

  describe('scrolling', () => {
    beforeEach(() => {
      componentInstance = mountComponent({
        name: 'my dashboard',
        isActive: true,
      });
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    test('scroll into view on mount', () => {
      componentInstance.componentDidMount();
      expect(scrollIntoViewSpy).toBeCalledWith(undefined);
    });

    test('scroll into view on update', () => {
      componentInstance.componentDidUpdate();
      expect(scrollIntoViewSpy).toBeCalledWith({ behavior: 'smooth' });
    });
  });

  test('scrolling only for active', () => {
    componentInstance = mountComponent({
      name: 'my dashboard',
      isActive: false,
    });

    componentInstance.componentDidUpdate();
    expect(scrollIntoViewSpy).not.toBeCalled();
  });
});

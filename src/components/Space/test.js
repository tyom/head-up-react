import React from 'react';
import Space from './';

const scrollIntoViewSpy = jest.fn();

function mountComponent(props) {
  const component = mount(<Space {...props}>content</Space>);
  const componentInstance = component.instance();

  componentInstance._dashboard = {
    scrollIntoView: scrollIntoViewSpy,
  };

  return componentInstance;
}

describe('Space: structure', () => {
  let rendered;

  afterEach(() => {
    expect(rendered).toMatchSnapshot();
  });

  test('default component', () => {
    rendered = render(<Space name="my dashboard">content</Space>);
  });

  test('active state', () => {
    rendered = render(
      <Space name="my dashboard" isActive={true}>
        Active dashboard
      </Space>
    );
  });
});

describe('Space: behaviour', () => {
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

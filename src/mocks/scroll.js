export default function scroll() {
  Object.defineProperty(window, 'scroll', {
    writable: true,
    value: jest.fn(() => {
      return {
        top: 0,
        behaviour: 'smooth',
      };
    }),
  });
}

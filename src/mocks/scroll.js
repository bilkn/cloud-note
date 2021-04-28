export default function scroll(obj) {
  Object.defineProperty(obj, 'scroll', {
    writable: true,
    value: jest.fn(() => {
      return {
        top: 0,
        behaviour: 'smooth',
      };
    }),
  });
}

import accordion from './Accordions';

test('Accordion is working', () => {
    expect(accordion).toMatchSnapshot();
});
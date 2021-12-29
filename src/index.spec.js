import index from './App';

test('Everthing is working', () => {
    expect(index).toMatchSnapshot();
    
});
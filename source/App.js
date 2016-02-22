import React from 'react';
class Hello extends React.Component {
    render() {
    	var place = "hello world 1";
        return ( < h1 > {place} < /h1>);
    }
}
React.render(<Hello/>, document.getElementById('root'));
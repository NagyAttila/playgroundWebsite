class Menu extends React.Component {
    items = ['ME', 'BLOG', 'PLAYGROUND'];

    render() {
        let element = React.createElement( 'div', {id:"menu"},
                React.createElement( 'ul', null,
                    this.items.map((x,i) => React.createElement( 'li', {key:i}, x))
                    )
                );
        return element;
    }
}

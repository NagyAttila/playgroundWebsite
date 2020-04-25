class Menu extends React.Component {
    items = ['ME', 'BOOKS', 'PLAYGROUND'];

    render() {
        let element = React.createElement( 'div', {id:"menu"},
                React.createElement( 'ul', null,
                    this.items.map((x,i) =>
                        React.createElement( 'li', {key:i, onClick:this.props.onClick}, x))
                    )
                );
        return element;
    }
}

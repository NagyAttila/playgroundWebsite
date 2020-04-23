class Blog extends React.Component {
    html = `<p>Here is going to be a lot of text about books I like.</p>`;
                                           
    render() {
        return React.createElement('div', {id: 'blog'},
                React.createElement('div', {dangerouslySetInnerHTML: {__html: this.html}}, null)
               );
    }
}

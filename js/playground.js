class Playground extends React.Component {
    html = `<p>Here is going to be some tools that I developed and wanted to preserve.</p>`;
                                           
    render() {
        return React.createElement('div', {id: 'playground'},
                React.createElement('div', {dangerouslySetInnerHTML: {__html: this.html}}, null),
                React.createElement(Pomodoro, null, null)
               );
    }
}

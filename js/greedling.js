class Greedling extends React.Component {
    src = 'https://vignette.wikia.nocookie.net/kingdomthegame/images/6/64/Greedling_h.gif/revision/latest?cb=20190510224339';
    gif = "Greedling_h.gif";
    dataSrc = 'https://vignette.wikia.nocookie.net/kingdomthegame/images/6/64/Greedling_h.gif/revision/latest?cb=20190510224339';

    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
                'div',
                {style: {marginLeft : this.props.marginLeft}, id:"greedling"},
                React.createElement(
                    'img',
                    {
                        src: this.src,
                        'data-image-key': this.gif,
                        'data-image-name': this.gif,
                            'data-src': this.dataSrc,
                        width: "80",
                        height: "60"
                    }
                    )
                );
    }
}


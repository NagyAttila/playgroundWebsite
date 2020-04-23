class Main extends React.Component {
    stepSize = 5;
    rightEnd = 275;
    leftEnd = 15;
    constructor(props) {
        super(props);
        this.state = {marginLeft : this.leftEnd, currentMenuElement: Welcome,
            menuOpen: false, lastMenu: "WELCOME"};
        this._handleKeyDown = this._handleKeyDown.bind(this);
    }

    _mapMenuNameToClass(name) {
        switch (name) {
            case "ME": return Me;
            case "BLOG": return Blog;
            case "PLAYGROUND": return Playground;
        }
    }

    _handleKeyDown(e) {
        let newKey = e.keyCode;
        switch(newKey) {
            case 39:
            case 68:
                this.setState({marginLeft : this.state.marginLeft +=
                                            this.state.marginLeft > this.rightEnd ?
                                            0 : this.stepSize});
                break;

            case 37:
            case 65:
                this.setState({marginLeft : this.state.marginLeft +=
                                            this.state.marginLeft > this.leftEnd ?
                                            -this.stepSize : 0});
                break;

            case 13:
                let mainWrapperElement = document.getElementById("mainWrapper");

                let menuElement = mainWrapperElement.children[1];
                let ulElement = menuElement.children[0];
                let liElements = ulElement.children;
                let liOffset = menuElement.offsetLeft + ulElement.offsetLeft;

                let greedlingOffset = liOffset + liElements[0].offsetLeft;
                let greedlingPos = greedlingOffset + this.state.marginLeft;
                    for (let element of liElements) {
                        let leftPos = element.offsetLeft + liOffset;
                        let rightPos = leftPos + element.offsetWidth;
                        if ( greedlingPos > leftPos && greedlingPos < rightPos ) {
                            let menuName = element.innerText;
                            let menuType = this._mapMenuNameToClass(menuName);
                            if (this.state.menuOpen === false || this.state.lastMenu !== menuName) {
                                this.setState({ currentMenuElement: menuType,
                                                menuOpen: true,
                                                lastMenu: menuName });
                            } else {
                                this.setState({ currentMenuElement: Empty,
                                                menuOpen: false,
                                                lastMenu: menuName});
                            }
                            break;
                        }
                    }
                break;
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this._handleKeyDown, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this._handleKeyDown, false);
    }


    render() {
        return React.createElement('div', {id: 'mainWrapper'},
            React.createElement(Greedling, {marginLeft: this.state.marginLeft}, null),
            React.createElement(Menu, null, null),
            React.createElement(this.state.currentMenuElement, null, null)
            );
    }
}
ReactDOM.render(React.createElement(Main),
                document.getElementById('main'));

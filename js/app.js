
class ToggleBox extends React.Component {
    static defaultProps = {
        isVisible: true
    }

    constructor(props) {
        super(props);

        this.toggleVisibility = this.toggleVisibility.bind(this);

        this.state = {
            isVisible: this.props.isVisible
        }

    }

    toggleVisibility() {
        // this.setState(previous => { return { isVisible: !previous.isVisible }; });
        this.setState(previous => ({ isVisible: !previous.isVisible }),
            () => console.log(`Updated state ${this.state.isVisible}`));
    }

    render() {
        const boxClass = "boxclass" + (!this.state.isVisible ? " hidden" : "");
        return (
            <div>
                <input onClick={this.toggleVisibility} type='button' value='Show/Hide'></input>
                <div className={boxClass}></div>
            </div>
        )
    }
}

class ColorPanel extends React.Component {

    render() {
        return (
            <article>
                <h2>Which colors do you want?</h2>
                <h5>(disable with a click)</h5>
                <nav id='colorsNav'>
                    <ColorInput color='Green' />
                    <ColorInput color='Red' disabled={true} />
                </nav>
            </article>
        )
    }
}

class ColorInput extends React.Component {
    static defaultProps = {
        color: "Define caption",
        disabled: false,
        processClick: function (id, disabled, componentThis) {
            console.log(`Default processing ${id} is ${disabled} in ${componentThis}`);
        }
    }

    constructor(props) {
        super(props);
        this.elementClicked = this.elementClicked.bind(this);
        this.state = { disabled: this.props.disabled };
    }

    elementClicked() {
        this.setState(prev => {
            const newValue = !prev.disabled;
            this.props.processClick(this.props.color, newValue, this);
            return { disabled: newValue };
        });
    }

    render() {
        const elementClass = 'colorinput' + (this.state.disabled ? ' unwanted' : '');
        return (
            <label onClick={this.elementClicked} className={elementClass}>{this.props.color}</label>
        )
    }

    toString() {
        return `ColorInput component with ${this.props.color}`;
    }
}

class MainWindow extends React.Component {
    render() {
        return (
            <section>
                <ToggleBox isVisible={false} />
                <ColorPanel />
            </section>
        )
    }
}

ReactDOM.render(
    <MainWindow />,
    document.getElementById('app')
);

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

    constructor(props) {
        super(props);
        this.itemUpdated = this.itemUpdated.bind(this);
        this.state = {
            items: [{
                color: "Green",
                disabled: false
            },
            {
                color: "Red",
                disabled: true
            },
            {
                color: "Yellow",
                disabled: false
            },
            {
                color: "Gray",
                disabled: false
            },
            {
                color: "Lightgray",
                disabled: false
            }]
        }
    }

    itemUpdated(id, newDisabled) {
        this.setState(prev => {
            const newState = prev.items.map(item => {
                if (id === item.color) {
                    return {
                        color: item.color,
                        disabled: newDisabled
                    };
                } else {
                    return item;
                }

            });
            return { items: newState };
        });
    }

    render() {
        return (
            <article>
                <h2>Which colors do you want?</h2>
                <h5>(disable with a click)</h5>
                <nav id='colorsNav'>
                    {
                        this.state.items.map(
                            item => {
                                return (<ColorInput key={item.color} color={item.color} disabled={item.disabled} processClick={this.itemUpdated} />);
                            }
                        )
                    }
                </nav>
                <label>You picked the following colors:</label>
                <ul>
                    {
                        this.state.items
                            .filter(item => !item.disabled)
                            .map(picked => (<li key={picked.color}>{picked.color}</li>))
                    }
                </ul>
            </article>
        )
    }
}

class ColorInput extends React.Component {
    static defaultProps = {
        color: "Define caption",
        disabled: false,
        processClick: function (id, disabled) {
            console.log(`Default processing ${id} is ${disabled}`);
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
            this.props.processClick(this.props.color, newValue);
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
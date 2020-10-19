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


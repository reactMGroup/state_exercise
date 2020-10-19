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
    }

    elementClicked() {
        this.props.processClick(this.props.color, !this.props.disabled);
    }

    render() {
        const elementClass = 'colorinput' + (this.props.disabled ? ' unwanted' : '');
        return (
            <label onClick={this.elementClicked} className={elementClass}>{this.props.color}</label>
        )
    }

    toString() {
        return `ColorInput component with ${this.props.color} ${this.props.disabled}`;
    }
}

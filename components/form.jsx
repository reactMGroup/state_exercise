class FormComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: '', company: '' };
        this.updateField = this.updateField.bind(this);
    }

    updateField(fieldID, event) {
        const newvalue = event.target.value;
        this.setState({ [fieldID]: newvalue });
    }

    render() {
        return (<article>
            <h2>Enter name and company</h2>
            <label htmlFor="name">Name</label>
            <input onChange={event => this.updateField('name', event)} id='name' type='text' placeholder='Your name' />
            <label htmlFor="company">Name</label>
            <input onChange={event => this.updateField('', event)} id='company' type='text' placeholder='Company' />
            <p>You entered: {this.state.name} works at {this.state.company} </p>
        </article>)
    }
}
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
        const colorInputs =
         this.state.items.map(item =>(
                <ColorInput 
                    key={item.color} 
                    color={item.color} 
                    disabled={item.disabled} 
                    processClick={this.itemUpdated} 
                />)
                );
        return (
            <article>
                <h2>Which colors do you want?</h2>
                <h5>(disable with a click)</h5>
                <nav id='colorsNav'>{colorInputs}</nav>
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

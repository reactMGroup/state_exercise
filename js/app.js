
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
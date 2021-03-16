
const data = [
    {filename: "cuhk-2013.jpg", year:
    2013, remarks: "Sunset over CUHK"},
    {filename: "cuhk-2017.jpg", year:
    2017, remarks: "Bird's-eye view of CUHK"},
    {filename: "sci-2013.jpg", year:
    2013, remarks: "The CUHK Emblem"},
    {filename: "shb-2013.jpg", year:
    2013, remarks: "The Engineering Buildings"},
    {filename: "stream-2009.jpg", year:
    2009, remarks: "Nature hidden in the campus"},
    ];

class App extends React.Component
{
    render() {
        return (
            <>
            <Header name={this.props.name}/>
            <Main />
            </> 
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <header className="bg-warning">
            <h1 className="display-4 textcenter">{this.props.name}</h1>
            </header>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <main className="container">
                <FileCard/>
            </main>
        );
    }
}

class FileCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { selected: -1 };
    }

    handleMouseOver(index, e) {
        if(this.state.selected != index)
            this.setState({selected: index});
        else
            this.setState({selected: -1});

    }

    render() {
        return (
            
            data.map((file, index) =>(
                <div key={index} onMouseOver={(e) => this.handleMouseOver(index,e)} className="card d-inline-block m-2" style={{width: this.state.selected==index ? 220 : 200}}>
                    <img src={"images/"+file.filename} alt="file.remarks" className="w-100"/>
                    <div className="card-body">
                        <h6 className="card-title">{file.filename}</h6>
                        <p className="card-text">Year: {file.year}</p>
                        { this.state.selected==index &&
                        <p className="cardtext">{file.remarks}</p> }
                    </div>
                </div>
            ))
        );
    }
}


ReactDOM.render(<App name="CUHK Pictures"/>, document.querySelector("#app"));
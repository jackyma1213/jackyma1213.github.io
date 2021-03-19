const {useRouteMatch, useParams, useLocation} = ReactRouterDOM;
const {BrowserRouter, Link, Route, Switch} = ReactRouterDOM;
const Router = BrowserRouter;
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
            <Router>
            <div>
            <ul>
                <LongLink
                activeOnlyWhenExact={true}
                to="/"
                label="Home"
                />
                <LongLink to="/file" label="Images" />
                <LongLink to="/slideshow" label="Slideshow" />
                
                </ul>
            <hr/>

            <Switch>
                <Route exact path={this.props.location.pathname +"/"} component={Home} /> 
                <Route path="/file" component={Images} /> 
                <Route path="/slideshow" component={Slideshow} /> 
                <Route path="/file/:id" component={File} />  
                <Route path="*" component={NoMatch} />
            </Switch>
            </div>
            </Router>
            {/* <Main /> */}
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


class Home extends React.Component {
    render() {
        return <h2>Home</h2>;
    }
}

class Images extends React.Component {
    render() {
        return (
            <>
            <h2>Images</h2>
            <Main/>
            </>
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
        <Router>
            {
            data.map((file, index) =>(
                <div key={index} onMouseOver={(e) => this.handleMouseOver(index,e)} className="card d-inline-block m-2" style={{width: this.state.selected==index ? 220 : 200}}>
                    <img src={"/images/"+file.filename} alt={file.remarks} className="w-100"/>
                    <div className="card-body">
                    <Link to={"/file/"+index}><h6 className="card-title">{file.filename}</h6></Link>
                        <p className="card-text">Year: {file.year}</p>
                        { this.state.selected==index &&
                        <p className="cardtext">{file.remarks}</p> }
                    </div>
                </div>
            ))
            }

            <Switch> 
            <Route path="/file/:id" component={File} />  
            </Switch>
        </Router>
        );
    }
}


function File() {
    let { id } = useParams();
    return (
        <>
        <img src={"/images/"+data[id].filename} alt={data[id].remarks} className="w-100"/> 
        <h6>{data[id].filename}</h6>
        <p>Year: {data[id].year}</p>
        <p>{data[id].remarks}</p> 
        </>
    );
}


class Slideshow extends React.Component{

    render(){
        return (
            <>
            <h2>SlideShow</h2>
            <SlideshowMain/>
            </>
        );
    }

}

class SlideshowMain extends React.Component{


    constructor(props) {
        super(props);
        this.state = { currentImageID: 0, currentInterval: 1000, interval: null };
    }

    

    handleClick(action, e){
        switch(action){
            case 1:
                clearInterval(this.state.interval);
                this.state.interval = setInterval(()=>{
                    if(this.state.currentImageID != 4)
                        this.setState({currentImageID: this.state.currentImageID+1 });
                    else
                        this.setState({currentImageID: 0});
                }, this.state.currentInterval);
                break;
            case 2:
                clearInterval(this.state.interval);
                break;
            case 3:
                this.setState({currentInterval: this.state.currentInterval*2 });
                clearInterval(this.state.interval);
                this.state.interval = setInterval(()=>{
                    if(this.state.currentImageID != 4)
                        this.setState({currentImageID: this.state.currentImageID+1 });
                    else
                        this.setState({currentImageID: 0});
                }, this.state.currentInterval);
                break;
            case 4:
                this.setState({currentInterval: this.state.currentInterval/2 });
                clearInterval(this.state.interval);
                this.state.interval = setInterval(()=>{
                    if(this.state.currentImageID != 4)
                        this.setState({currentImageID: this.state.currentImageID+1 });
                    else
                        this.setState({currentImageID: 0});
                }, this.state.currentInterval);
                break;
        }
    }


    render(){
        return(
            <main className="container">
            <button onClick={(e)=> this.handleClick(1, e)}>Start</button>
            <button onClick={(e)=> this.handleClick(2, e)}>Stop</button>
            <button onClick={(e)=> this.handleClick(3, e)}>Slower</button>
            <button onClick={(e)=> this.handleClick(4, e)}>Faster</button>
                
            <div className="carousel slide">
                <img src={"images/"+data[this.state.currentImageID].filename} className="w-100"/>
            </div>
            </main>

        );
    }
}


function LongLink({label, to, activeOnlyWhenExact}) {
    let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
    });
    return (
    <li className={match ? "active" : ""}>
    {match && "> "}
    <Link to={to}>{label}</Link>
    </li>
    );
}


function NoMatch() {
    let location = useLocation();
    return (
    <div>
    <h3>
    No match for <code>{location.pathname}</code>
    </h3>
    </div>
    );
}

ReactDOM.render(<App name="CUHK Pictures"/>, document.querySelector("#app"));
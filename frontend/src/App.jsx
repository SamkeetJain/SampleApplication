import "./App.less";
import {HomePage} from "./pages";
import {Layout} from "antd";
import {Component} from "react";


const {Content} = Layout;

class App extends Component {
    render() {
        return (
            <div className="App">
                    <Layout className="site-layout">
                        <Content className="site-layout-background">
                            <HomePage/>
                        </Content>
                    </Layout>
            </div>
        );
    }
}

export default App;

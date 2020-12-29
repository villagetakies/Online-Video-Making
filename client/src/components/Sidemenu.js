import React,{Component} from 'react'
import "./Sidemenu.css";


class Sidemenu extends Component{

    constructor(props) {
        super(props);
        
        this.state = {
            Items: [
                {
                  key: 0,
                },
                {
                    key: 1,
                },
                {
                  key: 2,
                },
                {
                  key: 3,
                },
                {
                   key: 4,
                }
              ],
            activeLink: null
        };
    }
  

    
    toggleActive(index) {
        this.setState({activeLink: this.state.Items[index]});
    }
    
      render() {
        return (
            <div className="sideMenu">
                <div className="sidemenuContainer"></div>

                    <div id="group1" key={1}  className={(this.state.activeLink === this.state.Items[1])? "activeclass":null} onClick={() => this.toggleActive(1)}>                
                        <span className="edit">EDIT</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="iconEdit"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                    </div> 
                    <div id="group2" key={2} className={(this.state.activeLink === this.state.Items[2])? "activeclass":null} onClick={() => this.toggleActive(2)}>
                        <span className="templates">TEMPLATES</span>
                        <svg preserveAspectRatio="none" viewBox="9.21868874570464e-8 2.249999523162842 34.40238952636719 30.74334716796875" className="iconAwesomeColumns">
                            <path d="M 31.17717170715332 2.250000238418579 L 3.225223541259766 2.250000238418579 C 1.443959474563599 2.250000238418579 9.21868874570464e-08 3.724719524383545 9.21868874570464e-08 5.543929576873779 L 9.21868874570464e-08 29.69939994812012 C 9.21868874570464e-08 31.51860809326172 1.443959474563599 32.99333572387695 3.225223541259766 32.99333572387695 L 31.17717170715332 32.99333572387695 C 32.95843124389648 32.99333572387695 34.40238952636719 31.51860809326172 34.40238952636719 29.69939994812012 L 34.40238952636719 5.543929576873779 C 34.40238952636719 3.724719524383545 32.95843124389648 2.250000238418579 31.17717170715332 2.250000238418579 Z M 15.05104446411133 28.6014232635498 L 4.300298690795898 28.6014232635498 L 4.300298690795898 11.03380870819092 L 15.05104446411133 11.03380870819092 L 15.05104446411133 28.6014232635498 Z M 30.10208892822266 28.6014232635498 L 19.35134315490723 28.6014232635498 L 19.35134315490723 11.03380870819092 L 30.10208892822266 11.03380870819092 L 30.10208892822266 28.6014232635498 Z"  /></svg>
                    </div>

                    <div id="group3" key={3} className={(this.state.activeLink === this.state.Items[3])? "activeclass":null} onClick={() => this.toggleActive(3)}> 
                        <span className="text">TEXT</span>
                        <svg preserveAspectRatio="none" viewBox="0 0 29.609512329101562 29.200225830078125" className="iconOpenText"><path d="M 0 0 L 0 7.300059795379639 L 1.850594520568848 7.300059795379639 C 1.850594520568848 5.292543888092041 3.516128778457642 3.650029897689819 5.551782608032227 3.650029897689819 L 11.10356521606445 3.650029897689819 L 11.10356521606445 23.72519302368164 C 11.10356521606445 24.74720764160156 10.28930473327637 25.55021095275879 9.252972602844238 25.55021095275879 L 7.402378082275391 25.55021095275879 L 7.402378082275391 29.20023918151855 L 22.20713043212891 29.20023918151855 L 22.20713043212891 25.55021095275879 L 20.35654067993164 25.55021095275879 C 19.32020568847656 25.55021095275879 18.50594520568848 24.74720764160156 18.50594520568848 23.72519302368164 L 18.50594520568848 3.650029897689819 L 24.05772590637207 3.650029897689819 C 26.09337997436523 3.650029897689819 27.75891494750977 5.292543888092041 27.75891494750977 7.300059795379639 L 29.60951232910156 7.300059795379639 L 29.60951232910156 0 L 0 0 Z"  /></svg>
                    </div>
                    <div id="group4" key={4} className={(this.state.activeLink === this.state.Items[4])? "activeclass":null} onClick={() => this.toggleActive(4)}>                
                        <span className="uploads">UPLOADS</span>    
                        <svg xmlns="http://www.w3.org/2000/svg" className="iconUpload" viewBox="0 0 24 24" ><path d="M0 0h24v24H0z" fill="none"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
                    </div>
            </div>
        );
    }
}

export default Sidemenu;
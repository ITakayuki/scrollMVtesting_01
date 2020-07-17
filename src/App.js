import React from 'react';
import './App.scss';
class App extends React.Component {
  state = {
    scrollTop: 0,
    pagePos: false
  }
  componentDidMount(){
    console.log(document.getElementById("text").getBoundingClientRect(),document.getElementById("text").clientHeight);
    document.body.style.overflow = "hidden";
    document.getElementById("text").style.height = `${document.getElementById("text").clientHeight + document.getElementById("Scroller").clientHeight}px`
    // document.getElementById("Mv").style.height = `${document.getElementById("text").clientHeight + document.getElementById("Scroller").clientHeight}px`;
    document.getElementById("Scroller").style.overflow = "hidden";
    this.setState({scrollTop: document.getElementById("text").getBoundingClientRect().bottom});
  }
  onScroller(num){
    this.setState({scrollTop: num});
    if(num ===  0 ){
      if(this.state.pagePos === false){
        document.getElementById("Mv").style.overflow  = "hidden";
      }else{
        document.getElementById("Mv").style.overflow  = "scroll";
      }
      // document.getElementById("Mv").style.backgroundAttachment = "fixed";
      document.getElementById("Scroller").style.overflow = "auto";
    }else if (num >= 1){
      // document.getElementById("Mv").style.backgroundAttachment = "fixed";
      this.setState({pagePos: false});
    }else if(num <= -1){
      // document.getElementById("Mv").style.overflow  = "hidden";
      this.setState({pagePos: true});
      console.log("TEXT");
    }
  }
  render(){
    var flags;
    if(this.state.pagePos === false){
      flags = (
          <h2>{this.state.scrollTop},FALSE!</h2>
        )
    }else{
      flags = (
        <div>
          <h2>{this.state.scrollTop},TRUE!</h2>
        </div>
        )
    }

    return (
      <div className="App">
        <div className="text-wrapper" >
          <div className="scroller" onScroll={()=>{this.onScroller(document.getElementById("text").getBoundingClientRect().bottom - document.getElementById("Scroller").clientHeight)}} id="Scroller">
            <div class="mv"id="Mv">
              <p id="text">samplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesampleamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamp</p>
            </div>
            <h1 id="ttl">SAMPLE</h1>
            <p className="contant">ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー<br/>
            ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー<br/>
            ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
            </p>
          </div>
        </div>
        <h2>{flags}</h2>
      </div>
    );
  }
}

export default App;

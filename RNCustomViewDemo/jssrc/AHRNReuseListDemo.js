import React,{Component} from 'react';
import PropTypes from 'prop-types'
import ReactNative,{
    AppRegistry,
    requireNativeComponent,
    Text,
    View,
    Button,
    NativeModules,
    UIManager,
    findNodeHandle
} from 'react-native';
//RUTableView
import AHRNReuseListView from './AHRNReuseListView'
const ReuseListManager = NativeModules.ReuseListManager;


//cell1样式组件例子
class cell1 extends Component {
    render(){
        var data = this.props.data
        return (<View ><Text style={{width:300,height:30,paddingTop:12,marginLeft:50}}>我是Cell1样式的Cell{data.rowNum}</Text ></View>);
    }
}
//cell2样式组件例子
class cell2 extends Component {
    render(){
        return (<View><Text>我是Cell1样式的Cell</Text></View>);
    }
}

//列表header的组件定义
class header extends Component{
    render(){
        return (<View style={{width:400,height:30,backgroundColor:'yellow'}}><Text style={{paddingTop:8,marginLeft:100}}>我是header</Text></View>)
    }
}
// 列表footer的组件定义
class footer extends Component{
    render(){
        return (<View style={{width:400,height:30,backgroundColor:'orange'}}><Text style={{paddingTop:8,marginLeft:100}}>我是footer</Text></View>)
    }
}

//列表分组组件定义
class section extends Component{
    render(){
        return (<View  style={{idth:400,height:30,backgroundColor:'green'}}><Text style={{paddingTop:12,marginLeft:100}}>我是{this.props.section}号section</Text></View>)
    }
}
//列表分割线组件定义
class separator extends Component{
    render(){
        return(<View style={{marginLeft:10, marginTop:39, width:390,height:0.5,backgroundColor:'black'}}></View>)
    }
}
class DemoApp extends React.Component{
    static PropTypes = {
    }

    getInitialState(){
        refreshing:bool
    }
    constructor(props) {
        super(props)
        this.state = {
            refreshing:false,
            loadingMore:false,
            data:PropTypes.array
        }

        this._onPullRefresh=this._onPullRefresh.bind(this)
        this._onLoadMore=this._onLoadMore.bind(this)
    //测试数据1 带有section视图的列表
        // this.numOfSections = 100;
        // this.numOfRowInSection = 100;
        // let data = [];
        // for (var i = 0; i < this.numOfSections; ++i) {
        //         var row = []
        //         for(var j = 0;j < this.numOfRowInSection;++j){
        //             row.push({'data':{'rowNum':j},
        //                       'module':'cell1',
        //                       'height':40,                              
        //             })
        //         }
        //         data.push({'section':{'height':'30','module':'section','data':{'sectionData':{}}},'row':row});
        // }
        // this.state.data = data

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
     //测试数据2 不带section视图的列表
       this.numOfSections = 1;
       this.numOfRowInSection = 100;
       let _data = [];
       for (var i = 0; i < this.numOfSections; ++i) {
               var row = []
               for(var j = 0;j < this.numOfRowInSection;++j){
                   row.push({'data':{'rowNum':j},
                             'module':'cell1',
                             'height':40,                              
                   })
               }
               _data.push({'row':row});
       }
       this.state.data = _data
    //    alert('list数据：'+ this.state.data)
    console.log('list数据：',this.state.data);

     }      
     //列表选中回调函数 
     _onSelectedItem(body){
        alert('没事别乱点！，你现在点中的是第：'+ body.nativeEvent.row + '行')
     }      
     //下拉刷新回调函数
      _onPullRefresh(){
        this.setState({refreshing:true})
        // alert('下拉刷新事件')        
      }
     //加载更多回调函数
      _onLoadMore(){
        this.setState({loadingMore:true})
        alert('加载更多事件')
      } 
    render(){
        // alert('list数据：'+ this.state.data.row)
        return(
            <View style={{paddingTop:20, flex:1}}>
                <Button title='滚动到指定位置' onPress={()=>{
                    // this.setState({refreshing:!this.state.refreshing})
                    // 往下滚动指定像素
                    UIManager.dispatchViewManagerCommand(
                        findNodeHandle(this.refs.RCT_UI_REF),
                        UIManager.AHRNReuseListView.Commands.scrollToOffset,//Commands.pause与native层定义的COMMAND_PAUSE_NAME一致
                        [100]//命令携带的参数数据
                    );
                    //滚动到列表底部
                    // UIManager.dispatchViewManagerCommand(
                    //     findNodeHandle(this.refs.RCT_UI_REF),
                    //     UIManager.AHRNReuseListView.Commands.scrollToEnd,
                    //     []//命令携带的参数数据
                    // ); 

                    //滚动到指定的索引行
                    // UIManager.dispatchViewManagerCommand(
                    //     findNodeHandle(this.refs.RCT_UI_REF),
                    //     UIManager.ReuseList.Commands.scrollToIndex,//Commands.pause与native层定义的COMMAND_PAUSE_NAME一致
                    //     [0,100]//命令携带的参数数据
                    // ); 

                    // //重新加载列表
                    // UIManager.dispatchViewManagerCommand(
                    //     findNodeHandle(this.refs.RCT_UI_REF),
                    //     UIManager.ReuseList.Commands.reload,null//命令携带的参数数据
                    // ); 

                    // //重新加载列表
                    // UIManager.dispatchViewManagerCommand(
                    //     findNodeHandle(this.refs.RCT_UI_REF),
                    //     UIManager.ReuseList.Commands.scrollToOffset,[2000]//命令携带的参数数据
                    // ); 



                    //注意！！！！该调用方式只能在iOS中使用
                    // ReuseListManager.scrollToOffset(
                    //     //滚动到指定偏移位置
                    //     ReactNative.findNodeHandle(this.refs.RCT_UI_REF),10000
                    // ) 
                    
                    //关闭或者开启下拉刷新
                    // this.setState({refreshing:!this.state.refreshing})
                     //关闭或者开启加载更多
                    // this.setState({loadingMore:!this.state.loadingMore})
                    
                }}/>
                <AHRNReuseListView
                    ref='RCT_UI_REF'
                    style={{marginTop:40, width: 370,height:550,backgroundColor:'black'}}                
                    data = {this.state.data}
                    //cellHeight = {50}//默认高度
                    //itemSeparator='separator'
                    headerData={{'module':'header',height:30,data:{}}}
                    footerData={{'module':'footer',height:30,data:{}}}
                    onPullRefresh={this._onPullRefresh}
                    onSelectedItem = {this._onSelectedItem}
                    refreshing={this.state.refreshing}
                    refreshInitHints='1下拉刷新'
                    willRefreshHints='1松开刷新'
                    refreshingHints='1刷新中...'
                    onLoadMore={this._onLoadMore}      
                    loadingMore={this.state.loadingMore}    
                    loadingHints='1加载更多'
                ></AHRNReuseListView>
            </View>
        )
    }
}
AppRegistry.registerComponent('cell1',   () => cell1);
AppRegistry.registerComponent('cell2',   () => cell2);
AppRegistry.registerComponent('header',  () => header);
AppRegistry.registerComponent('footer',  () => footer);
AppRegistry.registerComponent('section', () => section);
//AppRegistry.registerComponent('separator', () => separator);


// export default DemoApp;

AppRegistry.registerComponent('ReactNativeDemo', () => DemoApp);
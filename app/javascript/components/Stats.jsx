import React from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import update from 'immutability-helper';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Stats extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stats: []
        };
    }

    componentDidMount() {
        const url = "/api/v1/stats/index";
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => this.setState({ stats: response }))
            .catch(() => this.props.history.push("/"));
    }

    handleGycScoreUpdate = (statId, scoreChange) => {
            const statIndex = statId - 1;
            const newStats = update(this.state.stats, {[statIndex]: {gycScore: {$apply: function(x) {return x + scoreChange;}}}});
            this.setState({stats: newStats},
            () => {
                fetch('/api/v1/stats/1', { 
                    method: 'put',
                    body: JSON.stringify(this.state.stats[0]),
                    headers: { 'Content-Type': 'application/json'},
                }).
                then((response) => {
                    if(response.ok) {
                        return response.json();
                    }
                    throw new Error("Gyc score error");
                })
                .then(response => {this.setState({ stats: response})})
                .catch(() => this.props.history.push("/"));
            });

    }
 
    handleHyScoreUpdate = (statId, scoreChange) => {
            const statIndex = statId - 1;
            const newStats = update(this.state.stats, {[statIndex]: {hyScore: {$apply: function(x) {return x + scoreChange;}}}});
            this.setState({stats: newStats},
            () => {
                fetch('/api/v1/stats/1', { 
                    method: 'put',
                    body: JSON.stringify(this.state.stats[0]),
                    headers: { 'Content-Type': 'application/json'},
                }).
                then((response) => {
                    if(response.ok) {
                        return response.json();
                    }
                    throw new Error("Hy score error");
                })
                .then(response => {this.setState({ stats: response})})
                .catch(() => this.props.history.push("/"));
            });

    }

    handleGycWish20Exchange = (statId) => {
            confirmAlert({
                title: '兑换',
                message: '您确认要兑换青铜卡牌吗？（该卡牌将消耗20积分）',
                buttons: [
                    {
                        label: '确认',
                        onClick: () => {
                const statIndex = statId - 1;
                const newStats = update(this.state.stats, {[statIndex]: {gycScore: {$apply: function(x) {return x - 20;}}}});
                const newStats2 = update(newStats, {[statIndex]: {gycWish20: {$apply: function(x) {return x + 1;}}}});
                this.setState({stats: newStats2},
                    () => {
                        fetch('/api/v1/stats/1', {
                            method: 'put',
                            body: JSON.stringify(this.state.stats[statIndex]),
                            headers: { 'Content-Type': 'application/json'},
                        })
                        .then((response) => {
                            if(response.ok) {
                                return response.json();
                            }
                            throw new Error("Gyc Wish20 Error");
                        })
                        .then(response => {this.setState({ stats: response})})
                        .catch(() => this.props.history.push("/"));
                });

                        }
                    },
                    {
                        label: '取消',
                        onClick: () => {
                        
                        }
                    }
                ]
            })
            
    }

    handleGycWish50Exchange = (statId) => {
            confirmAlert({
                title: '兑换',
                message: '您确认要兑换白银卡牌吗？（该卡牌将消耗50积分）',
                buttons: [
                    {
                        label: '确认',
                        onClick: () => {
                const statIndex = statId - 1;
                const newStats = update(this.state.stats, {[statIndex]: {gycScore: {$apply: function(x) {return x - 50;}}}});
                const newStats2 = update(newStats, {[statIndex]: {gycWish50: {$apply: function(x) {return x + 1;}}}});
                this.setState({stats: newStats2},
                    () => {
                        fetch('/api/v1/stats/1', {
                            method: 'put',
                            body: JSON.stringify(this.state.stats[statIndex]),
                            headers: { 'Content-Type': 'application/json'},
                        })
                        .then((response) => {
                            if(response.ok) {
                                return response.json();
                            }
                            throw new Error("Gyc Wish50 Error");
                        })
                        .then(response => {this.setState({ stats: response})})
                        .catch(() => this.props.history.push("/"));
                });

                        }
                    },
                    {
                        label: '取消',
                        onClick: () => {
                        
                        }
                    }
                ]
            })
            
    }

    handleGycWish100Exchange = (statId) => {
            confirmAlert({
                title: '兑换',
                message: '您确认要兑换黄金卡牌吗？（该卡牌将消耗100积分）',
                buttons: [
                    {
                        label: '确认',
                        onClick: () => {
                const statIndex = statId - 1;
                const newStats = update(this.state.stats, {[statIndex]: {gycScore: {$apply: function(x) {return x - 100;}}}});
                const newStats2 = update(newStats, {[statIndex]: {gycWish100: {$apply: function(x) {return x + 1;}}}});
                this.setState({stats: newStats2},
                    () => {
                        fetch('/api/v1/stats/1', {
                            method: 'put',
                            body: JSON.stringify(this.state.stats[statIndex]),
                            headers: { 'Content-Type': 'application/json'},
                        })
                        .then((response) => {
                            if(response.ok) {
                                return response.json();
                            }
                            throw new Error("Gyc Wish100 Error");
                        })
                        .then(response => {this.setState({ stats: response})})
                        .catch(() => this.props.history.push("/"));
                });

                        }
                    },
                    {
                        label: '取消',
                        onClick: () => {
                        
                        }
                    }
                ]
            })
            
    }
    
    handleHyWish20Exchange = (statId) => {
            confirmAlert({
                title: '兑换',
                message: '您确认要兑换青铜卡牌吗？（该卡牌将消耗20积分）',
                buttons: [
                    {
                        label: '确认',
                        onClick: () => {
                const statIndex = statId - 1;
                const newStats = update(this.state.stats, {[statIndex]: {hyScore: {$apply: function(x) {return x - 20;}}}});
                const newStats2 = update(newStats, {[statIndex]: {hyWish20: {$apply: function(x) {return x + 1;}}}});
                this.setState({stats: newStats2},
                    () => {
                        fetch('/api/v1/stats/1', {
                            method: 'put',
                            body: JSON.stringify(this.state.stats[statIndex]),
                            headers: { 'Content-Type': 'application/json'},
                        })
                        .then((response) => {
                            if(response.ok) {
                                return response.json();
                            }
                            throw new Error("hy Wish20 Error");
                        })
                        .then(response => {this.setState({ stats: response})})
                        .catch(() => this.props.history.push("/"));
                });

                        }
                    },
                    {
                        label: '取消',
                        onClick: () => {
                        
                        }
                    }
                ]
            })
            
    }

    handleHyWish50Exchange = (statId) => {
            confirmAlert({
                title: '兑换',
                message: '您确认要兑换白银卡牌吗？（该卡牌将消耗50积分）',
                buttons: [
                    {
                        label: '确认',
                        onClick: () => {
                const statIndex = statId - 1;
                const newStats = update(this.state.stats, {[statIndex]: {hyScore: {$apply: function(x) {return x - 50;}}}});
                const newStats2 = update(newStats, {[statIndex]: {hyWish50: {$apply: function(x) {return x + 1;}}}});
                this.setState({stats: newStats2},
                    () => {
                        fetch('/api/v1/stats/1', {
                            method: 'put',
                            body: JSON.stringify(this.state.stats[statIndex]),
                            headers: { 'Content-Type': 'application/json'},
                        })
                        .then((response) => {
                            if(response.ok) {
                                return response.json();
                            }
                            throw new Error("Hy Wish50 Error");
                        })
                        .then(response => {this.setState({ stats: response})})
                        .catch(() => this.props.history.push("/"));
                });

                        }
                    },
                    {
                        label: '取消',
                        onClick: () => {
                        
                        }
                    }
                ]
            })
            
    }

    handleHyWish100Exchange = (statId) => {
            confirmAlert({
                title: '兑换',
                message: '您确认要兑换黄金卡牌吗？（该卡牌将消耗100积分）',
                buttons: [
                    {
                        label: '确认',
                        onClick: () => {
                const statIndex = statId - 1;
                const newStats = update(this.state.stats, {[statIndex]: {hyScore: {$apply: function(x) {return x - 100;}}}});
                const newStats2 = update(newStats, {[statIndex]: {hyWish100: {$apply: function(x) {return x + 1;}}}});
                this.setState({stats: newStats2},
                    () => {
                        fetch('/api/v1/stats/1', {
                            method: 'put',
                            body: JSON.stringify(this.state.stats[statIndex]),
                            headers: { 'Content-Type': 'application/json'},
                        })
                        .then((response) => {
                            if(response.ok) {
                                return response.json();
                            }
                            throw new Error("Hy Wish100 Error");
                        })
                        .then(response => {this.setState({ stats: response})})
                        .catch(() => this.props.history.push("/"));
                });

                        }
                    },
                    {
                        label: '取消',
                        onClick: () => {
                        
                        }
                    }
                ]
            })
            
    }

    handleGycWish20Use = (statId) => {
            confirmAlert({
                title: '使用',
                message: '您确认要使用一张青铜卡牌吗？',
                buttons: [
                    {
                        label: '确认',
                        onClick: () => {
                const statIndex = statId - 1;
                const newStats = update(this.state.stats, {[statIndex]: {gycWish20: {$apply: function(x) {return x - 1;}}}});
                this.setState({stats: newStats},
                    () => {
                        fetch('/api/v1/stats/1', {
                            method: 'put',
                            body: JSON.stringify(this.state.stats[statIndex]),
                            headers: { 'Content-Type': 'application/json'},
                        })
                        .then((response) => {
                            if(response.ok) {
                                return response.json();
                            }
                            throw new Error("Gyc Wish20 Use Error");
                        })
                        .then(response => {this.setState({ stats: response})})
                        .catch(() => this.props.history.push("/"));
                });

                        }
                    },
                    {
                        label: '取消',
                        onClick: () => {
                        
                        }
                    }
                ]
            })
            
    }

    handleGycWish50Use = (statId) => {
            confirmAlert({
                title: '使用',
                message: '您确认要使用一张白银卡牌吗？',
                buttons: [
                    {
                        label: '确认',
                        onClick: () => {
                const statIndex = statId - 1;
                const newStats = update(this.state.stats, {[statIndex]: {gycWish50: {$apply: function(x) {return x - 1;}}}});
                this.setState({stats: newStats},
                    () => {
                        fetch('/api/v1/stats/1', {
                            method: 'put',
                            body: JSON.stringify(this.state.stats[statIndex]),
                            headers: { 'Content-Type': 'application/json'},
                        })
                        .then((response) => {
                            if(response.ok) {
                                return response.json();
                            }
                            throw new Error("Gyc Wish50 Use Error");
                        })
                        .then(response => {this.setState({ stats: response})})
                        .catch(() => this.props.history.push("/"));
                });

                        }
                    },
                    {
                        label: '取消',
                        onClick: () => {
                        
                        }
                    }
                ]
            })
            
    }

    handleGycWish100Use = (statId) => {
            confirmAlert({
                title: '使用',
                message: '您确认要使用一张黄金卡牌吗？',
                buttons: [
                    {
                        label: '确认',
                        onClick: () => {
                const statIndex = statId - 1;
                const newStats = update(this.state.stats, {[statIndex]: {gycWish100: {$apply: function(x) {return x - 1;}}}});
                this.setState({stats: newStats},
                    () => {
                        fetch('/api/v1/stats/1', {
                            method: 'put',
                            body: JSON.stringify(this.state.stats[statIndex]),
                            headers: { 'Content-Type': 'application/json'},
                        })
                        .then((response) => {
                            if(response.ok) {
                                return response.json();
                            }
                            throw new Error("Gyc Wish100 Use Error");
                        })
                        .then(response => {this.setState({ stats: response})})
                        .catch(() => this.props.history.push("/"));
                });

                        }
                    },
                    {
                        label: '取消',
                        onClick: () => {
                        
                        }
                    }
                ]
            })
            
    }

    handleHyWish20Use = (statId) => {
            confirmAlert({
                title: '使用',
                message: '您确认要使用一张青铜卡牌吗？',
                buttons: [
                    {
                        label: '确认',
                        onClick: () => {
                const statIndex = statId - 1;
                const newStats = update(this.state.stats, {[statIndex]: {hyWish20: {$apply: function(x) {return x - 1;}}}});
                this.setState({stats: newStats},
                    () => {
                        fetch('/api/v1/stats/1', {
                            method: 'put',
                            body: JSON.stringify(this.state.stats[statIndex]),
                            headers: { 'Content-Type': 'application/json'},
                        })
                        .then((response) => {
                            if(response.ok) {
                                return response.json();
                            }
                            throw new Error("Hy Wish20 Use Error");
                        })
                        .then(response => {this.setState({ stats: response})})
                        .catch(() => this.props.history.push("/"));
                });

                        }
                    },
                    {
                        label: '取消',
                        onClick: () => {
                        
                        }
                    }
                ]
            })
            
    }

    handleHyWish50Use = (statId) => {
            confirmAlert({
                title: '使用',
                message: '您确认要使用一张白银卡牌吗？',
                buttons: [
                    {
                        label: '确认',
                        onClick: () => {
                const statIndex = statId - 1;
                const newStats = update(this.state.stats, {[statIndex]: {hyWish50: {$apply: function(x) {return x - 1;}}}});
                this.setState({stats: newStats},
                    () => {
                        fetch('/api/v1/stats/1', {
                            method: 'put',
                            body: JSON.stringify(this.state.stats[statIndex]),
                            headers: { 'Content-Type': 'application/json'},
                        })
                        .then((response) => {
                            if(response.ok) {
                                return response.json();
                            }
                            throw new Error("Hy Wish50 Use Error");
                        })
                        .then(response => {this.setState({ stats: response})})
                        .catch(() => this.props.history.push("/"));
                });

                        }
                    },
                    {
                        label: '取消',
                        onClick: () => {
                        
                        }
                    }
                ]
            })
            
    }

    handleHyWish100Use = (statId) => {
            confirmAlert({
                title: '使用',
                message: '您确认要使用一张黄金卡牌吗？',
                buttons: [
                    {
                        label: '确认',
                        onClick: () => {
                const statIndex = statId - 1;
                const newStats = update(this.state.stats, {[statIndex]: {hyWish100: {$apply: function(x) {return x - 1;}}}});
                this.setState({stats: newStats},
                    () => {
                        fetch('/api/v1/stats/1', {
                            method: 'put',
                            body: JSON.stringify(this.state.stats[statIndex]),
                            headers: { 'Content-Type': 'application/json'},
                        })
                        .then((response) => {
                            if(response.ok) {
                                return response.json();
                            }
                            throw new Error("Hy Wish100 Use Error");
                        })
                        .then(response => {this.setState({ stats: response})})
                        .catch(() => this.props.history.push("/"));
                });

                        }
                    },
                    {
                        label: '取消',
                        onClick: () => {
                        
                        }
                    }
                ]
            })
            
    }


    render() {
        const { stats } = this.state;
        const myCarousel = (
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="carousel/carousel5.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>老婆大人小时候</h3>
                  <p>可爱</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="carousel/carousel2.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>风中的我们</h3>
                  <p>坐标在西安</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="carousel/carousel3.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>月下</h3>
                  <p>最好的年纪，最好的我们</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="carousel/carousel4.jpg"
                  alt="Third slide"
                />
                  <Carousel.Caption>
                  <h3>一起洗漱</h3>
                  <p>最幸福的时光</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="carousel/carousel1.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>好看的人</h3>
                  <p>好看的胸</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
                   )
        const allStats = stats.map((stat, index) => (
            <div key={index} className="container-fluid">
            <div className="row pagination text-center" style={{color: "white"}}>
            
            <div className="col-md-6 col-lg-6 col-sm-10 col-xs-12">
            <div><img src="boy.jpg" style={{maxWidth: "100%", height: "auto", border: "2px solid #ddd", borderRadius: "10px", padding: "7px"}}/></div>
            <div className="btn-group btn-gropu-lg" role="group">
                    <button type="button" className="btn btn-danger" value="-3" onClick={() => this.handleGycScoreUpdate(stat.id, -3)}>-3</button>
                    <button type="button" className="btn btn-warning" value="-2" onClick={() => this.handleGycScoreUpdate(stat.id, -2)}>-2</button>
                    <button type="button" className="btn btn-secondary" value="-1" onClick={() => this.handleGycScoreUpdate(stat.id, -1)}>-1</button>
                    <button type="button" className="btn btn-light" value="0" onClick={() => this.handleGycScoreUpdate(stat.id, 0)}>0</button>   
                    <button type="button" className="btn btn-primary" value="1" onClick={() => this.handleGycScoreUpdate(stat.id, 1)}>+1</button>
                    <button type="button" className="btn btn-info" value="2" onClick={() => this.handleGycScoreUpdate(stat.id, 2)}>+2</button>
                    <button type="button" className="btn btn-success" value="3" onClick={() => this.handleGycScoreUpdate(stat.id, 3)}>+3</button> 
            </div>
            <div style={{padding: "10px"}}>
                哥哥积分：{stat.gycScore}
            </div>
            <div className="row">
                <div className="col-md-2 col-lg-3 col-sm-0 col-xs-0"></div>
                <div className="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                青铜卡牌：{stat.gycWish20} <br/>
                <button type="button" className="btn btn-success mt-3" disabled={stat.gycScore < 20} onClick={() => this.handleGycWish20Exchange(stat.id)}>兑换</button> <br/>
                <button type="button" className="btn btn-warning mt-3" disabled={stat.gycWish20 <= 0} onClick={() => this.handleGycWish20Use(stat.id)}>使用</button>
                </div>
                <div className="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                白银卡牌：{stat.gycWish50} <br/>
                <button type="button" className="btn btn-success mt-3" disabled={stat.gycScore < 50} onClick={() => this.handleGycWish50Exchange(stat.id)}>兑换</button> <br/>
                <button type="button" className="btn btn-warning mt-3" disabled={stat.gycWish50 <= 0} onClick={() => this.handleGycWish50Use(stat.id)}>使用</button>
                </div>
                <div className="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                黄金卡牌：{stat.gycWish100} <br/>
                <button type="button" className="btn btn-success mt-3" disabled={stat.gycScore < 100} onClick={() => this.handleGycWish100Exchange(stat.id)}>兑换</button> <br/>
                <button type="button" className="btn btn-warning mt-3" disabled={stat.gycWish100 <= 0} onClick={() => this.handleGycWish100Use(stat.id)}>使用</button>
                </div>
            </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-10 col-xs-12">
            <div><img src="girl.jpg" style={{maxWidth: "100%", height: "auto", border: "2px solid #ddd", borderRadius: "10px", padding: "7px"}}/></div>
            <div className="btn-group btn-gropu-lg" role="group">
                    <button type="button" className="btn btn-danger" onClick={() => this.handleHyScoreUpdate(stat.id, -3)}>-3</button>
                    <button type="button" className="btn btn-warning" onClick={() => this.handleHyScoreUpdate(stat.id, -2)}>-2</button>
                    <button type="button" className="btn btn-secondary" onClick={() => this.handleHyScoreUpdate(stat.id, -1)}>-1</button>
                    <button type="button" className="btn btn-light" onClick={() => this.handleHyScoreUpdate(stat.id, 0)}>0</button>   
                    <button type="button" className="btn btn-primary" onClick={() => this.handleHyScoreUpdate(stat.id, 1)}>+1</button>
                    <button type="button" className="btn btn-info" onClick={() => this.handleHyScoreUpdate(stat.id, 2)}>+2</button>
                    <button type="button" className="btn btn-success" onClick={() => this.handleHyScoreUpdate(stat.id, 3)}>+3</button> 
            </div>
            <div style={{padding: "10px"}}>
                妹妹积分：{stat.hyScore}
            </div>
            <div className="row">
                <div className="col-md-1 col-lg-3 col-sm-0 col-xs-0"></div>
                <div className="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                青铜卡牌：{stat.hyWish20} <br/>
                <button type="button" className="btn btn-success mt-3" disabled={stat.hyScore < 20} onClick={() => this.handleHyWish20Exchange(stat.id)}>兑换</button> <br/>
                <button type="button" className="btn btn-warning mt-3" disabled={stat.hyWish20 <= 0} onClick={() => this.handleHyWish20Use(stat.id)}>使用</button>
                </div>
                <div className="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                白银卡牌：{stat.hyWish50} <br/>
                <button type="button" className="btn btn-success mt-3" disabled={stat.hyScore < 50} onClick={() => this.handleHyWish50Exchange(stat.id)}>兑换</button> <br/>
                <button type="button" className="btn btn-warning mt-3" disabled={stat.hyWish50 <= 0} onClick={() => this.handleHyWish50Use(stat.id)}>使用</button>
                </div>
                <div className="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                黄金卡牌：{stat.hyWish100} <br/>
                <button type="button" className="btn btn-success mt-3" disabled={stat.hyScore < 100} onClick={() => this.handleHyWish100Exchange(stat.id)}>兑换</button> <br/>
                <button type="button" className="btn btn-warning mt-3" disabled={stat.hyWish100 <= 0} onClick={() => this.handleHyWish100Use(stat.id)}>使用</button>
                </div>
            </div>
            </div>
            </div>



            
            <h5>
            {stat.gycScore} , {stat.gycWish20}, {stat.gycWish50}, {stat.gycWish100}
            </h5>
            <h5>
            {stat.hyScore}, {stat.hyWish20}, {stat.hyWish50}, {stat.hyWish100}
            </h5>
            </div>
        ));

        return (
            <>
            <div style={{background: 'url("statsbackground.jpg")'}}>
            <div className="container py-1">
            {myCarousel}
            </div>

            <div>
            {allStats}
            <Link to="/" className="btn btn-link">
            Home
            </Link>
            </div>
            </div>
            </>
        );
    }
}
    export default Stats;

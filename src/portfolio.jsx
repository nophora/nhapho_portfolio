import React, { Component } from 'react'
import './portfolio.css'
import Calendar from './demo/caledar'
import Formdemo from './demo/formdemo.jsx'
import Todolist from './demo/todolist'

class Portfolio extends Component {
    state = {

        wide: window.innerWidth,
        zum:false,
        aminate: 0,
        ck: false,
        fk: false,
        td: false,
        git: 1,
    }


    aminate = () => {

        if (this.state.aminate === 0) {
            setTimeout(() => {
                this.setState({
                    aminate: this.state.aminate === 0 && 4
                })
            }, 100)
            setTimeout(() => {
                this.setState({
                    aminate: this.state.aminate === 4 && -4
                })
            }, 800)
            setTimeout(() => {
                this.setState({
                    aminate: this.state.aminate === -4 && 3
                })
            }, 1200)
            setTimeout(() => {
                this.setState({
                    aminate: this.state.aminate === 3 && -3
                })
            }, 1600)
            setTimeout(() => {
                this.setState({
                    aminate: this.state.aminate === -3 && 2
                })
            }, 1900)
            setTimeout(() => {
                this.setState({
                    aminate: this.state.aminate === 2 && -2
                })
            }, 2200)
            setTimeout(() => {
                this.setState({
                    aminate: this.state.aminate === -2 && 0
                })
            }, 2400)
        }

    }

    componentDidMount() {
        this.size()

        setTimeout(() => {
            this.setState({
                git: 1,
            })
        }, 1000)
        setTimeout(() => {
            this.setState({
                git: 2,
            })
        }, 3000)
        setTimeout(() => {
            this.setState({
                git: 3,
            })
        }, 5000)
        setInterval(() => {
            setTimeout(() => {
                this.setState({
                    git: 1,
                })
            }, 1000)
            setTimeout(() => {
                this.setState({
                    git: 2,
                })
            }, 3000)
            setTimeout(() => {
                this.setState({
                    git: 3,
                })
            }, 5000)
        }, 7000)




        setTimeout(() => {
            if (this.state.aminate === 0) {
                setTimeout(() => {
                    this.setState({
                        aminate: this.state.aminate === 0 && 4
                    })
                }, 100)
                setTimeout(() => {
                    this.setState({
                        aminate: this.state.aminate === 4 && -4
                    })
                }, 800)
                setTimeout(() => {
                    this.setState({
                        aminate: this.state.aminate === -4 && 3
                    })
                }, 1200)
                setTimeout(() => {
                    this.setState({
                        aminate: this.state.aminate === 3 && -3
                    })
                }, 1600)
                setTimeout(() => {
                    this.setState({
                        aminate: this.state.aminate === -3 && 2
                    })
                }, 1900)
                setTimeout(() => {
                    this.setState({
                        aminate: this.state.aminate === 2 && -2
                    })
                }, 2200)
                setTimeout(() => {
                    this.setState({
                        aminate: this.state.aminate === -2 && 0
                    })
                }, 2400)

            }
        }, 5000)

        setInterval(() => {
            if (this.state.aminate === 0) {
                setTimeout(() => {
                    this.setState({
                        aminate: this.state.aminate === 0 && 4
                    })
                }, 100)
                setTimeout(() => {
                    this.setState({
                        aminate: this.state.aminate === 4 && -4
                    })
                }, 800)
                setTimeout(() => {
                    this.setState({
                        aminate: this.state.aminate === -4 && 3
                    })
                }, 1200)
                setTimeout(() => {
                    this.setState({
                        aminate: this.state.aminate === 3 && -3
                    })
                }, 1600)
                setTimeout(() => {
                    this.setState({
                        aminate: this.state.aminate === -3 && 2
                    })
                }, 1900)
                setTimeout(() => {
                    this.setState({
                        aminate: this.state.aminate === 2 && -2
                    })
                }, 2200)
                setTimeout(() => {
                    this.setState({
                        aminate: this.state.aminate === -2 && 0
                    })
                }, 2400)

            }

        }, 10000)
    }

    ckdemo = () => {
        this.setState({
            ck: !this.state.ck,
        })
    }
    fkdemo = () => {
        this.setState({
            fk: !this.state.fk,
        })
    }
    tddemo = () => {
        this.setState({
            td: !this.state.td,
        })
    }


    scrollsp = () => {
        window.scrollTo({
            behavior: 'smooth',
            top: 1600
        })
    }

    scrollsi = () => {
        window.scrollTo({
            behavior: 'smooth',
            top: 600
        })
    }

    scrollsd = () => {
        window.scrollTo({
            behavior: 'smooth',
            top: 1400
        })
    }
    scrollsg = () => {
        window.scrollTo({
            behavior: 'smooth',
            top: 3200
        })
    }

    textArea = () => {
        const ell = this.refs.textarea
        ell.select()
        document.execCommand("copy")

    }

    ptextArea = () => {
        const ell = this.refs.ptextarea
        ell.select()
        document.execCommand("copy")

    }

    size = () => {
        const change = () => {
            this.setState({
                wide: window.innerWidth
            })
        }
        window.addEventListener('resize', change, false)
    }
    zum=()=>{
        if (this.state.wide >= 500) {
            this.setState({
                zum:!this.state.zum
            })
        }
    }

    render() {
        const date = new Date();
        const hour = date.getHours();
        const min = date.getMinutes()
        const year = date.getUTCFullYear()

        return (
            <React.Fragment>
                <div className="portfolio">
                    <div style={{ height: `${window.innerHeight}px` }} className="upwraper">
                        <img style={{ height: `${window.innerHeight + 5}px` }} alt='sesson' src={'./uploads/natu.jpg'} className="imagepic" />
                        <div style={{ height: `${window.innerHeight}px` }} className="info">
                            <div className="top">
                                <div className="tleft">
                                    <div onClick={this.scrollsi} className="tlef">Info</div>
                                    <div onClick={this.scrollsd} className="tlef">Skills</div>
                                    <div onClick={this.scrollsp} className="tlef">Project</div>

                                    <div onClick={this.scrollsg} className="tlef">GitHub</div>
                                    <div className="tlef"><img style={{ height: '18px', width: '18px' }} src={'./uploads/p2.png'} alt="ints" className='ts' />
                                    </div>

                                </div>
                                <div className="tright"></div>
                            </div>
                            <div className="midle">
                                <div className="mtop">
                                    <div className="blef">{hour <= 9 && '0'}{`${hour}`}:{min <= 9 && '0'}{`${min}`}</div>
                                    <div className="brigh">{hour >= 0 && hour < 12 ? 'Good morning' : hour >= 12 && hour < 18 ? 'Good afternoon' : hour >= 18 && hour < 20 ? 'Good evening' : 'Good night'}</div>
                                </div>
                                <p className="mdown">Learnig computer science and coding,Made easy.</p>
                            </div>
                            <div className="bottom">


                                <div onClick={this.scrollsg} style={{ marginTop: `${this.state.aminate}%` }} onMouseEnter={this.aminate} className="buttin">Get in Touch</div>

                            </div>
                        </div>
                    </div>
                    <div className="body">
                        <div className="myself">
                            <div className={this.state.wide <= 500 ? "minfobox" : "infobox"}>
                                <div className="infoslit">
                                    <img src={'./uploads/yk.jpg'} onClick={this.zum} alt='info' className={  this.state.zum === true && this.state.wide >= 500 ?'zum' : this.state.wide <= 500 ? 'mimgi' : 'imgi'} />
                                </div>
                                <div className="infoslit2">
                                    <div className="pwrap">
                                        {this.state.wide >= 500 && <h1 className="pp">#</h1>}<h1 className={this.state.wide <= 500 ? "mpp1" : "pp1"}>About Nhapho</h1>
                                    </div>
                                    <div className="detail">
                                        <p>i can perform wide range variety of skills and i have atrack record of carring out these task effciently and successfull
                                            <br />
                                            <br />
                                            Also i am a fas leaner becouse i can learner new skill in just few days
                                        </p>
                                    </div>
                                    <div style={{ marginLeft: this.state.wide <= 500 ? '0%' : '57%' }} className="btnv">view</div>
                                </div>
                            </div>
                        </div>
                        <div className="skillr">
                            #SKILLS
                            <div className="skills">
                                <div className="skil1">
                                    <div className="skilimg">
                                        <img src={'./uploads/langug.jpg'} alt='icon' className='imgdv' />
                                        <h1 className="lgv">langueages</h1>
                                    </div>
                                    <div className="skilimg2"></div>
                                    <div className="skilimg3">

                                        <div className="lgvl">+ JavaScript</div>
                                        <div className="lgvl">+ TypeScript</div>
                                        <div className="lgvl">+ Kotlin</div>

                                    </div>
                                </div>

                                <div className="skil2">
                                    <div className="skilimg">
                                        <img src={'./uploads/coding.png'} alt='icon' className='imgdv' />
                                        <h1 className="lgv">FrontEnd</h1>
                                    </div>
                                    <div className="skilimg2"></div>
                                    <div className="skilimg3">
                                        <div className="lgvl">+ HTML</div>
                                        <div className="lgvl">+ Jquery</div>
                                        <div className="lgvl">+ css</div>
                                        <div className="lgvl">+ css3</div>
                                        <div className="lgvl">+ React-Bootstcratpt</div>
                                        <div className="lgvl">+ React js</div>
                                        <div className="lgvl">+ Redux js || React-Redux</div>
                                        <div className="lgvl">+ axios js</div>
                                        <div className="lgvl">+ Ajax jquery</div>
                                        <div className="lgvl">+ fetch js</div>
                                        <div className="lgvl">+ Async await & Promise</div>
                                        <div className="lgvl">+ Json</div>
                                        <div className="lgvl">+ Firebase</div>
                                    </div>
                                </div>

                                <div className="skil3">
                                    <div className="skilimg">
                                        <img src={'./uploads/base.jpg'} alt='icon' className='imgdv' />
                                        <h1 className="lgv">BackEnd</h1>
                                    </div>
                                    <div className="skilimg2"></div>
                                    <div className="skilimg3">
                                        <div className="lgvl">+ Node js</div>
                                        <div className="lgvls">* express</div>
                                        <div className="lgvls">* express-fileupload</div>
                                        <div className="lgvls">* mongoose</div>
                                        <div className="lgvls">* body-parser</div>
                                        <div className="lgvls">* multer</div>
                                        <div className="lgvls">* gridfs</div>
                                        <div className="lgvls">* gridfs-stream</div>
                                        <div className="lgvls">* dotenv</div>
                                        <div className="lgvls">* cloudinary</div>
                                        <div className="lgvls">* morgan</div>


                                        <div className="lgvl">+ Deno js</div>
                                        <div className="lgvl">+ Deployment</div>
                                        <div className="lgvls">* Heroku</div>
                                        <div className="lgvls">* Netfy</div>
                                        <div className="lgvls">* GitHub</div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="projects">
                            <div className={this.state.wide <= 500 ? "mproje" : "proje"}>
                                #Projects
                                <div className="proje1">
                                    <div className={this.state.wide <= 500 ? "proje1g" : "mproje1g"}>
                                        <img src={this.state.git === 1 ? './uploads/c1.jpg' : this.state.git === 2 ? './uploads/c2.jpg' : './uploads/c3.jpg'} className={this.state.wide <= 500 ? "proje1c" : "mproje1c"} alt='copy' />

                                    </div>

                                    <div className={this.state.wide <= 500 ? "mproje1b" : "proje1b"} >
                                        <div className={this.state.wide <= 300 ? "mproje1h" : "proje1h"}>Calendar Note</div>
                                        <div className="proje1p"><p>i can perform wide range variety of skills and i have atrack record of carring out these task effciently and successfull
                                            <br />
                                            <br />
                                            Also i am a fas leaner
                                        </p></div>
                                        <div className="scrop">
                                            <div onClick={this.ckdemo} className="projebt"> view demo</div>
                                            <img src={'./uploads/copy.png'} className="proje1cp" alt='copy' />
                                        </div>
                                    </div>
                                </div>



                                <div className="proje1">
                                    <div className={this.state.wide <= 500 ? "proje1g" : "mproje1g"}>
                                        <img src={this.state.git === 1 ? './uploads/f1.jpg' : this.state.git === 2 ? './uploads/f12.jpg' : './uploads/f3.jpg'} className={this.state.wide <= 500 ? "proje1c" : "mproje1c"} alt='copy' />

                                    </div>
                                    <div className={this.state.wide <= 500 ? "mproje1b" : "proje1b"}>
                                        <div className={this.state.wide <= 250 ? "mproje1h" : "proje1h"} >Smart form</div>
                                        <div className="proje1p"><p>i can perform wide range variety of skills and i have atrack record of carring out these task effciently and successfull
                                            <br />
                                            <br />
                                            Also i am a fas         </p></div>
                                        <div className="scrop">
                                            <div onClick={this.fkdemo} className="projebt"> view demo</div>
                                            <img src={'./uploads/copy.png'} className="proje1cp" alt='copy' />
                                        </div>
                                    </div>
                                </div>


                                <div className="proje1">
                                    <div className={this.state.wide <= 500 ? "proje1g" : "mproje1g"} >
                                        <img src={this.state.git === 1 ? './uploads/cr1.jpg' : this.state.git === 2 ? './uploads/cr2.jpg' : './uploads/cr3.jpg'} className={this.state.wide <= 500 ? "proje1c" : "mproje1c"} alt='copy' />

                                    </div>
                                    <div className={this.state.wide <= 500 ? "mproje1b" : "proje1b"}>
                                        <div className={this.state.wide <= 250 ? "mproje1h" : "proje1h"}>GT-VIEW</div>
                                        <div className="proje1p"><p>i can perform wide range variety of skills and i have atrack record of carring out these task effciently and successfull
                                            <br />
                                            <br />
                                            Also i am a fas leaner                   </p></div>
                                        <div className="scrop">
                                            <textarea ref='textarea' value="TEST AGAIN" className="projebtZ" />
                                            <img onClick={() => { this.textArea() }} src={'./uploads/copy.png'} className="proje1cp" alt='copy' />
                                        </div>
                                    </div>
                                </div>

                                <div className="proje1">
                                    <div className={this.state.wide <= 500 ? "proje1g" : "mproje1g"} >
                                        <img src={this.state.git === 1 ? './uploads/pt.jpg' : this.state.git === 2 ? './uploads/pt2.jpg' : './uploads/pt3.jpg'} className={this.state.wide <= 500 ? "proje1c" : "mproje1c"} alt='copy' />

                                    </div>
                                    <div className={this.state.wide <= 500 ? "mproje1b" : "proje1b"} >
                                        <div className={this.state.wide <= 250 ? "mproje1h" : "proje1h"} >PlatformtTour</div>
                                        <div className="proje1p"><p>i can perform wide range variety of skills and i have atrack record of carring out these task effciently and successfull
                                            <br />
                                            <br />
                                            Also i am a fas leaner                  </p></div>
                                        <div className="scrop">
                                            <textarea ref='ptextarea' value="paltform" className="projebtZ" />
                                            <img onClick={() => { this.ptextArea() }} src={'./uploads/copy.png'} className="proje1cp" alt='copy' />
                                        </div>
                                    </div>
                                </div>


                                <div className="proje1">
                                    <div className={this.state.wide <= 500 ? "proje1g" : "mproje1g"}>
                                        <img src={this.state.git === 1 ? './uploads/n1.jpg' : this.state.git === 2 ? './uploads/n2.jpg' : './uploads/n3.jpg'} className={this.state.wide <= 500 ? "proje1c" : "mproje1c"} alt='copy' />

                                    </div>
                                    <div className={this.state.wide <= 500 ? "mproje1b" : "proje1b"} >
                                        <div className={this.state.wide <= 250 ? "mproje1h" : "proje1h"}>Todolist</div>
                                        <div className="proje1p"><p>i can perform wide range variety of skills and i have atrack record of carring out these task effciently and successfull
                                            <br />
                                            <br />
                                            Also i am a fas leaner      </p></div>
                                        <div className="scrop">
                                            <div onClick={this.tddemo} className="projebt"> view demo</div>
                                            <img src={'./uploads/copy.png'} className="proje1cp" alt='copy' />
                                        </div>
                                    </div>
                                </div>




                            </div>
                        </div>
                        <div className="contact">
                            <div className="intret">
                                <div className="int1">
                                    <h1 className={this.state.wide <= 500 ? "minth" : "inth"}>Intrested in working together?</h1>
                                    <div className={this.state.wide <= 500 ? "mintp" : "intp"}>nophora.nn@gmail.com  , nophora.nn@hotmail.com ,0661102167</div>
                                </div>
                                <div className={this.state.wide <= 500 ? "mint2" : "int2"}>
                                    <img src={'./uploads/p1.png'} alt="ints" className='ts' />
                                    <img src={'./uploads/p2.png'} alt="ints" className='ts' />
                                    <img src={'./uploads/p3.png'} alt="ints" className='ts' />
                                    <img src={'./uploads/p4.png'} alt="ints" className='ts' />
                                    <img src={'./uploads/p5.png'} alt="ints" className='ts' />
                                    <img src={'./uploads/p8.png'} alt="ints" className='ts' />

                                </div>
                                <div className="int3">bild with raect    <div className='bta2'></div><div className='bta'></div> <div className='bta2'></div> copywrite @2019-{`${year}`}</div>
                            </div>
                        </div>
                    </div>
                    {this.state.ck && <Calendar ck={this.ckdemo} />}
                    {this.state.fk && <Formdemo ck={this.fkdemo} />}
                    {this.state.td && <Todolist ck={this.tddemo} />}
                </div>
            </React.Fragment>
        );
    }
}

export default Portfolio;
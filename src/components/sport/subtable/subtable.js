import React from 'react'
import './subtable.css'
import ball from './ball.jpg'
function Subtable() {
    return (<div className="container">
        <div className="box">
            <div className="imgBox">
                <img src="https://i.imgur.com/AzH17aZ.png" alt="a"/>
              </div>
                <div className="content">
                    <p className="pepe">Football</p>
                    <h2>Image Hover Effects</h2>
                    <p className="pe">Lorem ipsum nisl vivamus viverra per facilisis morbi arcu tortor, varius blandit ligula fermentum sapien mi suspendisse ac orci, imperdiet hendrerit sem quam netus pellentesque luctus pretium.</p>
                </div>
            </div>
            <div className="box">
                <div className="imgBox">
                    <img src="https://igx.4sqi.net/img/general/600x600/13391650_-Orrd3ODh6ekCbrvu0J8vv3NzETxcZyE3DypFTJ0r-g.jpg" alt="a"/>
        </div>
                    <div className="content">
                        <p className="pepe" >Is</p>
                        <h2>Image Hover Effects</h2>
                        <p className="pe">Lorem ipsum nisl vivamus viverra per facilisis morbi arcu tortor, varius blandit ligula fermentum sapien mi suspendisse ac orci, imperdiet hendrerit sem quam netus pellentesque luctus pretium.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBox">
                        <img src={ball} alt="a" />

        </div>
                        <div className="content">
                            <p className="pepe" >Everything</p>
                            <h2>Image Hover Effects</h2>
                            <p className="pe">Lorem ipsum nisl vivamus viverra per facilisis morbi arcu tortor, varius blandit ligula fermentum sapien mi suspendisse ac orci, imperdiet hendrerit sem quam netus pellentesque luctus pretium.</p>
                        </div>
                    </div>





                </div>)
}
export default Subtable;
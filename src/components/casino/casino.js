import React from 'react'
import './casino.css'
import jackpot from './jackpot.jpg'
import wheel from './wheel.jpg'
import wheel2 from './wheel2.jpg'
import bigwin from './bigWin.jpg'
function Casino() {
    return (<div className="container">
        <div className="box">
            <div className="imgBox">
                <img src={jackpot} alt="a"/>
              </div>
                <div className="content">
                    <p className="pepe">Football</p>
                    <h2>Image Hover Effects</h2>
                    <p className="pe">Lorem ipsum nisl vivamus viverra per facilisis morbi arcu tortor, varius blandit ligula fermentum sapien mi suspendisse ac orci, imperdiet hendrerit sem quam netus pellentesque luctus pretium.</p>
                </div>
            </div>
            <div className="box">
                <div className="imgBox">
                    <img src={wheel2} alt="a"/>
        </div>
                    <div className="content">
                        <p className="pepe" >Is</p>
                        <h2>Image Hover Effects</h2>
                        <p className="pe">Lorem ipsum nisl vivamus viverra per facilisis morbi arcu tortor, varius blandit ligula fermentum sapien mi suspendisse ac orci, imperdiet hendrerit sem quam netus pellentesque luctus pretium.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBox">
                        <img src={bigwin} alt="a" />

        </div>
                        <div className="content">
                            <p className="pepe" >Everything</p>
                            <h2>Image Hover Effects</h2>
                            <p className="pe">Lorem ipsum nisl vivamus viverra per facilisis morbi arcu tortor, varius blandit ligula fermentum sapien mi suspendisse ac orci, imperdiet hendrerit sem quam netus pellentesque luctus pretium.</p>
                        </div>
                    </div>





                </div>)
}
export default Casino;
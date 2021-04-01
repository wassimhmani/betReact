import React from 'react'
import './live.css'
import jackpot from './jackpot.jpg'
import wheel from './wheel.jpg'
import wheel2 from './wheel2.jpg'
import bigwin from './bigWin.jpg'
function Live() {
    return (<div className="container">
       <a data-toggle="modal" data-target="#sem-login">
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
            </a>
            <a data-toggle="modal" data-target="#sem-login">
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
                </a>
                <a data-toggle="modal" data-target="#sem-login">
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
                    </a>




                    
  <div class="modal fade seminor-login-modal" data-backdrop="static" id="sem-login">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">

        
        <div class="modal-body seminor-login-modal-body">
         <h5 class="modal-title text-center">LOGIN TO MY ACCOUNT</h5>
          <button type="button" class="close" data-dismiss="modal">
              <span><i class="fa fa-times-circle" aria-hidden="true"></i></span>
          </button>


    <form class="seminor-login-form">
      <div class="form-group">
        <input type="email" class="form-control" required autocomplete="off"/>
        <label class="form-control-placeholder" for="name">Email address</label>
      </div>
      <div class="form-group">
        <input type="password" class="form-control" required autocomplete="off"/>
        <label class="form-control-placeholder" for="password">Password</label>
      </div>
      <div class="form-group">
        <label class="container-checkbox">
        Remember Me On This Computer
        <input type="checkbox" checked="checked" required/>
        <span class="checkmark-box"></span>
        </label>
        </div>

        <div class="btn-check-log">
            <button type="submit" class="btn-check-login">LOGIN</button>
        </div>


       <div class="forgot-pass-fau text-center pt-3">
                                 <a href="/reset_pass" class="text-secondary">Forgot Your Password?</a>

                               </div>
                               <div class="create-new-fau text-center pt-3">
                                   <a href="#" class="text-primary-fau"><span data-toggle="modal" data-target="#sem-reg" data-dismiss="modal">Create A New Account</span></a>
                               </div>



      </form>

        </div>
      </div>
    </div>
  </div>
                </div>
                )
}
export default Live;
import React from 'react'
import './SportTable.css';
function getCurrentDate(separator = '') {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
}

function SportTable() {
    return (
        <div class="well">
            <table class="table">
                <thead>
                    <tr>
                        <th>Today, {getCurrentDate('-')}</th>
                        <th class="text-center">1</th>
                        <th class="text-center">x</th>
                        <th class="text-center">2</th>
                        <th style={{ width: '36px' }}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="team-names-block">


                                <span class="time">
                                    14:00
                                                            </span>

                                <span class="event " title="Getafe - Elche CF">
                                    <a href="#" class="ember-view">                                                                        Getafe

                                    - Elche CF
</a>                                                                </span>
                            </div>
                        </td>
                        <td><div class="text-center">2.02</div></td>
                        <td><div class="text-center">2.86</div></td>
                        <td><div class="text-center">4.75</div></td>
                        
                    </tr>
                    <tr>
                    <td>
                            <div class="team-names-block">


                                <span class="time">
                                    14:00
                                                            </span>

                                <span class="event " title="Getafe - Elche CF">
                                    <a href="#" class="ember-view">                                                                        Getafe

                                    - Elche CF
</a>                                                                </span>
                            </div>
                        </td>
                        <td><div class="text-center">2.02</div></td>
                        <td><div class="text-center">2.86</div></td>
                        <td><div class="text-center">4.75</div></td>
                        
                    </tr>
                    <tr>
                    <td>
                            <div class="team-names-block">


                                <span class="time">
                                    14:00
                                                            </span>

                                <span class="event " title="Getafe - Elche CF">
                                    <a href="#" class="ember-view">                                                                        Getafe

                                    - Elche CF
</a>                                                                </span>
                            </div>
                        </td>
                        <td><div class="text-center">2.02</div></td>
                        <td><div class="text-center">2.86</div></td>
                        <td><div class="text-center">4.75</div></td>
                        
                    </tr>
                   
                </tbody>
            </table>
        </div>)
}
export default SportTable;
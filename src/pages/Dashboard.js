import axios from 'axios'
import { React, useEffect, useState } from 'react'
import Logout from './Logout';

export default function Dashboard() {
    const url = "http://localhost:3001/dashboard/getData";
    const [data, setData] = useState([]);

    useEffect(() => {
        const aboutCont = new AbortController();
        try {
            axios.get(url).then((info) => {
                setData(info.data.row[0]);
                console.log(data);
                return () => aboutCont.abort();
            })
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <>
            <div class="page-title-section" style={{ backgroundImage: "url(" + "assets/img/bg/pagetitle.jpg" + ")" }} >
                <div class="container">
                    <h1>Dashboard</h1>
                    <ul>
                        <li><a href="index.php">Home</a></li>
                        <li><a href="about.php">Dashboard</a></li>
                    </ul>
                </div>
            </div>


            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="dashboard contact-form">
                            <ul id="dash_side" class="nav nav-tabs dash-tabs">
                                <li> <a href="#myaccount" data-toggle="tab" class="active show"> My Account </a> </li>
                                <li> <a href="#address" data-toggle="tab">My Address</a> </li>
                                <li> <a href="#change_password" data-toggle="tab">Change Password</a> </li>
                                <li> <a href="#logout" data-toggle="tab">Logout</a> </li>
                            </ul>
                            <div id="productTabContent" class="tab-content ">
                                <div class="tab-pane fade in active show" id="myaccount">
                                    <div class="std">
                                        <div class="col-sm-12">
                                            <h3 class="page-subheading text-center pb-20">ACCOUNT INFORMATIONS</h3>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label for="">Username</label>
                                                <input type="text" name="fname" placeholder="Name" value={data && (data.name)} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Email</label>
                                                <input type="text" name="lname" placeholder="Last Name" value={data && (data.email)} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Mobile</label>

                                                <input type="text" name="mobile" placeholder="mobile" value={data && (data.mobile)} />
                                            </div>
                                            
                                            <div class="col-md-12">
                                                <label for="">FirmName</label>
                                                <input type="text" name="Company Name" placeholder="Company Name" value={data && (data.firmname)} />
                                            </div>
                                          
                                       
                                    
                                            <div class="col-md-6">
                                                <label for="">GST Number</label>
                                                <input type="text" name="GST Number" placeholder="GST Number" value={data && data.gst} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Permanent Account Number (PAN)</label>
                                                <input type="text" name="PAN" placeholder="Permanent Account Number (PAN)" value={data && data.pancardno} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">GST Certificate</label>
                                                <div class="custom-file mt-2">
                                                    <input type="file" class="custom-file-input" id="customFile" name="filename" />
                                                    <label class="custom-file-label" for="customFile"> Upload GST Certificate</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">PAN Card</label>
                                                <div class="custom-file mt-2">
                                                    <input type="file" class="custom-file-input" id="customFile" name="filename" />
                                                    <label class="custom-file-label" for="customFile">Upload PAN Card</label>
                                                </div>
                                            </div>

                                            <div class="col-md-3 mb-30">
                                                <div class="center-holder"> <button type="submit">Update </button> </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="tab-pane fade" id="address" >
                                    <div class="std">
                                        <div class="col-sm-12">
                                            <h3 class="page-subheading text-center pb-20">MY ADDRESS</h3>
                                        </div>
                                        <div class="row">
                                          
                                            <div class="col-md-6">
                                                <label for="">Address</label>
                                                <input type="text" name="Address Line 1" placeholder="Address Line 1" value={data.address} />
                                            </div>
                                          
                                            <div class="col-md-6">
                                                <label for="">Country</label>
                                                <select className="form-control mt-3 ">

                                                    <option value={data.country} selected>{data.country}</option>
                                                    <option value="AK">India</option>
                                                    <option value="AZ">Shrilanka</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6 ">
                                                <label for="">State</label>
                                                <select className="form-control mt-3 " >
                                                    <option value={data.state} selected>{data.state}</option>
                                                    <option value="AL">Select State</option>
                                                    <option value="AK">MP</option>
                                                    <option value="AZ">UP</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">City</label>
                                                <select className="form-control mt-3 ">
                                                    <option value={data.city} selected>{data.city}</option>

                                                    <option value="AL">Select City</option>
                                                    <option value="AK">Bhopal</option>
                                                    <option value="AZ">Sagar</option>
                                                </select>
                                            </div>
                                            <div class="col-md-10">
                                                <label for="">Pincode</label>
                                                <input type="number" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==6) return false;" name="Pincode" placeholder="Pincode" value="23423423" />
                                            </div>
                                          
                                            <div class="col-md-3 mb-30 mx-auto d-block">
                                                <div class="center-holder"> <button type="submit">Update </button> </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="tab-pane fade" id="order">
                                    <div class="col-sm-12">
                                        <h3 class="page-subheading text-center pb-20">CHANGE PASSWORD</h3>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="center-holder"> <button type="submit"> Update </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="change_password">
                                    <div class="col-sm-12">
                                        <h3 class="page-subheading text-center pb-20">CHANGE PASSWORD</h3>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label for="password">Current Password:</label>
                                                <input id="password-field" type="password" class="form-control" name="password" value={data.password} />
                                                <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label for="newpassword">New Password:</label>
                                                <input id="newpassword-field" type="password" class="form-control" name="newpassword" value="secret" />
                                                <span toggle="#newpassword-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label for="retypepassword">Re-Type Password:</label>
                                                <input id="retype-password-field" type="password" class="form-control" name="retypepassword" value="secret" />
                                                <span toggle="#retype-password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="center-holder"> <button type="submit"> Update </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="logout">
                                    <Logout />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

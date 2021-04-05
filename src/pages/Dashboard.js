import axios from 'axios'
import { React, useEffect,useState } from 'react'
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
                                                <label for="">First Name</label>
                                                <input type="text" name="fname" placeholder="First Name" value={data && (data.fname)} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Last Name</label>
                                                <input type="text" name="lname" placeholder="Last Name" value={data &&(data.lname)} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Designation</label>

                                                <input type="text" name="Designation" placeholder="Designation" value={data &&(data.designation)} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Department</label>
                                                <input type="text" name="Department" placeholder="Designation" value={data &&(data.department)} />
                                            </div>
                                            <div class="col-md-12">
                                                <label for="">Company Name</label>
                                                <input type="text" name="Company Name" placeholder="Company Name" value={data &&(data.company_nm)} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Phone Number</label>
                                                <input type="number" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==11) return false;" name="mobile" placeholder="Phone Number" value={data &&(data.phone_no)} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Mobile Number</label>
                                                <input type="number" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==10) return false;" name="Pincode" placeholder="Mobile Number" value={data &&(data.mobile_no)} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Fax Number</label>
                                                <input type="text" name="Fax Number" placeholder="Fax Number" value={data &&(data.fax_number)} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Email</label>
                                                <input type="text" name="Email" placeholder="Email" value={data &&(data.email)} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Alternate Email</label>
                                                <input type="email" name="Alternate Email" placeholder="Alternate Email" value={data &&(data.alternate_email)} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Preferred Username</label>
                                                <input type="text" name="Preferred Username" placeholder="Preferred Username" value={data &&(data.preferred_username)} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">GST Number</label>
                                                <input type="text" name="GST Number" placeholder="GST Number" value={data && data.gst} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Permanent Account Number (PAN)</label>
                                                <input type="text" name="PAN" placeholder="Permanent Account Number (PAN)" value={data && data.pancard} />
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
                                            <div class="col-md-12">
                                                <label for="">Street/House No</label>
                                                <input type="text" name="Street/House No" placeholder="Street/House No" value={data.streetHouse} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Address Line 1</label>
                                                <input type="text" name="Address Line 1" placeholder="Address Line 1" value={data.address_I} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Address Line 2</label>
                                                <input type="text" name="Address Line 2" placeholder="Address Line 2" value={data.address_II} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Country</label>
                                                <select>
                                                
                                                    <option value={data.country} selected>{data.country}</option>
                                                    <option value="AK">India</option>
                                                    <option value="AZ">Shrilanka</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">State</label>
                                                <select>
                                                <option value={data.state} selected>{data.state}</option>

                                                    <option value="AL">Select State</option>
                                                    <option value="AK">MP</option>
                                                    <option value="AZ">UP</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">City</label>
                                                <select>
                                                <option value={data.city} selected>{data.city}</option>

                                                    <option value="AL">Select City</option>
                                                    <option value="AK">Bhopal</option>
                                                    <option value="AZ">Sagar</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Pincode</label>
                                                <input type="number" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==6) return false;" name="Pincode" placeholder="Pincode" value="23423423" />
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-check shipping">
                                                    <labal>Is Shipping Address same as Billing ?</labal>
                                                    <label class="redio_s">Yes
							  <input type="radio" checked="checked" name="radio" value={data.shipping_address} />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <label class="redio_s">No
							  <input type="radio" name="radio" value={data.shipping_address} />
                                                        <span class="checkmark"></span>
                                                    </label>

                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <label for="">Shipping Street/House No</label>
                                                <input type="text" name="Street/House No" placeholder="Shipping Street/House No" value={data.shipping_street_no} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Shipping Address Line 1</label>
                                                <input type="text" name="Address Line 1" placeholder="Shipping Address Line 1"  value={data.shipping_address_I}/>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Shipping Address Line 2</label>
                                                <input type="text" name="Address Line 2" placeholder="Shipping Address Line 2" value={data.shipping_address_II} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Shipping Country</label>
                                                <select>
                                                <option value={data.shipping_country} selected>{data.shipping_country}</option>

                                                    <option value="AL">Select Shipping Country</option>
                                                    <option value="AK">India</option>
                                                    <option value="AZ">Shrilanka</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Shipping State</label>
                                                <select>
                                                <option value={data.shipping_state} selected>{data.shipping_state}</option>

                                                    <option value="AL">Select Shipping State</option>
                                                    <option value="AK">MP</option>
                                                    <option value="AZ">UP</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Shipping City</label>
                                                <select>
                                                <option value={data.shipping_city} selected>{data.shipping_city}</option>

                                                    <option value="AL">Select Shipping City</option>
                                                    <option value="AK">Bhopal</option>
                                                    <option value="AZ">Sagar</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Shipping Pincode</label>
                                                <input type="number" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==6) return false;" name="Pincode" placeholder="Shipping Pincode" value="423423" />
                                            </div>
                                            <div class="col-md-3 mb-30">
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

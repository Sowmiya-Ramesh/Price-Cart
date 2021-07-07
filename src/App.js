import "./styles.css";
import { Button } from '@material-ui/core';
// import { Card } from '@material-ui/core';
export default function App() {
 
  return (
   
      <div className="App">
      <div class="card">
      <h5>Free</h5>
      <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
     <hr />
     <ul class="fa-ul">
              <li><span class="fa-li">✔️</span>Single User</li>
              <li><span class="fa-li">✔️</span>5GB Storage</li>
              <li><span className="fa-li">✔️</span>Unlimited Public Projects</li>
              <li><span className="fa-li">✔️</span>Community Access</li>
              <li className="text-muted"> <span className="fa-li">❌</span>Unlimited Private Projects</li>
              <li className="text-muted"><span className="fa-li">❌</span>Dedicated Phone Support</li>
              <li className="text-muted"><span className="fa-li">❌</span>Free Subdomain</li>
              <li className="text-muted"><span className="fa-li">❌</span>Monthly Status Reports</li>
      </ul> 
      <Button className="button" variant="contained" color="primary" href="#">
        Button
      </Button>
      </div>

<div className="card">
<h5>Plus</h5>
<h6 className="card-price text-center">$9<span class="period">/month</span></h6>
<hr />
<ul className="fa-ul">
        <li><span className="fa-li">✔️</span><strong>5 Users</strong></li>
        <li><span className="fa-li">✔️</span>50GB Storage</li>
        <li><span className="fa-li">✔️</span>Unlimited Public Projects</li>
        <li><span className="fa-li">✔️</span>Community Access</li>
        <li> <span className="fa-li">✔️</span>Unlimited Private Projects</li>
        <li><span className="fa-li">✔️</span>Dedicated Phone Support</li>
        <li><span className="fa-li">✔️</span>Free Subdomain</li>
        <li className="text-muted"><span className="fa-li">❌</span>Monthly Status Reports</li>
</ul> 
<Button className="button" variant="contained" color="primary" href="#">
  Button
</Button>
</div>
<div className="card">
<h5>Pro</h5>
<h6 className="card-price text-center">$49<span className="period">/month</span></h6>
<hr />
<ul className="fa-ul">
        <li><span className="fa-li">✔️</span><strong>Unlimited Users</strong></li>
        <li><span className="fa-li">✔️</span>150GB Storage</li>
        <li><span className="fa-li">✔️</span>Unlimited Public Projects</li>
        <li><span className="fa-li">✔️</span>Community Access</li>
        <li> <span className="fa-li">✔️</span>Unlimited Private Projects</li>
        <li><span className="fa-li">✔️</span>Dedicated Phone Support</li>
        <li><span className="fa-li">✔️</span><strong>Unlimited</strong> Free Subdomains</li>
        <li><span className="fa-li">✔️</span>Monthly Status Reports</li>
</ul> 
<Button className="button" variant="contained" color="primary" href="#">
  Button
</Button>
</div>
</div>
  
  );
}



<template>
  <div>

    <div class="theme-footer" id="mainFooter">
      <div class="container _ph-mob-0">

        <div class="prefooter">
        
        <div class="row row-eq-height row-mob-full" data-gutter="60">
          <div class="col-md-3">
            <div class="theme-footer-section theme-footer-">
              <a class="theme-footer-brand _mb-mob-30" href="#">
                <img src="https://www.happyvoyaging.com/themes/mmpt21/assets/img/logo-black.png" alt="Image Alternative text" title="Image Title"/>
              </a>
              <div class="theme-footer-brand-text">
                <p>Neque sed pellentesque praesent nascetur tristique vulputate aliquam dictum nullam maecenas tempor libero vulputate lorem</p>
                <p>Arcu fusce non faucibus proin est non elit senectus eros facilisi cursus nec ante magnis</p>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="row">
              <div class="col-md-4">
                <div class="theme-footer-section theme-footer-">
                  <h5 class="theme-footer-section-title">Happy Voyaging</h5>
                  <ul class="theme-footer-section-list">
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Refund  Policy</a>
                    </li>
                    <li>
                      <a href="#">Customer Support</a>
                    </li>
                    <li>
                      <a href="#">Advertising</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms of Use</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4">
                <div class="theme-footer-section theme-footer-">
                  <h5 class="theme-footer-section-title">Explore</h5>
                  <ul class="theme-footer-section-list">
                    <li>
                      <a href="#">Countries</a>
                    </li>
                    <li>
                      <a href="#">Regions</a>
                    </li>
                    <li>
                      <a href="#">Cities</a>
                    </li>
                    <li>
                      <a href="#">Districs</a>
                    </li>
                    <li>
                      <a href="#">Airports</a>
                    </li>
                    <li>
                      <a href="#">Hotels</a>
                    </li>
                    <li>
                      <a href="#">Places of Interest</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4">
                <div class="theme-footer-section theme-footer-">
                  <h5 class="theme-footer-section-title">Book</h5>
                  <ul class="theme-footer-section-list">
                    <li>
                      <a href="#">Flights</a>
                    </li>
                    <li>
                      <a href="#">Resorts</a>
                    </li>
                    <li>
                      <a href="#">Holidays</a>
                    </li>
                    <li>
                      <a href="#">Hotels</a>
                    </li>
                    <li>
                      <a href="#">Airport Transfers</a>
                    </li>
                    <li>
                      <a href="#">Visa</a>
                    </li>
                    <li>
                      <a href="#">Cruises</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="theme-footer-section _mt-mob-30">
              <div class="theme-footer-section-subscribe-bg"></div>
              <div class="theme-footer-section-subscribe-content">
                <h5 class="theme-footer-section-title">Save up to 50% off your next trip</h5>
                <p class="text-muted">Subscribe to unlock our secret deals</p>
                <form>
                  <div class="form-group">
                    <input class="form-control theme-footer-subscribe-form-control" type="email" placeholder="Type your e-mail here"/>
                  </div>
                  <button class="btn btn-primary-invert btn-shadow text-upcase theme-footer-subscribe-btn" type="submit">{{ $t('getdeals') }}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        </div>

        <div class="footer-content">
          
          <ul class="theme-copyright-social social-list">
            <li>
              <a class="fa fa-facebook" href="#"></a>
            </li>
            <li>
              <a class="fa fa-google" href="#"></a>
            </li>
            <li>
              <a class="fa fa-twitter" href="#"></a>
            </li>
            <li>
              <a class="fa fa-youtube-play" href="#"></a>
            </li>
            <li>
              <a class="fa fa-instagram" href="#"></a>
            </li>
          </ul>
        </div>

      </div>

      <div class="reserved theme-footer-brand-text">
        <div class="container">
          <span class="caption">© 2021 <a href="/">HappyVoyaging</a> All rights reserved.</span>
          <p>The content and images used on this site are copyright protected and copyrights vests with the respective
            owners. The usage of the content and images on this website is intended to promote the works and no
            endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>
        </div>
      </div>
    </div>

</div>

</template>

<script>
export default {

}
</script>

<style>

.theme-footer {
    background: #04425d;
    border-top: 1px solid #d9d9d9;
    margin-top: 50px;
    padding-bottom: 30px;
}

.prefooter{
  background: white;
  border-radius: 19px;
  box-shadow: 0 10px 50px rgb(0 0 0 / 14%);
  padding: 37px 33px 26px;
  margin: -50px auto 50px;
}

.footer-logo {
    position: relative;
    margin-bottom: 39px;
}

.footer-logo:before, .footer-logo:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 100%;
    height: 2px;
    width: 10%;
    background-color: #b7b7b7;
}

.footer-logo .logo-link {
    display: block;
    text-decoration: none;
    max-width: 175px;
    width: 100%;
    margin: 0 auto;
}

.thrillo-logo {
    background: url(https://happyvoyaging.com/uploads/global/logo.png);
}

.thrillo-logo.white-logo {
    width: 170px;
    height: 65px;
    background-position: 0 -198px;
}

.social-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    font-size: 20px;
}

.social-list li {
    margin: 0 10px;
}

.social-list li:first-child {
    margin-left: 0;
}

.reserved {
    color: #b7b7b7;
    text-align: center;
    padding: 29px 0 14px;
}

.reserved .caption {
    display: block;
    font-size: 1.2em;
    font-weight: 700;
    color: #b7b7b7;
    margin-bottom: 5px;
}

.theme-footer-subscribe-form-control {
    /* -webkit-box-shadow: none; */
    /* box-shadow: none; */
    padding: 10px 15px;
    border-radius: 6px;
    height: auto;
    /* border: unset; */
    font-size: 14px;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
}

@media (min-width: 375px){
.footer-logo:before, .footer-logo:after {
    width: 15%;
}
}

@media (min-width: 480px){
.footer-logo:before, .footer-logo:after {
    width: 20%;
}
}

@media (min-width: 768px){
.footer-logo:before, .footer-logo:after {
    width: 30%;
}
}

@media (min-width: 1200px){
.footer-logo:before, .footer-logo:after {
    width: 38%;
}
}

@media (min-width: 1024px){
.footer-logo:before {
    left: 33px;
}

.footer-logo:after {
    right: 33px;
}

.social-list li {
    margin: 0 14px;
}
}

</style>
<template>
  
<div>
<div class="theme-page-section theme-page-section-gray theme-page-section-lg">
      <div class="container">
        <div class="row">
          <div class="col-md-2-5 ">
            
            <SideNav />

          </div>
          <div class="col-md-9-5 ">
            <h1 class="theme-account-page-title">Travelers</h1>
            <div class="row row-col-gap" data-gutter="20">
              <div class="col-md-6 ">
                <div class="theme-account-traveler">
                  <i class="theme-account-traveler-icon" style="background-color: #ff0066;">J</i>
                  <div class="theme-account-traveler-body">
                    <p class="theme-account-traveler-name">John Doe</p>
                    <ul class="theme-account-traveler-details">
                      <li>john_doe772@gmail.com</li>
                      <li>+1 689 092 4415</li>
                      <li>United States</li>
                    </ul>
                    <ul class="theme-account-traveler-actions">
                      <li>
                        <a href="#">Edit</a>
                      </li>
                      <li>
                        <a href="#">Delete</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6 ">
                <div class="theme-account-traveler">
                  <i class="theme-account-traveler-icon" style="background-color: #0000ff;">M</i>
                  <div class="theme-account-traveler-body">
                    <p class="theme-account-traveler-name">Maya Smith</p>
                    <ul class="theme-account-traveler-details">
                      <li>hello_maya95@yahoo.com</li>
                      <li>+1 183 144 7825</li>
                      <li>United States</li>
                    </ul>
                    <ul class="theme-account-traveler-actions">
                      <li>
                        <a href="#">Edit</a>
                      </li>
                      <li>
                        <a href="#">Delete</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6 ">
                <div class="theme-account-traveler">
                  <i class="theme-account-traveler-icon" style="background-color: #ffbf00;">T</i>
                  <div class="theme-account-traveler-body">
                    <p class="theme-account-traveler-name">Tommy Jones</p>
                    <ul class="theme-account-traveler-details">
                      <li>tommy238123@gmail.com</li>
                      <li>+1 420 221 9853</li>
                      <li>United States</li>
                    </ul>
                    <ul class="theme-account-traveler-actions">
                      <li>
                        <a href="#">Edit</a>
                      </li>
                      <li>
                        <a href="#">Delete</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6 ">
                <div class="theme-account-traveler">
                  <i class="theme-account-traveler-icon" style="background-color: #bf00ff;">L</i>
                  <div class="theme-account-traveler-body">
                    <p class="theme-account-traveler-name">Lucy Doe</p>
                    <ul class="theme-account-traveler-details">
                      <li>lucy_kitty_11@gmail.com</li>
                      <li>+1 124 120 4472</li>
                      <li>United States</li>
                    </ul>
                    <ul class="theme-account-traveler-actions">
                      <li>
                        <a href="#">Edit</a>
                      </li>
                      <li>
                        <a href="#">Delete</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6 ">
                <div class="theme-account-traveler">
                  <i class="theme-account-traveler-icon" style="background-color: #009933;">D</i>
                  <div class="theme-account-traveler-body">
                    <p class="theme-account-traveler-name">Danny White</p>
                    <ul class="theme-account-traveler-details">
                      <li>danny___white@gmail.com</li>
                      <li>+1 114 259 6878</li>
                      <li>United States</li>
                    </ul>
                    <ul class="theme-account-traveler-actions">
                      <li>
                        <a href="#">Edit</a>
                      </li>
                      <li>
                        <a href="#">Delete</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6 ">
                <div class="theme-account-traveler">
                  <a class="theme-account-traveler-link-mask" href="#"></a>
                  <p class="theme-account-traveler-add-new">+ Add New Traveler</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


</div>    

</template>

<script>
export default {

    middleware: 'auth'

}
</script>

<style>

.theme-page-section-lg {
    padding: 100px 0;
}

</style>